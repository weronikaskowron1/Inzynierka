import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import { Colors } from "../Themes/colors.ts";
import { styles as GlobalStyles } from "../Themes/global_styles.tsx";

import { SimpleLineIcons, FontAwesome, Entypo } from "@expo/vector-icons";

import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from "react-native-safe-area-context";

import GoBackButton from "../Komponenty/StudioPanel/GoBackButton.tsx";
import HeartButton from "../Komponenty/StudioPanel/HeartButton.tsx";
import ServiceCard from "../Komponenty/StudioPanel/ServiceCard.tsx";

export default StudioPanel;
function StudioPanel({ id_studio }) {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [salony, setSalony] = useState([]);
  const [zakladka, setZakladka] = useState(0);

  const getSalony = async () => {
    try {
      //       const location = await getUserLocation(); //narazie na emulatorze pobieranie lokalizacji nie dziala
      //       console.log(location);
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_API_URL}/api/salony`,
      );

      const data = await response.json();

      console.log("Dane:", data);
      setSalony(data);
    } catch (error) {
      console.error(error);
    }
  };
  const zakladki = ["Usługi", "Pracownicy", "Informacje", "Opinie"];

  useEffect(() => {
    getSalony();
  }, []);

  return (
    <View style={styles.body}>
      <View style={styles.image_container}>
        <View style={{ paddingTop: insets.top, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <GoBackButton />
          <HeartButton />
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.name}>Studio Glam</Text>
        <View style={styles.info_container}>
          <FontAwesome name="star" size={23} color="#E9BB5A" />
          <Text style={styles.rating}>4.8</Text>
          <Text style={styles.distance}>(120 opinii)</Text>
          <Text style={styles.distance}>{` \u00B7  12km`}</Text>
        </View>
        <View style={styles.adres_container}>
          <Entypo name="location-pin" size={20} color={Colors.lightgrayText} />
          <Text style={styles.distance}>ul.Kościuszki 12, Rybnik</Text>
        </View>

        <View style={styles.zakladki_container}>
          {zakladki.map((item, index) => (
            <Pressable key={index} onPress={() => setZakladka(index)}>
              <Text
                style={[
                  styles.zakladka_text,
                  zakladka === index && styles.zakladka_selected,
                ]}
              >
                {item}
              </Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.main_container}>
          {zakladka === 0 && (
              <ServiceCard />

              )}
          {zakladka === 1 && <Text>Pracownicy</Text>}
          {zakladka === 2 && (
            <View>
              <Text>Informacje o salonie</Text>
              <Text>
                Informacje bllaaaaaaaaaaaaaaaaaaaaa blaaaaaaaaaaaaaaaaaaaaaa
                blaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </Text>
            </View>
          )}
          {zakladka === 3 && <Text>Opinie</Text>}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  image_container: {
    width: "100%",
    height: "25%",
    backgroundColor: Colors.green2,
  },
  container: {
    top: -20,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: Colors.backgroundColor,

    paddingTop: 30,
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 30,
    fontWeight: "700",
  },
  info_container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },

  rating: {
    fontWeight: "500",
    fontSize: 23,
    color: "#4B4B4B",
  },

  distance: {
    color: Colors.lightgrayText,
    fontWeight: "400",
    fontSize: 19,
  },
  adres_container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    left: -5,
  },
  zakladki_container: {
    marginTop: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  zakladka_text: {
    fontSize: 18,
    color: Colors.grayText,
  },
  zakladka_selected: {
    color: Colors.green1,
    fontWeight: "500",
    alignSelf: "flex-start",

    borderBottomWidth: 2,
    borderBottomColor: Colors.green1,

    paddingBottom: 4,
  },

  main_container: {
    marginTop: 30,
  },
});
