import React from "react";
import { View, Pressable, StyleSheet, Text } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../../Themes/colors.ts";
import { pressed_styles } from "../../Themes/buton_pressed.tsx";

export default function WsteczButton({ step, setStep }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,

        pressed && pressed_styles.button_pressed,
      ]}
      onPress={() => setStep(step - 1)}
    >
      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <Feather name="arrow-left" size={16}  />
        <Text style={{ fontSize: 16, fontWeight: '500' }}>Wstecz</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.green12,

    justifyContent: "center",
    alignItems: "center",
  },
});
