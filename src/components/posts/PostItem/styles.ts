import { StyleSheet } from "react-native";
import { MD3LightTheme } from "react-native-paper";
import Layout from "../../../global/Layout";
import { theme } from "../../../global/styles/theme";
export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: Layout.window.width,
    alignItems: "center",
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    backgroundColor: theme.colors.secondary85,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderTopLeftRadius: MD3LightTheme.roundness,
    borderTopRightRadius: MD3LightTheme.roundness,
  },
  body: {
    backgroundColor: theme.colors.secondary70,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomLeftRadius: MD3LightTheme.roundness,
    borderBottomRightRadius: MD3LightTheme.roundness,
  },
  contentInBody: {
    padding: 4,
  },
  button: {
    color: theme.colors.highlight,
  },
});
