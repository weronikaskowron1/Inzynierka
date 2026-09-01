import { StyleSheet, Text, View, FlatList } from "react-native";
import { Button } from "@react-navigation/elements";
import FilterIcon from "../Komponenty/Buttons/FilterIcon.tsx";
import MonthCalendar from "../Komponenty/Rezerwacje/MonthCalendar.tsx";
import WeekCalendar from "../Komponenty/Rezerwacje/WeekCalendar.tsx";
import CalendarToggle from "../Komponenty/Rezerwacje/CalendarToggle.tsx";
import VisitMonthCalendar from "../Komponenty/Rezerwacje/VisitMonthCalendar.tsx";

import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { styles as GlobalStyles } from "../Themes/global_styles.tsx";

export default Rezerwacje;
function Rezerwacje() {
  const navigation = useNavigation();
  const [calendarType, setCalendarType] = useState<"week" | "month">("week");
  const [reservations, setReservations] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    getReservations();
  }, []);
  const getReservations = async () => {
    try {
      const userId = 1;

      const response = await fetch(
        `${process.env.EXPO_PUBLIC_API_URL}/api/visitcards/user/${userId}`,
      );

      const data = await response.json();

      setReservations(data);

      console.log(data);
    } catch (error) {
      console.error("Błąd pobierania rezerwacji:", error);
    }

  };
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
            <MonthCalendar setSelectedDate={setSelectedDate}/>
            <Text>{selectedDate.toLocaleDateString("pl-PL")}</Text>
          </View>
        )}
        <View style={styles.visits_container}>
          <FlatList
            data={reservations.filter(
              (item) =>
                new Date(item.data).toDateString() === selectedDate.toDateString()
            )}
            renderItem={({ item }) => (
              <VisitMonthCalendar
                service={item.service_name}
                date={item.data}
                company={item.company_name}
                duration={item.duration}
              />
            )}
          />
        </View>
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

  visits_container: {
    marginTop: 30,
    marginLeft: 30,
  },
});
