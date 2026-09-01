import { Text, View, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { pressed_styles } from "../../Themes/buton_pressed.tsx";
import { Colors } from "../../Themes/colors.ts";

import ThreeDotsIcon from "./ThreeDotsIcon.tsx";

const VisitMonthCalendar = ({
  service = "",
  date = null,
  company = "",
  duration = "",
}) => {
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
    height: 70,
    backgroundColor: "#EEF3E4",
    borderRadius: 10,
    padding: 6,
    paddingHorizontal: 15,

    flexDirection: "row",
    justifyContent: "space-between",
  },
  time_container: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: Colors.lightgrayBorder,
  },

  time_text: {
    fontWeight: "500",
    fontSize: 13,
    color: Colors.grayText,
  },
  info_container: {
    flex: 4,
    paddingLeft: 10,
  },
  service_text: {
    fontWeight: "500",
    fontSize: 14,
  },
  company_text: {
    fontSize: 12,
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

export default VisitMonthCalendar;
