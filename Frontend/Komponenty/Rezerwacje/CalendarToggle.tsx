import { Text, View, StyleSheet, Pressable, ScrollView } from "react-native";
import { useState } from "react";

import { Colors } from "../../Themes/colors.ts";

const CalendarToggle = () => {
  const [selectedMonthCalendar, setSelectedMonthCalendar] = useState(false);
  const [selectedWeekCalendar, setSelectedWeekCalendar] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.toggle_container}>
        <Pressable
          onPress={() => {
            setSelectedWeekCalendar(true);
            setSelectedMonthCalendar(false);
          }}
          style={
            [styles.selected,
            selectedWeekCalendar && styles.selected_background]
          }
        >
          <Text>Tydzień</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setSelectedWeekCalendar(false);
            setSelectedMonthCalendar(true);
          }}
          style={
            [styles.selected,
            selectedMonthCalendar && styles.selected_background]
          }
        >
          <Text>Miesiąc</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  toggle_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    width: "60%",
    height: 40,
    backgroundColor: "#f7f7f7",

    borderRadius: 20,
  },
  selected: {
    width: "50%",
    height: "95%",
    borderRadius: 20,

    alignItems: "center",
    justifyContent: "center",
  },

  selected_background: {
    backgroundColor: Colors.green2,
    width: "50%",
    height: "95%",
    borderRadius: 20,

    alignItems: "center",
    justifyContent: "center",
  },
});

export default CalendarToggle;
