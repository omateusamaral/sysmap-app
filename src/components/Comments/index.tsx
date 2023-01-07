import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";
import { useAsyncCallback } from "react-async-hook";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-paper";
import { listComments } from "../../api";
import { RootStackParamList } from "../../navigation";
import Background from "../common/Background";
import { EmptyList } from "../common/EmptyList";
import { ErrorDialog } from "../common/ErrorDialog";
import CommentItem from "./CommentItem";
import { styles } from "./styles";
export function CommentList(route: unknown) {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const props = route as {
    route: {
      params: {
        postId: number;
      };
    };
  };
  const listCommentsCallback = useAsyncCallback(listComments);

  useEffect(() => {
    listCommentsCallback.execute(props.route.params.postId);
  }, [props.route.params.postId]);
  return (
    <Background>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={32} color="white" />
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
      <ErrorDialog
        error={listCommentsCallback.error}
        hideDialog={listCommentsCallback.reset}
      />
    </Background>
  );
}
