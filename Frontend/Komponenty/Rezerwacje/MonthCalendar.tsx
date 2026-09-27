import { Text, View, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import { Colors } from "../../Themes/colors.ts";
import DateChanger from "./DateChanger";

const MonthCalendar = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const firstDay = (new Date(year, month, 1).getDay() + 6) % 7;
  const today = new Date().getDate();

  const daysInPreviousMonth = new Date(year, month, 0).getDate();

  const currentMonthText = new Date(year, month).toLocaleString("pl-PL", {
    month: "long",
  });
  const weekDays = ["PON", "WT", "ŚR", "CZW", "PT", "SB", "ND"];

  const calendarDays = [];

  for (let i = 0; i < 42; i++) {
    const dayNumber = i - firstDay + 1;

    if (dayNumber < 1) {
      // poprzedni miesiąc
      calendarDays.push({
        day: daysInPreviousMonth + dayNumber,
        currentMonth: false,
      });
    } else if (dayNumber > daysInMonth) {
      // następny miesiąc
      calendarDays.push({
        day: dayNumber - daysInMonth,
        currentMonth: false,
      });
    } else {
      // obecny miesiąc
      calendarDays.push({
        day: dayNumber,
        currentMonth: true,
      });
    }
  }

  const todayIndex = calendarDays.findIndex(
    (item) => item.day === today && item.currentMonth,
  );
  const [selectedDayIndex, setSelectedDayIndex] = useState(todayIndex);

  const previousMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear((prevYear) => prevYear - 1);
    } else {
      setMonth((prevMonth) => prevMonth - 1);
    }
    setSelectedDayIndex(-1);
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear((prevYear) => prevYear + 1);
    } else {
      setMonth((prevMonth) => prevMonth + 1);
    }
    setSelectedDayIndex(-1);
  };

  return (
    <View>
      <DateChanger
        previousSheet={previousMonth}
        nextSheet={nextMonth}
        currentMonthText={currentMonthText}
        currentYear={year}
      />

      <View style={styles.week}>
        {weekDays.map((item, index) => (
          <Text style={styles.weekDays} key={index}>
            {item}
          </Text>
        ))}
      </View>

      <View style={styles.calendar}>
        {calendarDays.map((item, index) => (
          <Pressable
            key={index}
            style={styles.day}
            onPress={() => setSelectedDayIndex(index)}
          >
            <LinearGradient
              colors={
                index == selectedDayIndex
                  ? [Colors.green1, Colors.green2]
                  : ["transparent", "transparent"]
              }
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.day_selected}
            >
              <Text
                style={[
                  styles.dayText,
                  !item.currentMonth && styles.otherMonthText,
                  index == selectedDayIndex && styles.day_selected,
                ]}
              >
                {item.day}
              </Text>
            </LinearGradient>
          </Pressable>
        ))}
      </View>
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

  week: {
    flexDirection: "row",
    marginBottom: 9,
  },

  weekDays: {
    textAlign: "center",
    width: "14.2857%",

    fontSize: 10,
    fontWeight: "500",
    color: Colors.green2,
  },

  calendar: {
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",

    borderWidth: 1,
    borderRadius: 10,
    borderColor: "white",
    boxShadow: "2px 2px 5px rgba(164, 164, 164, 0.2)",
  },

  day: {
    width: "14.2857%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",

    // borderWidth: 1,
    // borderColor: '#E8E8E8',
  },

  day_selected: {
    color: "white",
    width: 36,
    height: 36,
    borderRadius: 999,

    justifyContent: "center",
    alignItems: "center",
  },

  dayText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    textAlignVertical: "center",
  },

  otherMonthText: {
    color: "#A4A4A4",
  },
});

export default MonthCalendar;
