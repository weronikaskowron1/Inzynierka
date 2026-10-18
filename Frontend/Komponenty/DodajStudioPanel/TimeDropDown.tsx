import { useState } from "react";
import { View, Text, Pressable, StyleSheet, Modal } from "react-native";
import { Entypo, FontAwesome6 } from "@expo/vector-icons";
import { Colors } from "../../Themes/colors.ts";

import HourWheelPicker from "../DodajStudioPanel/HourWheelPicker.tsx";

export default function TimeDropDown({ value = "08:00", onChange }) {
  const [open, setOpen] = useState(false);
  const [hour, minute] = value.split(":").map(Number);

  const changeHour = (newHour) => {
    onChange?.(
      `${String(newHour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`,
    );
  };

  const changeMinute = (newMinute) => {
    onChange?.(
      `${String(hour).padStart(2, "0")}:${String(newMinute).padStart(2, "0")}`,
    );
  };

  return (
    <View>
      <Pressable style={styles.button} onPress={() => setOpen(!open)}>
        <Text style={{ fontSize: 13 }}>{value}</Text>

        <Entypo
          name={open ? "chevron-up" : "chevron-down"}
          size={15}
          color={Colors.grayText}
        />
      </Pressable>
      <Modal
        visible={open}
        transparent={true}
        onRequestClose={() => setOpen(false)}
      >
        <View style={styles.picker}>
          {open && (
            <HourWheelPicker
              hour={hour}
              minute={minute}
              setHour={changeHour}
              setMinute={changeMinute}
              open={open}
              setOpen={setOpen}
            />
          )}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 7,
    paddingLeft: 10,
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
  picker: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
