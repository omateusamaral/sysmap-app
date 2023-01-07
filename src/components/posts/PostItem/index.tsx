import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { theme } from "../../../global/styles/theme";
import { styles } from "./styles";
interface PostItemProps {
  title: string;
  content: string;
  postId: number;
}
export function PostItem({ title, content, postId }: PostItemProps) {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <MaterialIcons name="post-add" size={40} color="white" />
        </View>
        <View style={styles.body}>
          <Text
            variant="titleMedium"
            style={{
              color: theme.colors.heading,
            }}
          >
            {title}
          </Text>
          <View style={styles.contentInBody}>
            <Text
              variant="titleSmall"
              style={{
                color: theme.colors.heading,
              }}
            >
              {content}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Comments", {
                postId,
              })
            }
          >
            <Button icon="link" textColor={theme.colors.highlight}>
              <Text variant="bodyLarge" style={styles.button}>
                Comentários
              </Text>
            </Button>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}