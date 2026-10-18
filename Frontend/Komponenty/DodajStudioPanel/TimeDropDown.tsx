import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Entypo, FontAwesome6 } from "@expo/vector-icons";
import { Colors } from "../../Themes/colors.ts";

export default function SortingDropDown({ time = "8:00" }) {
  const [open, setOpen] = useState(false);

  return (
    <Pressable style={styles.button} onPress={() => setOpen(!open)}>
      <Text style={{ fontSize: 13 }}>{time}</Text>

      <Entypo
        name={open ? "chevron-up" : "chevron-down"}
        size={15}
        color={Colors.grayText}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 7,
    paddingLeft: 10,
    width: 60,
    height: 35,
    boxShadow: "0px 2px 10px rgba(164, 164, 164, 0.1)",
    borderWidth: 1,
    borderColor: Colors.lightgrayBorder,
    borderRadius: 10,
    gap: 3,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
});
