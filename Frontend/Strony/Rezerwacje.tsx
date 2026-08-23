import { StyleSheet, Text, View } from "react-native";
import { Button } from "@react-navigation/elements";
import MonthCalendar from "../Komponenty/Rezerwacje/MonthCalendar.tsx";
import WeekCalendar from "../Komponenty/Rezerwacje/WeekCalendar.tsx";
import CalendarToggle from "../Komponenty/Rezerwacje/CalendarToggle.tsx";

import { useNavigation } from "@react-navigation/native";

export default Rezerwacje;
function Rezerwacje() {
  const navigation = useNavigation();
  return (
    <View style={styles.body}>
      <View style={styles.container}>
      <View style={{marginLeft: 30}}>
        <CalendarToggle />
        </View>
        <WeekCalendar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#FDFDF9",
  },

  container: {
    flex: 1,
    marginTop: 170,
    marginRight: 30,
    marginLeft: 0,
  },
});
