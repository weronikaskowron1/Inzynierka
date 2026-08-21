import { Text, View, StyleSheet, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../../Themes/colors.ts";

const DateChanger = ({
  previousSheet,
  nextSheet,
  currentMonthText,
  currentYear,
  currentWeek = "",
}) => {
  return (
    <View style={styles.calendar_switch_container}>
      <Pressable style={styles.arrow} onPress={() => previousSheet()}>
        <Feather name="chevron-left" size={20} color="#5C8A24" />
      </Pressable>
      <Text style={styles.date_text}>
        {currentWeek}{" "}
        {currentMonthText.charAt(0).toUpperCase() + currentMonthText.slice(1)}{" "}
        {currentYear}
      </Text>
      <Pressable style={styles.arrow} onPress={() => nextSheet()}>
        <Feather name="chevron-right" size={20} color={Colors.green2} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  calendar_switch_container: {
    width: "100%",
    height: 35,
    backgroundColor: "white",

    borderWidth: 1,
    borderRadius: 12,
    borderColor: "white",
    boxShadow: "2px 2px 5px rgba(164, 164, 164, 0.2)",

    marginBottom: 9,
    paddingHorizontal: 10,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date_text: {
    fontWeight: "500",
  },
});

export default DateChanger;
