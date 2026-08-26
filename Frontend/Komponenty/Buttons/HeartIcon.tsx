import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons, Fontisto } from "@expo/vector-icons";

const HeartIcon = ({ polubione = false }) => {
  const [czyPolubione, setPolubione] = useState(polubione);
  useEffect(() => {
    setPolubione(polubione);
  }, [polubione]);
  return (
    <Pressable
      style={styles.polubione}
      onPress={() => setPolubione((prev) => !prev)}
    >
      {czyPolubione ? (
        <Ionicons name="heart" style={styles.serduszko} size={35} />
      ) : (
        <Ionicons
          name="heart-outline"
          style={styles.serduszko_blank}
          size={35}
        />
      )}
    </Pressable>
  );
};
const styles = StyleSheet.create({
  serduszko: {
    color: "red",
  },
  serduszko_blank: {
    color: "gray",
  },
});

export default HeartIcon;
