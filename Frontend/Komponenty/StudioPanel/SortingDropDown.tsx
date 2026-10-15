import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Entypo, FontAwesome6 } from "@expo/vector-icons";
import { Colors } from "../../Themes/colors.ts";

export default function SortingDropDown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Najnowsze");

  const options = [
    "Najnowsze",
    "Najstarsze",
    "Najwyżej oceniane",
    "Najniżej oceniane",
  ];

  return (
    <View style={{ position: "relative", alignItems: "center" }}>
      <View style={styles.container}>
        <Pressable style={styles.button} onPress={() => setOpen(!open)}>
          <Text style={{ fontSize: 13}}>{selected}</Text>

          <Entypo
            name={open ? "chevron-up" : "chevron-down"}
            size={18}
            color={Colors.green1}
          />
        </Pressable>
      </View>
      {open && (
        <View style={styles.list}>
          {options.map((option, index) => (
            <Pressable
              key={option}
              style={({ pressed }) => [
                styles.option,
                index !== options.length - 1 && {
                  borderBottomWidth: 1,
                  borderBottomColor: Colors.lightgrayBorder,
                },
              ]}
              onPress={() => {
                setSelected(option);
                setOpen(false);
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 13 }}>{option}</Text>
                {selected === option && (
                  <View style={{ paddingRight: 5 }}>
                    <FontAwesome6
                      name={"check"}
                      size={14}
                      color={Colors.green1}
                    />
                  </View>
                )}
              </View>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 160,
  },

  button: {
    height: 35,
    boxShadow: "0px 2px 10px rgba(164, 164, 164, 0.1)",
    borderWidth: 1,
    borderColor: Colors.lightgrayBorder,
    borderRadius: 10,
    paddingHorizontal: 15,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
  },

  list: {
    position: "absolute",
    width: "100%",
    zIndex: 20,
    top: 40,
    borderWidth: 1,
    borderColor: Colors.lightgrayBorder,
    boxShadow: "2px 5px 10px rgba(164, 164, 164, 0.1)",
    borderRadius: 10,
    overflow: "hidden",

    backgroundColor: "white",
  },

  option: {
    marginHorizontal: 10,
    paddingLeft: 5,
    paddingVertical: 10,
    textAlign: "center",
  },
  selected: {
    backgroundColor: Colors.green6,
    borderRadius: 10,
  },
});
