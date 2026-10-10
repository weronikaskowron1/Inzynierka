import { Text, View, StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { pressed_styles } from "../../Themes/buton_pressed.tsx";
import { Colors } from "../../Themes/colors.ts";

const Stars = ({ avg_rating = 1.5, size = 20 }) => {
  const starAmount = (avg_rating / 5) * 100;
  const goldWidth = starAmount > 0 ? 10000 / starAmount : 0;

  return (
    <View
      style={{
        width: "100%",
        marginTop: -4,
        marginBottom: 3,
        position: "relative",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <FontAwesome name="star" size={size} color={Colors.lightgrayBorder} />
        <FontAwesome name="star" size={size} color={Colors.lightgrayBorder} />
        <FontAwesome name="star" size={size} color={Colors.lightgrayBorder} />
        <FontAwesome name="star" size={size} color={Colors.lightgrayBorder} />
        <FontAwesome name="star" size={size} color={Colors.lightgrayBorder} />
      </View>

      <View
        style={{
          position: "absolute",
          width: `${starAmount}%`,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: `${goldWidth}%`,
          }}
        >
          <FontAwesome name="star" size={size} color="#E9BB5A" />
          <FontAwesome name="star" size={size} color="#E9BB5A" />
          <FontAwesome name="star" size={size} color="#E9BB5A" />
          <FontAwesome name="star" size={size} color="#E9BB5A" />
          <FontAwesome name="star" size={size} color="#E9BB5A" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Stars;
