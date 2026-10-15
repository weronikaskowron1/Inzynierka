import { Text, View, StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { pressed_styles } from "../../Themes/buton_pressed.tsx";
import { Colors } from "../../Themes/colors.ts";

import Stars from "../StudioPanel/Stars.tsx";

const RatePanel = ({
  avg_rating = 3.5,
  numberOfReviews = "120",
  five_stars = 78,
  four_stars = 16,
  three_stars = 4,
  two_stars = 1,
  one_star = 1,
}) => {
  const reviews = [
    { stars: "5", amount: five_stars },
    { stars: "4", amount: four_stars },
    { stars: "3", amount: three_stars },
    { stars: "2", amount: two_stars },
    { stars: "1", amount: one_star },
  ];
const starAmount = (1 - avg_rating/5) * 100;
  return (
    <View style={styles.container}>
      <View style={styles.avg_rating_container}>
        <Text style={{ fontSize: 40, fontWeight: "500", marginBottom: -4 }}>{avg_rating}</Text>
        <Stars avg_rating = {avg_rating}/>
        <Text style={{ color: Colors.lightgrayText }}>
          ({numberOfReviews} opinii)
        </Text>
      </View>
      <View style={styles.bar_rating_container}>
        {reviews.map((item) => (
          <View key={item.stars} style={styles.row}>
            <View style={styles.rating_text}>
              <Text style={{ fontWeight: "500", fontSize: 15 }}>
                {item.stars}
              </Text>
            </View>
            <View style={styles.bar}>
              <View
                style={[styles.bar_green, { width: `${item.amount}%` }]}
              ></View>
            </View>
            <View style={styles.rating_percentage}>
              <Text style={{ color: Colors.lightgrayText }}>
                {item.amount}%
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 15,
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 0,
    boxShadow: "2px 3px 2px rgba(164, 164, 164, 0.1)",
  },
  avg_rating_container: {
    flex: 1,
    height: "100%",
    borderRightWidth: 1,
    borderRightColor: Colors.lightgrayBorder,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15,
  },
  bar_rating_container: {
    flex: 2,
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rating_text: {
    flex: 1,
    alignItems: "center",
    //     backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  bar_green: {
    height: 8,
    backgroundColor: Colors.green2,
    borderRadius: 3,
  },
  bar: {
    flex: 4,
    width: "100%",
    height: 8,
    backgroundColor: Colors.lightgrayBorder,
    borderRadius: 3,
  },
  rating_percentage: {
    flex: 1,
    alignItems: "center",
    //     backgroundColor: 'gray',
    marginHorizontal: 9,
  },
});

export default RatePanel;
