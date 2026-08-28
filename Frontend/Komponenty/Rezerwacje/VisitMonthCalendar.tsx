import { Text, View, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

import { pressed_styles } from "../../Themes/buton_pressed.tsx";
import { Colors } from "../../Themes/colors.ts";
const VisitMonthCalendar = ({
  service = "",
  day = "",
  time = "",
  company = "",
  duration = "",
}) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    backgroundColor: Colors.green6,
  },
});

export default VisitMonthCalendar;
