import { TextInput, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

import { Colors } from '../../Themes/colors.ts';

const Searchbar = ({placeholder_text="Czego dziś szukasz?"}) => {
  const [text, searchText] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.search, focused && styles.focus]}
        placeholder={placeholder_text}
        onChangeText={searchText}
        value={text}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <Ionicons
        name="search-outline"
        size={23}
        color={Colors.lightgrayText}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  search: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "white",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.95,
    shadowRadius: 3.84,
    elevation: 3,

    height: 50,
    width: "100%",

    color: Colors.lightgrayText,
    fontWeight: "400",
    fontSize: 17,

    paddingLeft: 45,

    outlineStyle: "none",
  },

  focus: {
//     borderWidth: 1,
//     borderColor: "#BCBCBC",
  },

  icon: {
    position: "absolute",
    marginLeft: 13,
  },
});

export default Searchbar;
