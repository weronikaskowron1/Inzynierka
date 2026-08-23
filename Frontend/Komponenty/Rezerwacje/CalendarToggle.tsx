import { Text, View, StyleSheet, Pressable, ScrollView } from "react-native";
import { Colors } from "../../Themes/colors.ts";

const CalendarToggle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.toggle_container}>
        <Text>Tydzień</Text>
        <Text>Miesiąc</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  toggle_container: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,

    width: "60%",
    height: 40,
    backgroundColor: Colors.light_gray,

    borderRadius: 20,
  },
});

export default CalendarToggle;
