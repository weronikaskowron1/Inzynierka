import { Text, View, StyleSheet, Pressable, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import { Colors } from "../../Themes/colors.ts";

import DateChanger from "./DateChanger";

const WeekCalendar = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const weekday = (new Date().getDay() + 6) % 7;
  const today = new Date().getDate();

  const [selectedDayIndex, setSelectedDayIndex] = useState(weekday);

  const [firstDayWeek, setFirstDayWeek] = useState(today - weekday);
  const [lastDayWeek, setLastDayWeek] = useState(today - weekday + 6);

  const daysInPreviousMonth = new Date(year, month, 0).getDate();

  let currentMonthText = new Date(year, month).toLocaleString("pl-PL", {
    month: "long",
  });
  const weekDays = ["PON", "WT", "ŚR", "CZW", "PT", "SB", "ND"];
  const hours = [
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];

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
    setSelectedDayIndex(-1);
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
    setSelectedDayIndex(-1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <DateChanger
          previousSheet={previousWeek}
          nextSheet={nextWeek}
          currentMonthText={currentMonthText}
          currentYear={year}
          currentWeek={`${calendarDays[0]} \u2014 ${calendarDays[6]}`}
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
                    ? [Colors.green2, Colors.green3]
                    : ["transparent", "transparent"]
                }
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.day_selected}
              >
                <Text
                  style={
                    [styles.dayText,
                    index == selectedDayIndex && styles.day_selected]
                  }
                >
                  {item}
                </Text>
              </LinearGradient>
            </Pressable>
          ))}
        </View>
      </View>
      <View style={styles.scroll}>
        <ScrollView style={styles.calendarContainer}>
          {hours.map((hour) => (
            <View key={hour} style={styles.row}>
              <Text style={styles.hourText}>{hour}</Text>

              {weekDays.map((day, index) => (
                <View
                  key={`${day}-${hour}`}
                  style={[
                    styles.cell,
                    index === weekDays.length - 1 && styles.right_border,
                    index == selectedDayIndex && styles.cell_selected,
                  ]}
                />
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  header_container: {
    marginLeft: 30,
  },

  scroll: {
    flex: 1,
    width: "100%",
  },

  calendar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  week: {
    flexDirection: "row",
    marginBottom: -2,
  },

  weekDays: {
    textAlign: "center",
    width: "14.2857%",

    fontSize: 11,
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
    color: "#333",
    fontSize: 16,
    fontWeight: '500',
    textAlign: "center",
    textAlignVertical: "center",
  },

  day_selected: {
    color: "white",
    width: 36,
    height: 36,
    borderRadius: 999,

    justifyContent: 'center',
    alignItems: 'center'

  },
  cell_selected: {
    backgroundColor: Colors.green6_opacity,
  },

  calendarContainer: {
    flex: 1,
    width: "100%",
    paddingLeft: 30,
    paddingTop: 10,
    marginTop: -7,
  },

  row: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    position: "relative",

    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
    borderStyle: "dashed",
  },

  cell: {
    flex: 1,
    borderLeftWidth: 1,
    borderLeftColor: "#E5E5E5",
  },

  right_border: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: "#E5E5E5",
  },

  hourText: {
    position: "absolute",
    left: -30,
    width: 26,
    textAlign: "right",
    fontSize: 9,
    fontWeight: "500",
    color: "#555",
    transform: [{ translateY: -8 }],
  },
});
export default WeekCalendar;
