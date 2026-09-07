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
}) => {
  const height = (Number(duration) / 60) * 100;
  const visitDate = date ? new Date(date) : null;
  const day = visitDate?.toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const time = visitDate?.toLocaleTimeString("pl-PL", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Warsaw",
  });

  const endTime = new Date(visitDate?.getTime() + Number(duration) * 60 * 1000);

  const endTimeFormatted = endTime.toLocaleTimeString("pl-PL", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Warsaw",
  });
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        { height: `${height}%` },

        pressed && pressed_styles.button_pressed,
      ]}
    >
      <View style={styles.content}>
        <View style={styles.time_container}>
          <Text style={styles.time_text}>
            {time} - {endTimeFormatted}
          </Text>
        </View>
        <View style={styles.info_container}>
          <Text style={styles.service_text}>{service}</Text>
          <Text style={styles.company_text}>{company}</Text>
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
    padding: 5,
    zIndex: 20,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    gap: "5%",
  },
  time_container: {},

  time_text: {
    fontWeight: "500",
    fontSize: 6,
    color: Colors.green1,
  },
  info_container: {
    gap: "4%",
  },
  service_text: {
    fontWeight: "500",
    fontSize: 7,
  },
  company_text: {
    fontSize: 6,
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
