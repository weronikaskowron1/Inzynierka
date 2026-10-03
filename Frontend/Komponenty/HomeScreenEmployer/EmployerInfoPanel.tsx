import { Text, View, StyleSheet } from "react-native";
import { Octicons, MaterialCommunityIcons  } from "@expo/vector-icons";

import { Colors } from "../../Themes/colors.ts";

const EmployerInfoPanel = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.one_panel, styles.border]}>
        <View style={styles.icon_container}>
        <MaterialCommunityIcons  name="storefront-outline" size={24} color={Colors.green2} />
        </View>
        <View style={styles.info_container}>
          <Text style={styles.number}>2</Text>
          <Text style={styles.text}>salony</Text>
        </View>
      </View>

      <View style={styles.one_panel}>
        <View style={styles.icon_container}>
          <Octicons name="people" size={24} color={Colors.green2} />
        </View>
        <View style={styles.info_container}>
          <Text style={styles.number}>2</Text>
          <Text style={styles.text}>pracowników</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    backgroundColor: "white",

    flexDirection: "row",
    paddingVertical: 15,

    borderWidth: 0,
    borderRadius: 15,
    borderColor: "white",
    boxShadow: "0px 4px 10px 3px rgba(164, 164, 164, 0.15)",
  },
  one_panel: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 40,
    gap: 10,
  },
  border: {
    borderRightWidth: 1,
    borderRightColor: Colors.lightgrayText,
  },

  icon_container: {
    width: 40,
    height: 40,
    borderRadius: 999,
    backgroundColor: Colors.green6,

    alignItems: "center",
    justifyContent: "center",
  },
  info_container: {},

  number: {
    fontSize: 18,
    fontWeight: "500",
  },
  text: {
    fontSize: 10,
    color: Colors.lightgrayText,
  },
});

export default EmployerInfoPanel;
