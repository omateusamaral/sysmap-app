import { StyleSheet } from "react-native";
import Layout from "../../../global/Layout";
import { theme } from "../../../global/styles/theme";
export const styles = StyleSheet.create({
  container: {
    width: Layout.window.width,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: Layout.window.height * 0.5,
  },
  icon: {
    opacity: 0.2,
    paddingBottom: 16,
  },
  text: {
    color: theme.colors.heading,
    width: Layout.window.width * 0.8,
  },
});
