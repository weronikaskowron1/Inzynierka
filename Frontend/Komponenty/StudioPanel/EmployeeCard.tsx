import { Text, View, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import { pressed_styles } from "../../Themes/buton_pressed.tsx";
import { Colors } from "../../Themes/colors.ts";

import AvatarIcon from "../Buttons/AvatarIcon.tsx";
const EmployeeCard = ({
  name = "Manicure hybrydowy",
  surname = "20",
  image_path = "",
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <AvatarIcon />
      </View>
      <View style={styles.info_container}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    paddingHorizontal: 20,
    boxShadow: "2px 3px 2px rgba(164, 164, 164, 0.1)",
  },

  arrow_button: {
    alignItems: "center",
    justifyContent: "center",
  },

  service_type_text: {
    fontWeight: "700",
    fontSize: 18,
  },

  detail_container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  duration_text: {
    color: Colors.grayText,
    fontSize: 15,
  },

  price_text: {
    color: Colors.grayText,
    fontSize: 15,
  },
});

export default EmployeeCard;
