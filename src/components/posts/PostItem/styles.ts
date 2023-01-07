import { StyleSheet } from "react-native";
import { MD3LightTheme } from "react-native-paper";
import { theme } from "../../../global/styles/theme";
export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 20,
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
    padding: 8,
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
