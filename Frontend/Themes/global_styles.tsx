import { StyleSheet } from "react-native";
import { Colors } from "../Themes/colors.ts";

export const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },

  container: {
    marginHorizontal: 30,
    marginTop: 30,
  },

  header_text: {
    fontSize: 25,
    fontWeight: "700",
  },
});
