import { Text, View, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import { pressed_styles } from "../../Themes/buton_pressed.tsx";
import { Colors } from "../../Themes/colors.ts";
const ServiceCard = ({
  service = "Manicure hybrydowy",
  duration = "20",
  price = "120",
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.info_container}>
        <Text style={styles.service_type_text}>{service}</Text>
        <View style={styles.detail_container}>
          <MaterialCommunityIcons
            name="clock-time-four-outline"
            size={18}
            color={Colors.green1}
          />
          <Text style={styles.duration_text}>{`${duration} min`}</Text>
          <Text style={{fontSize: 18, color: Colors.grayText}}>{`\u00B7`}</Text>
          <Text style={styles.price_text}>{`${price} zł`}</Text>
        </View>
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.arrow_button,
          pressed && pressed_styles.button_pressed,
        ]}
      >
        <Feather name="chevron-right" size={25} color={Colors.green1} />
      </Pressable>
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
    alignItems: 'center',
    gap: 5,
  },

  duration_text: {
    color: Colors.grayText,
    fontSize: 15,
  },

  price_text: {
    color:  Colors.grayText,
    fontSize: 15,
  },

});

export default ServiceCard;
