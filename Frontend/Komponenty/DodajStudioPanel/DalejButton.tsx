import React from "react";
import { View, Pressable, StyleSheet, Text } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../../Themes/colors.ts";
import { pressed_styles } from "../../Themes/buton_pressed.tsx";

export default function DalejButton({ step, setStep }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,

        pressed && pressed_styles.button_pressed,
      ]}
      onPress={() => setStep(step + 1)}
    >
      <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
        <Text style={{ fontSize: 20, color: "white" }}>Dalej</Text>
        <Feather name="arrow-right" size={20} color="white" />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: Colors.green12,
    borderRadius: 12,

    justifyContent: "center",
    alignItems: "center",
  },
});
