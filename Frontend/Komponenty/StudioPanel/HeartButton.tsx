import { Text, View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../Themes/colors.ts";
import { pressed_styles } from "../../Themes/buton_pressed.tsx";

import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

const HeartButton = ({ polubione = false }) => {
  const [czyPolubione, setPolubione] = useState(polubione);

  useEffect(() => {
    setPolubione(polubione);
  }, [polubione]);
  return (
    <Pressable
      style={({ pressed }) => [
        styles.arrow,
        pressed && pressed_styles.button_pressed,
      ]}
      onPress={() => setPolubione((prev) => !prev)}
    >
      {czyPolubione ? (
        <Ionicons name="heart" style={styles.serduszko} color={Colors.green1} size={30} />
      ) : (
        <Ionicons
          name="heart-outline"
          style={styles.serduszko_blank}
          color={Colors.green1}
          size={30}
        />
      )}
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

export default HeartButton;
