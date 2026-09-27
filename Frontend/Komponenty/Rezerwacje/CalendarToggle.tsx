import { Text, View, StyleSheet, Pressable, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import { Colors } from "../../Themes/colors.ts";

const CalendarToggle = ({calendarType, setCalendarType}) => {
  const [selectedMonthCalendar, setSelectedMonthCalendar] = useState(false);
  const [selectedWeekCalendar, setSelectedWeekCalendar] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.toggle_container}>
        <Pressable
          onPress={() => {
            setSelectedWeekCalendar(true);
            setSelectedMonthCalendar(false);
            setCalendarType('week');
          }}
          style={styles.selected_container}
        >
          <LinearGradient
            colors={
              selectedWeekCalendar
                ? [Colors.green1, Colors.green2]
                : ["transparent", "transparent"]
            }
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.selected}
          >
            <Text style={[styles.text, selectedWeekCalendar && styles.text_selected]}>Tydzień</Text>
          </LinearGradient>
        </Pressable>
        <Pressable
          onPress={() => {
            setSelectedWeekCalendar(false);
            setSelectedMonthCalendar(true);
            setCalendarType('month');
          }}
          style={styles.selected_container}
        >
          <LinearGradient
            colors={
              selectedMonthCalendar
                ? [Colors.green1, Colors.green2]
                : ["transparent", "transparent"]
            }
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.selected}
          >
            <Text style={[styles.text, selectedMonthCalendar && styles.text_selected]}>Miesiąc</Text>
          </LinearGradient>
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
  selected_container: {
    width: "50%",
  },
  selected: {
    width: "100%",
    height: "95%",
    borderRadius: 20,

    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontWeight: "500",
    fontSize: 15,
    color: Colors.green2,
  },
  text_selected: {
    color: "white",
  },
});

export default CalendarToggle;
