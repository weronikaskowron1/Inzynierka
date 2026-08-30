import { StyleSheet, Text, View } from "react-native";
import { Button } from "@react-navigation/elements";
import FilterIcon from "../Komponenty/Buttons/FilterIcon.tsx";
import MonthCalendar from "../Komponenty/Rezerwacje/MonthCalendar.tsx";
import WeekCalendar from "../Komponenty/Rezerwacje/WeekCalendar.tsx";
import CalendarToggle from "../Komponenty/Rezerwacje/CalendarToggle.tsx";

import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { styles as GlobalStyles } from "../Themes/global_styles.tsx";

export default Rezerwacje;
function Rezerwacje() {
  const navigation = useNavigation();
  const [calendarType, setCalendarType] = useState<"week" | "month">("week");
  return (
    <View style={GlobalStyles.body}>
      <View style={styles.container}>
        <View style={{ marginLeft: 30 }}>
          <View style={styles.header}>
            <Text style={GlobalStyles.header_text}>Moje wizyty</Text>
            <FilterIcon />
          </View>
          <CalendarToggle
            calendarType={calendarType}
            setCalendarType={setCalendarType}
          />
        </View>

        {calendarType === "week" ? (
          <WeekCalendar />
        ) : (
          <View style={{ marginLeft: 30, marginTop: 20 }}>
            <MonthCalendar />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginRight: 30,
    marginLeft: 0,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

});
