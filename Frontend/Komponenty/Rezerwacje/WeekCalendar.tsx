import { Text, View, StyleSheet, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

import { Colors } from "../../Themes/colors.ts";

import DateChanger from "./DateChanger";

const WeekCalendar = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const weekday = (new Date().getDay() + 6) % 7;
  const today = new Date().getDate();

  const [firstDayWeek, setFirstDayWeek] = useState(today - weekday);
  const [lastDayWeek, setLastDayWeek] = useState(today - weekday + 6);

  const daysInPreviousMonth = new Date(year, month, 0).getDate();

  const currentMonthText = new Date(year, month).toLocaleString("pl-PL", {
    month: "long",
  });
  const weekDays = ["PON", "WT", "ŚR", "CZW", "PT", "SB", "ND"];

  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  const calendarDays = [];

  for (let i = 0; i < 7; i++) {
    let dayNumber = firstDayWeek + i;
    if (dayNumber <= 0) {
      dayNumber = daysInPreviousMonth + dayNumber;
    }
    if (dayNumber > daysInMonth) {
      dayNumber = dayNumber - daysInMonth;
    }
    calendarDays.push(dayNumber);
  }

  const previousWeek = () => {
    if (month === 0) {
      setMonth(11);
      setYear((prevYear) => prevYear - 1);
    } else {
      setMonth((prevMonth) => prevMonth - 1);
    }
  };

  const nextWeek = () => {
    //     if (month === 11) {
    //       setMonth(0);
    //       setYear((prevYear) => prevYear + 1);
    //     } else {
    setFirstDayWeek((firstDayWeek) => firstDayWeek + 7);
  };

  return (
    <View>
      <DateChanger
        previousSheet={previousWeek}
        nextSheet={nextWeek}
        currentMonthText={currentMonthText}
        currentYear={year}
        currentWeek={`${firstDayWeek}-${lastDayWeek}`}
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
          <Pressable key={index} style={styles.day}>
            <View>
              <Text style={styles.dayText}>{item}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calendar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  week: {
    flexDirection: "row",
    marginBottom: -4,
  },

  weekDays: {
    textAlign: "center",
    width: "14.2857%",

    fontSize: 13,
    fontWeight: "500",
    color: Colors.grayText,
  },

  day: {
    width: "14.2857%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },

  dayText: {
    fontSize: 22,
    fontWeight: "500",
    color: "#333",
  },
});
export default WeekCalendar;
