import { Text, View, StyleSheet } from "react-native";

import { Colors } from "../../Themes/colors.ts";
import { FontAwesome6 } from "@expo/vector-icons";

const StepIndicator = ({ step = 3 }) => {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <View style={styles.step}>
          <View
            style={[
              styles.circle_container,
              step >= 1 && styles.circle_container_selected,
            ]}
          >
            {step <= 1 ? (
              <Text
                style={[styles.circle, step === 1 && styles.circle_selected]}
              >
                1
              </Text>
            ) : (
              <FontAwesome6 name="check" size={25} color="white" />
            )}
          </View>

          {step <= 1 && <Text style={[styles.label, step === 1 && styles.label_selected]}>Informacje</Text>}
        </View>

        <View style={[styles.line, step > 1 && styles.line_selected]} />

        <View style={styles.step}>
          <View
            style={[
              styles.circle_container,
              step >= 2 && styles.circle_container_selected,
            ]}
          >
            {step <= 2 ? (
              <Text
                style={[styles.circle, step === 2 && styles.circle_selected]}
              >
                2
              </Text>
            ) : (
              <FontAwesome6 name="check" size={25} color="white" />
            )}
          </View>

          {step <= 2 && <Text style={[styles.label, step === 2 && styles.label_selected]}>Adres i kontakt</Text>}
        </View>

        <View style={[styles.line, step > 2 && styles.line_selected]} />

        <View style={styles.step}>
          <View
            style={[
              styles.circle_container,
              step >= 3 && styles.circle_container_selected,
            ]}
          >
            <Text style={[styles.circle, step === 3 && styles.circle_selected]}>
              3
            </Text>
          </View>

          {step <= 3 && <Text style={[styles.label, step === 3 && styles.label_selected]}>Godziny otwarcia</Text>}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    marginHorizontal: 20,
  },

  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 35,
  },

  step: {
    position: "relative",
    width: 50,
    height: 50,
  },

  circle_container: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 999,
    borderColor: Colors.lightgrayBorder,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  circle_container_selected: {
    borderColor: Colors.green12,
    backgroundColor: Colors.green12,
  },

  circle: {
    fontSize: 25,
    color: Colors.grayText,
  },

  circle_selected: {
    color: "white",
  },

  line: {
    flex: 1,
    height: 2,
    backgroundColor: Colors.lightgrayBorder,
  },

  line_selected: {
    backgroundColor: Colors.green12,
  },

  label: {
    position: "absolute",
    top: 55,
    width: 120,
    left: -35,
    textAlign: "center",
    fontSize: 13,
    color: Colors.lightgrayText,
  },
  label_selected: {
    color: Colors.green1,
    fontWeight: '500',
  },
});

export default StepIndicator;
