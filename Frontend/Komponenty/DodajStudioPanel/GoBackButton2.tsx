import { Text, View, StyleSheet, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../../Themes/colors.ts";
import { pressed_styles } from "../../Themes/buton_pressed.tsx";

import { useNavigation } from "@react-navigation/native";
const GoBackButton2 = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={({ pressed }) => [
        pressed && pressed_styles.button_pressed,
      ]}
      onPress={() => navigation.goBack()}
    >
      <Feather name="chevron-left" size={38} color="black" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
});

export default GoBackButton2;
