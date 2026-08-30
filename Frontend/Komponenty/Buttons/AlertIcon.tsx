import { Text, View, StyleSheet, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { pressed_styles } from "../../Themes/buton_pressed.tsx";

import { Colors } from "../../Themes/colors.ts";

const AlertIcon = ({size = 45 }) => {
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
      <Feather name="bell" size={24} color="#5C8A24" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.green6,
  },
});
export default AlertIcon;
