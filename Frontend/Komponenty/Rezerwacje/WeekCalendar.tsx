import { Text, View, StyleSheet, Pressable, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import { Colors } from "../../Themes/colors.ts";

import DateChanger from "./DateChanger";
import VisitWeekCalendar from "./VisitWeekCalendar.tsx";

const WeekCalendar = ({ reservations = [] }) => {
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
    const date = new Date(year, month, firstDayWeek + i);

    calendarDays.push({
      day: date.getDate(),
      date: date,
      weekDay: (date.getDay() + 6) % 7,
    });
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
  const showVisit = (reservation, currentDate, hour) => {
    const reservationDate = new Date(reservation.data);
    const reservationTime = reservationDate.toLocaleTimeString("pl-PL", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Warsaw",
    });
    const [reservationHour, reservationMinute] = reservationTime.split(":");

    const currentHour = hour.split(":")[0];
    const topOffset = (Number(reservationMinute) / 60) * 100;

    const sameDay =
      reservationDate.getDate() === currentDate.getDate() &&
      reservationDate.getMonth() === currentDate.getMonth() &&
      reservationDate.getFullYear() === currentDate.getFullYear();

    return {
      hasVisit: sameDay && currentHour === reservationHour,
      topOffset: (Number(reservationMinute) / 60) * 100,
    };
  };

  const isDateInWeek = (reservationDate, firstDayWeek) => {
    const firstDate = new Date(year, month, firstDayWeek);

    const lastDate = new Date(year, month, firstDayWeek + 6);

    return (
      reservationDate >= firstDate &&
      reservationDate <
        new Date(
          lastDate.getFullYear(),
          lastDate.getMonth(),
          lastDate.getDate() + 1,
        )
    );
  };

  const hasVisit = (reservations, hour) => {
    let hasHourVisit = false;
    for (const reservation of reservations) {
      const reservationDate = new Date(reservation.data);
      const reservationTime = reservationDate.toLocaleTimeString("pl-PL", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Warsaw",
      });
      const [reservationHour, reservationMinute] = reservationTime.split(":");

      const currentHour = hour.split(":")[0];
      const finishTime =
        (Number(reservationHour) * 60 +
          Number(reservationMinute) +
          Number(reservation.duration)) /
        60;

      if (
        isDateInWeek(reservationDate, firstDayWeek) &&
        currentHour >= reservationHour &&
        currentHour < finishTime
      ) {
        hasHourVisit = true;
        return hasHourVisit;
      }
    }

    return hasHourVisit;
  };
  const dayHasVisit = (item) => {
    return reservations.some(
      (reservation) =>
        new Date(reservation.data).toDateString() === item.date.toDateString(),
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <DateChanger
          previousSheet={previousWeek}
          nextSheet={nextWeek}
          currentMonthText={currentMonthText}
          currentYear={year}
          currentWeek={`${firstDayWeek} \u2014 ${lastDayWeek}`}
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
                    ? [Colors.green2, Colors.green2]
                    : ["transparent", "transparent"]
                }
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.day_selected}
              >
                <Text
                  style={[
                    styles.dayText,
                    index == selectedDayIndex && styles.day_selected,
                  ]}
                >
                  {item.day}
                </Text>
                {dayHasVisit(item) && !(index == selectedDayIndex) && (
                  <View style={styles.dot} />
                )}
              </LinearGradient>
            </Pressable>
          ))}
        </View>
      </View>
      <View style={styles.scroll}>
        <ScrollView style={styles.calendarContainer}>
          {hours.map((hour) => (
            <View
              key={hour}
              style={[
                styles.row,
                !hasVisit(reservations, hour) && { height: 30 },
              ]}
            >
              <Text style={styles.hourText}>{hour}</Text>

              {weekDays.map((day, index) => (
                <View
                  key={`${day}-${hour}`}
                  style={[
                    styles.cell,
                    index === weekDays.length - 1 && styles.right_border,
                    index == selectedDayIndex && styles.cell_selected,
                  ]}
                >
                  {reservations.map((reservation, reservationIndex) => {
                    const currentDate = calendarDays[index].date;
                    const { hasVisit, topOffset } = showVisit(
                      reservation,
                      currentDate,
                      hour,
                    );

                    if (hasVisit) {
                      return (
                        <View
                          key={reservation.id ?? reservationIndex}
                          style={{
                            position: "absolute",
                            top: `${topOffset}%`,
                            left: 0,
                            right: 0,
                            height: "100%",
                            zIndex: 20,
                          }}
                        >
                          <VisitWeekCalendar
                            service={reservation.service_name}
                            date={reservation.data}
                            company={reservation.company_name}
                            duration={reservation.duration}
                          />
                        </View>
                      );
                    }

                    return null;
                  })}
                </View>
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
    marginTop: 20,
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
    zIndex: 10,
  },

  dayText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    textAlignVertical: "center",
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 999,
    backgroundColor: Colors.green2,
  },

  day_selected: {
    color: "white",
    width: 36,
    height: 36,
    borderRadius: 999,

    justifyContent: "center",
    alignItems: "center",
  },
  cell_selected: {
    backgroundColor: Colors.green7,
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
