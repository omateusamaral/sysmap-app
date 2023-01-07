import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { useAsyncCallback } from "react-async-hook";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Button, Divider, Text } from "react-native-paper";
import { listComments } from "../api";
import CommentItem from "../components/Comments/CommentItem";
import { styles } from "../components/Comments/styles";
import Background from "../components/common/Background";
import { EmptyList } from "../components/common/EmptyList";
import { ErrorDialog } from "../components/common/ErrorDialog";
import { Loader } from "../components/common/Loader";
import { UserDialog } from "../components/users/UserDialog";
import { theme } from "../global/styles/theme";
import { RootStackParamList } from "../navigation";
export function CommentList(route: unknown) {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const props = route as {
    route: {
      params: {
        postId: number;
        userId: number;
      };
    };
  };
  const listCommentsCallback = useAsyncCallback(listComments);

  function hideDialog() {
    setVisible(false);
  }
  function showDialog() {
    setVisible(true);
  }

  useEffect(() => {
    listCommentsCallback.execute(props.route.params.postId);
  }, [props.route.params.postId]);
  return (
    <Background>
      <View style={styles.goBack}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={32} color="white" />
        </TouchableOpacity>
      </View>
      {listCommentsCallback.loading ? (
        <Loader />
      ) : (
        <>
          <View style={styles.header}>
            <UserDialog
              userId={props.route.params.userId}
              visible={visible}
              hideModal={hideDialog}
            />
            <Text
              variant="bodyMedium"
              style={{
                color: theme.colors.heading,
              }}
            >
              Criado pelo usuário com id: {props.route.params.userId}
            </Text>
            <TouchableOpacity onPress={showDialog}>
              <Button icon="link">Clique aqui para mais informações</Button>
            </TouchableOpacity>
          </View>
          <FlatList
            data={listCommentsCallback.result ?? []}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item }) => (
              <>
                <CommentItem name={item.name} body={item.body} />
                <Divider />
              </>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 10, paddingTop: 50 }}
            snapToAlignment="start"
            decelerationRate="fast"
            ListEmptyComponent={EmptyList}
          />
        </>
      )}

      <ErrorDialog
        error={listCommentsCallback.error}
        hideDialog={listCommentsCallback.reset}
      />
    </Background>
  );
}
