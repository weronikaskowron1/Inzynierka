import { Text, View, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { pressed_styles } from "../../Themes/buton_pressed.tsx";

import { Colors } from "../../Themes/colors.ts";

const AvatarIcon = ({
  name = "Weronika",
  color1 = Colors.green5,
  color2 = Colors.green4,
  text_color = Colors.green1,
  size = 60,
  text_size = 24
}) => {
  return (
    //     <Pressable
    //       style={({ pressed }) => [pressed && pressed_styles.button_pressed]}
    //     >
    <View>
      <LinearGradient
        colors={[color1, color2]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.avatar, {width: size, height: size}]}
      >
        <Text style={[styles.avatarText, { color: text_color, fontSize: text_size }]}>
          {name.charAt(0)}
        </Text>
      </LinearGradient>
    </View>
    //     </Pressable>
  );
};

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    fontWeight: "700",
  },
});

export default AvatarIcon;
