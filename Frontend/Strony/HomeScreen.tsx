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
import { useSafeAreaInsets, SafeAreaProvider } from 'react-native-safe-area-context';
import { useState, useEffect } from "react";

import { Colors } from "../Themes/colors.ts";
import { styles as GlobalStyles } from "../Themes/global_styles.tsx";

import { getUserLocation } from "../utils/getUserLocation.js";
import { calculateDistance } from "../utils/calculateDistance.js";

const API_URL = process.env.API_URL;
const API = process.env.EXPO_PUBLIC_API_URL || "http://10.0.2.2:3000";
const formatDay = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("pl-PL",{
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
        });
    };


export default HomeScreen;
function HomeScreen() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const {user} = useAuth();
  const [salony, setSalony] = useState([]);
  const [nextVisit,setNextVisit] = useState(null);

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



  const getNextVisit = async () => {
      try {
          const response = await fetch(`${API}/api/user/${user.id}/next`);
              const data = await response.json();
              setNextVisit(data);
          } catch (error) {
              console.error("Bład pobierania następnej wizyty: ",error);
              }
      };

  useEffect(() => {
    getSalony();
    getNextVisit();
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
    <View style={[GlobalStyles.body, {paddingTop:insets.top}]}>
      <ScrollView>
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

          <ScrollView
          horizontal
          showsHorizontalScrollIndicator = {false}
          contentContainerStyle = {styles.service_container}
          >
            {salony.slice(0, 5).map((salon, index) => (
                <StudioCard
                   key={salon.id ?? index}
                   service_name={salon.name}
                   rating={salon.avg_rating}
                   distance={`${calculateDistance(18.5418, 50.0971, salon.longitude, salon.latitude)} km`}
                />
                ))}
          </ScrollView>

          <Text style={styles.nastepna_wizyta_text}>NASTĘPNA WIZYTA</Text>
            {nextVisit && (
              <View style={styles.next_visits_container}>
                <NextVisitCard
                  service = {nextVisit.service_name}
                  day = {formatDay(nextVisit.data)}
                  time = {new Date(nextVisit.data).toLocaleTimeString("pl-PL",{
                      hour: "2-digit",
                      minute: "2-digit",
                      timeZone: "UTC",
                      })}
                  company = {nextVisit.studio_name}
                />
              </View>
            )}
        </View>
      </ScrollView>
    </View>
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
