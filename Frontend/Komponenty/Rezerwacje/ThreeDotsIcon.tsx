import { Text, View, StyleSheet, Pressable } from "react-native";
import { pressed_styles } from "../../Themes/buton_pressed.tsx";

import { Colors } from "../../Themes/colors.ts";

const ThreeDotsIcon = ({ size = 25 }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        {
          width: size,
          height: size,
        },
        pressed && pressed_styles.button_pressed,
      ]}
    >
      <Text style={styles.dots}>...</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.green65,
  },

  dots: {
    color: Colors.green1,
    fontSize: 18,
    fontWeight: '500',

    transform: [{ translateY: -5 }],
  },
});
export default ThreeDotsIcon;
