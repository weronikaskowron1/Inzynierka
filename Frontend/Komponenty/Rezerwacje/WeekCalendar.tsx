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

  let currentMonthText = new Date(year, month).toLocaleString("pl-PL", {
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
    let newFirstDay = firstDayWeek - 7;
    let newLastDay = lastDayWeek - 7;
    let newMonth = month;
    let newYear = year;

    if (newFirstDay <= 0) {
      newFirstDay += daysInPreviousMonth;
      if (month === 0) {
        newMonth = 11;
        newYear = year - 1;
      } else {
        newMonth = month - 1;
      }
    }

    if (newLastDay <= 0) {
      newLastDay += daysInPreviousMonth;

    }

    setFirstDayWeek(newFirstDay);
    setLastDayWeek(newLastDay);
    setMonth(newMonth);
    setYear(newYear);
  };

  const nextWeek = () => {
    let newFirstDay = firstDayWeek + 7;
    let newLastDay = lastDayWeek + 7;
    let newMonth = month;
    let newYear = year;

    if (newFirstDay > daysInMonth) {
      newFirstDay -= daysInMonth;
      if (month === 11) {
        newMonth = 0;
        newYear = year + 1;
      } else {
        newMonth = month + 1;
      }
    }

    if (newLastDay > daysInMonth) {
      newLastDay -= daysInMonth;

    }

    setFirstDayWeek(newFirstDay);
    setLastDayWeek(newLastDay);
    setMonth(newMonth);
    setYear(newYear);
  };

  return (
    <View>
      <DateChanger
        previousSheet={previousWeek}
        nextSheet={nextWeek}
        currentMonthText={currentMonthText}
        currentYear={year}
        currentWeek={`${calendarDays[0]}-${calendarDays[6]}`}
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
