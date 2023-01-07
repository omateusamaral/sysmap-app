import { Platform, StatusBar, StyleSheet } from "react-native";
import Layout from "../../global/Layout";
export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    width: Layout.window.width,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: Layout.window.width * 0.8,
  },
  avatar: {
    padding: 4,
  },
  name: {
    borderBottomWidth: 1,
    paddingVertical: 4,
  },

  body: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 8,
    width: Layout.window.width * 0.8,
  },
  goBack: {
    flexDirection: "row",
    alignContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop:
      Platform.OS === "android"
        ? StatusBar.currentHeight
        : Number(StatusBar.currentHeight) * 100 + 50,
  },
});
