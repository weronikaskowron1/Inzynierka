import { Text, View, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { pressed_styles } from "../../Themes/buton_pressed.tsx";

import { Colors } from "../../Themes/colors.ts";

const DodajSalon = () => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && pressed_styles.button_pressed,
      ]}
    >
      <View style={styles.text_container}>
        <AntDesign name="plus" size={24} color={Colors.green1} />
        <Text style={styles.dodaj_salon_text}>Dodaj salon</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: Colors.green1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.green7,

    width: "100%",
    height: 60,
  },
  text_container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  dodaj_salon_text: {
    fontWeight: "500",
    fontSize: 18,
    color: Colors.green1,
  },
});
export default DodajSalon;
