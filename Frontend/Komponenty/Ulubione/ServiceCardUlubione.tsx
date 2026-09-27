import { Text, View, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SimpleLineIcons, FontAwesome } from "@expo/vector-icons";
import HeartIcon from "../Buttons/HeartIcon.tsx";
import AvatarIcon from "../Buttons/AvatarIcon.tsx";

import { pressed_styles } from "../../Themes/buton_pressed.tsx";
import { Colors } from "../../Themes/colors.ts";

const ServiceCardUlubione = ({ service_name, rating, distance }) => {
  let image_uploaded = false;
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.service_container,
          pressed && pressed_styles.button_pressed,
        ]}
      >
        {!image_uploaded && (
          <AvatarIcon
            name={service_name}
            color1={Colors.green6}
            color2={Colors.green6}
            text_color={Colors.green2}
            size={70}
            text_size={30}
          />
        )}

        {image_uploaded && <View style={styles.image_container} />}

        <View style={styles.service_info}>
          <Text style={styles.service_name}>{service_name}</Text>
          <View style={styles.info_container}>
            <FontAwesome name="star" size={15} color="#E9BB5A" />
            <Text style={styles.rating}>{rating}</Text>
            <Text style={styles.distance}>{`\u00B7 ${distance}`}</Text>
          </View>
        </View>
        <View style={styles.heart_container}>
          <HeartIcon />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: 70,
  },

  service_container: {
    flexDirection: "row",
    padding: 10,
    paddingRight: 15,
    alignItems: "center",
    borderWidth: 0,
    borderRadius: 15,
    borderColor: "white",
    boxShadow: "0px 0px 7px rgba(164, 164, 164, 0.2)",
  },

  image_container: {
    width: 70,
    height: 70,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "red", //tymczasowe
  },

  service_info: {
    padding: 7,
    paddingLeft: 14,
    justifyContent: "center",
  },

  service_name: {
    fontWeight: "700",
    fontSize: 19,
    color: "#4B4B4B",
  },

  info_container: {
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },

  rating: {
    fontWeight: "500",
    fontSize: 16,
    color: "#4B4B4B",
  },

  distance: {
    color: Colors.lightgrayText,
    fontWeight: "400",
    fontSize: 16,
  },

  heart_container: {
    marginLeft: "auto",
  },
});
export default ServiceCardUlubione;
