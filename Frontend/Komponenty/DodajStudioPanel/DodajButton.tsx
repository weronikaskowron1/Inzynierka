import React from "react";
import { View, Pressable, StyleSheet, Text } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../../Themes/colors.ts";
import { pressed_styles } from "../../Themes/buton_pressed.tsx";

export default function DodajButton() {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,

        pressed && pressed_styles.button_pressed,
      ]}
    >
        <Text style={{ fontSize: 16, color: "white", fontWeight: '500' }}>Dodaj salon</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 50,
    backgroundColor: Colors.green12,
    borderRadius: 12,

    justifyContent: "center",
    alignItems: "center",
  },
});
