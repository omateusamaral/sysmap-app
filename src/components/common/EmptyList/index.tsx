import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { styles } from "./styles";

export function EmptyList() {
  return (
    <View style={styles.container}>
      <AntDesign name="warning" size={100} color="gray" style={styles.icon} />
      <Text variant="titleLarge" style={styles.text}>
        Hmm... parece que não encontramos nada
      </Text>
    </View>
  );
}
