import { Text, View, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import { pressed_styles } from "../../Themes/buton_pressed.tsx";
import { Colors } from "../../Themes/colors.ts";

import AvatarIcon from "../Buttons/AvatarIcon.tsx";
const EmployeeCard = ({
  name = "Weronika",
  surname = "Skowron",
  image_path = "",
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <AvatarIcon
          name={name}
          name2={surname}
          color1={Colors.green6}
          color2={Colors.green6}
          text_color={Colors.green1}
          size={52}
          text_size={22}
          borderRadius={999}
          fontWeight="500"
        />
      </View>
      <View style={styles.info_container}>
        <Text style={styles.name_text}>
          {name} {surname}
        </Text>
        <Text style={styles.role_text}>Wizażystka</Text>
      </View>
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
    alignItems: "center",
    gap: 10,
    padding: 12,
    paddingHorizontal: 20,
    boxShadow: "2px 3px 2px rgba(164, 164, 164, 0.1)",
  },

  name_text: {
    fontSize: 18,
    fontWeight: "500",
  },

  role_text: {
    fontSize: 12,
    color: Colors.grayText,
  },
});

export default EmployeeCard;
