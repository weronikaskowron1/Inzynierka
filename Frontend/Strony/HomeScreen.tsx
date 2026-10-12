import { StyleSheet, Text, View, ScrollView } from "react-native";

import Welcome from "../Komponenty/HomeScreen/Welcome.tsx";
import AlertIcon from "../Komponenty/Buttons/AlertIcon.tsx";
import CategoryIcon from "../Komponenty/HomeScreen/CategoryIcon.tsx";
import NextVisitCard from "../Komponenty/HomeScreen/NextVisitCard.tsx";
import Searchbar from "../Komponenty/HomeScreen/Searchbar.tsx";
import StudioCard from "../Komponenty/HomeScreen/StudioCard.tsx";
import WszystkieText from "../Komponenty/HomeScreen/WszystkieText.tsx";
import {useAuth} from "../Context/AuthContext"

import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import { Colors } from "../Themes/colors.ts";
import { styles as GlobalStyles } from "../Themes/global_styles.tsx";

import { getUserLocation } from "../utils/getUserLocation.js";
import { calculateDistance } from "../utils/calculateDistance.js";

const API_URL = process.env.API_URL;

export default HomeScreen;
function HomeScreen() {
  const navigation = useNavigation();
  const {user} = useAuth();
  const [salony, setSalony] = useState([]);

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

  useEffect(() => {
    getSalony();
  }, []);

  console.log(process.env.EXPO_PUBLIC_API_URL);
  const categories_icons = [
    {
      title: "Fryzjer",
      icon: "scissors",
      library: "Feather",
    },
    {
      title: "Paznokcie",
      icon: "sparkles-outline",
      library: "Ionicons",
    },
    {
      title: "Kosmetyka",
      icon: "leaf-outline",
      library: "Ionicons",
    },
    {
      title: "Makijaż",
      icon: "paintbrush",
      library: "Octicons",
    },
  ];
  return (
    <ScrollView>
      <View style={GlobalStyles.body}>
        <View style={GlobalStyles.container}>
          <View style={styles.header}>
            <Welcome />
            <AlertIcon />
          </View>
          <View style={styles.searcharbar}>
            <Searchbar />
          </View>
          <View style={styles.categories_container}>
            {categories_icons.map((item, index) => (
              <CategoryIcon
                key={index}
                title={item.title}
                icon={item.icon}
                library={item.library}
              />
            ))}
          </View>
          <View style={styles.recommended_container}>
            <Text style={styles.polecane_text}> Polecane salony </Text>
            <WszystkieText />
          </View>

          <View style={styles.service_container}>
            <StudioCard
              service_name={salony[0]?.name}
              rating={salony[0]?.avg_rating}
              distance={`${calculateDistance(18.5418, 50.0971, salony[0]?.longitude, salony[0]?.latitude)} km`}
            />
            <StudioCard
              service_name={salony[1]?.name}
              rating={salony[1]?.avg_rating}
              distance={`${calculateDistance(18.5418, 50.0971, salony[1]?.longitude, salony[1]?.latitude)} km`}
            />
          </View>

          <Text style={styles.nastepna_wizyta_text}>NASTĘPNA WIZYTA</Text>
          <View style={styles.next_visits_container}>
            <NextVisitCard
              service="Manicure hybrydowy"
              day="Jutro"
              time="11:00"
              company="Nails&Co."
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  searcharbar: {
    marginTop: 30,
  },

  categories_container: {
    marginTop: 40,
    gap: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  recommended_container: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  polecane_text: {
    fontWeight: "500",
    fontSize: 22,
  },

  service_container: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  nastepna_wizyta_text: {
    marginTop: 20,
    marginBottom: 10,
    color: Colors.lightgrayText,
    fontWeight: "700",
    fontSize: 15,
  },

  next_visits_container: {
    gap: 10,
  },
});
