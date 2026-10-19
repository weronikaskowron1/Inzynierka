import { Text, View, StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { pressed_styles } from "../../Themes/buton_pressed.tsx";
import { Colors } from "../../Themes/colors.ts";
import Stars from "../StudioPanel/Stars.tsx";
import AvatarIcon from "../Buttons/AvatarIcon.tsx";

const ReviewPanel = ({
  username = "Karolina",
  stars = 4,
  date = "12 maja 2024",
  text = "Zaliczenie praktyki wg schematu A lub B wymaga załatwienia formalności w terminie wskazanym na PZE. Po wyznaczonym terminie obowiązuje wyłącznie schemat C.",
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <AvatarIcon
          name={username}
          color1={Colors.green6}
          color2={Colors.green6}
          text_color={Colors.green1}
          size={55}
          text_size={30}
          borderRadius={999}
          fontWeight="500"
        ></AvatarIcon>
      </View>
      <View style={styles.review_container}>
        <Text style={styles.username_text}>{username}</Text>
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <View style={styles.stars_container}>
            <Stars avg_rating={stars} />
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>
        <Text style={{fontSize: 13}}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 60,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 15,
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 10,
    boxShadow: "2px 3px 2px rgba(164, 164, 164, 0.1)",
  },
  image_container: {
    flex: 1,
  },
  review_container: {
    flex: 3,
    height: "100%",
    gap: 2,
  },
  username_text: {
    fontSize: 15,
    fontWeight: "500",
  },
  stars_container: {
    flex: 2,
  },
  date_container: {
    flex: 3,
  },
  date: {
    color: Colors.lightgrayText,
  },
});

export default ReviewPanel;
