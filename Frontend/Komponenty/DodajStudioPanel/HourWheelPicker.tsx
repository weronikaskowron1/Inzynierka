import { Text, View, StyleSheet, Pressable } from "react-native";
import { Colors } from "../../Themes/colors.ts";
import { pressed_styles } from "../../Themes/buton_pressed.tsx";
import WheelPicker from "@quidone/react-native-wheel-picker";

const HourWheelPicker = ({ hour, setHour, minute, setMinute }) => {
  const hours = [...Array(24).keys()].map((index) => ({
    value: index,
    label: index.toString().padStart(2, "0"),
  }));

  const minutes = [...Array(60).keys()].map((index) => ({
    value: index,
    label: index.toString().padStart(2, "0"),
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wybierz godzinę</Text>

      <View style={styles.pickerContainer}>
        <View style={styles.selectedBackground} pointerEvents="none" />

        <WheelPicker
          data={hours}
          value={hour}
          onValueChanged={({ item }) => setHour(item.value)}
          renderOverlay={null}
          width="50%"
          itemHeight={40}
          visibleItemCount={5}
        />

        <WheelPicker
          data={minutes}
          value={minute}
          onValueChanged={({ item }) => setMinute(item.value)}
          renderOverlay={null}
          width="50%"
          itemHeight={40}
          visibleItemCount={5}
        />
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.ok_button,

          pressed && pressed_styles.button_pressed,
        ]}
      >
        <Text style={{ fontSize: 16, color: "white", fontWeight: "500" }}>
          OK
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: 290,
    height: 340,
    borderRadius: 15,
    boxShadow: "0px 4px 10px 3px rgba(164, 164, 164, 0.15)",
    padding: 10,
  },

  title: {
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 15,
  },

  pickerContainer: {
    flexDirection: "row",
    position: "relative",
    alignItems: "center",
    width: "100%",
    height: 200,
  },

  selectedBackground: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -20 }],
    width: "90%",
    left: "5%",
    height: 40,
    backgroundColor: Colors.green6,
    borderRadius: 12,
    alignSelf: "center",
  },
  ok_button: {
    width: "90%",
    height: 40,
    backgroundColor: Colors.green12,
    borderRadius: 12,

    justifyContent: "center",
    alignItems: "center",
  },
});

export default HourWheelPicker;
