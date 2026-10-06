import { Text, View, StyleSheet, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../../Themes/colors.ts";
import { pressed_styles } from "../../Themes/buton_pressed.tsx";

import { useNavigation } from "@react-navigation/native";
const GoBackButton = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={({ pressed }) => [
        styles.arrow,
        pressed && pressed_styles.button_pressed,
      ]}
      onPress={() => navigation.goBack()}
    >
      <Feather name="chevron-left" size={32} color={Colors.green1} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  arrow: {
    backgroundColor: Colors.backgroundColor,
    borderRadius: 999,
    height: 45,
    width: 43,

    justifyContent: "center",
    alignItems: "center",
  },
});

export default GoBackButton;
