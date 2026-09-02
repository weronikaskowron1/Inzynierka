import { Text, View, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { pressed_styles } from "../../Themes/buton_pressed.tsx";
import { Colors } from "../../Themes/colors.ts";

import ThreeDotsIcon from "./ThreeDotsIcon.tsx";


const VisitWeekCalendar = ({
  service = "",
  date = null,
  company = "",
  duration = "",
  cellHeight = 60,
}) => {
    const height = (duration / 60) * cellHeight;
  const visitDate = date ? new Date(date) : null;
  const day = visitDate?.toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const time = visitDate?.toLocaleTimeString("pl-PL", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        {height: '200%'},

        pressed && pressed_styles.button_pressed,
      ]}
    >
      <View style={styles.time_container}>
        <Text style={styles.time_text}>9:00</Text>
      </View>
      <View style={styles.info_container}>
        <Text style={styles.service_text}>{service}</Text>
        <Text style={styles.company_text}>{company}</Text>
        <View style={styles.duration_container}>
          <MaterialCommunityIcons
            name="clock-time-four-outline"
            size={12}
            color={Colors.green1}
          />
          <Text style={styles.duration_text}>{duration} min</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: Colors.green5,
    borderRadius: 6,
    zIndex: 20


  },
  time_container: {
  },

  time_text: {
    fontWeight: "500",
    fontSize: 5,
    color: Colors.grayText,
  },
  info_container: {
  },
  service_text: {
    fontWeight: "500",
    fontSize: 5,
  },
  company_text: {
    fontSize: 5,
    color: Colors.green1,
  },
  duration_container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 2,
  },

  duration_text: {
    fontSize: 10,
    color: Colors.green1,
  },
});

export default VisitWeekCalendar;
