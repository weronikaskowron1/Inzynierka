import { Text, View, StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { pressed_styles } from "../../Themes/buton_pressed.tsx";
import { Colors } from "../../Themes/colors.ts";

const RatePanel = ({
  avg_rating = '4.8',
  numberOfReviews = '120',
  five_stars = '78%',
  four_stars = '16%',
  three_stars = '4%',
  two_stars = '1%',
  one_star = '1%'
}) => {
  return (
    <View style={styles.container}>
    <View style={styles.avg_rating_container}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
    <FontAwesome name="star" size={30} color="#E9BB5A" />
        <Text style={{fontSize: 40, fontWeight: '500', }}>4.8</Text>
    </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 12,
    paddingHorizontal: 20,
    boxShadow: "2px 3px 2px rgba(164, 164, 164, 0.1)",
  },
});

export default RatePanel;
