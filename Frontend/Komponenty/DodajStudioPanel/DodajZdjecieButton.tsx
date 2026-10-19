import React from "react";
import { View, Pressable, StyleSheet, Text } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../../Themes/colors.ts";
import { pressed_styles } from "../../Themes/buton_pressed.tsx";

export default function DodajZdjecieButton() {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,

        pressed && pressed_styles.button_pressed,
      ]}
    >
    <View style={{flexDirection:'row', gap:8, alignItems: 'center'}}>
      <Feather name="camera" size={23} color={Colors.green1} />
      <Text style={{fontSize: 16, color: Colors.green1}}>Dodaj zdjęcie główne</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 50,
        backgroundColor: Colors.green6,
        borderRadius: 12,

        justifyContent: 'center',
        alignItems: 'center'
        },
    });
