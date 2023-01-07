import { Ionicons } from "@expo/vector-icons";
import { memo } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
interface CommentItemProps {
  name: string;
  body: string;
}
function CommentItem({ name, body }: CommentItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.avatar}>
          <Ionicons name="person-circle" size={48} color="white" />
        </View>
        <View style={styles.name}>
          <Text
            variant="titleMedium"
            style={{
              color: theme.colors.heading,
              maxWidth: "80%",
            }}
            adjustsFontSizeToFit
          >
            {name}
          </Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text
          variant="bodyMedium"
          style={{
            color: theme.colors.secondary100,
          }}
        >
          {body}
        </Text>
      </View>
    </View>
  );
}

export default memo(CommentItem);
