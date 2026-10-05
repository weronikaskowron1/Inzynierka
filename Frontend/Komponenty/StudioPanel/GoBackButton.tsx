import { Text, View, StyleSheet, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../../Themes/colors.ts";

import { useNavigation } from "@react-navigation/native";
const GoBackButton = () => {
    const navigation = useNavigation();
  return (
      <Pressable style={styles.arrow} onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={30} color={Colors.green1} />
      </Pressable>
  );
};

const styles = StyleSheet.create({
  arrow: {
    backgroundColor: 'white',
    borderRadius: 999,
    height: 50,
    width: 43,

    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default GoBackButton;
