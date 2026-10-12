import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";

import Welcome from "../Komponenty/HomeScreen/Welcome.tsx";
import AlertIcon from "../Komponenty/Buttons/AlertIcon.tsx";
import CategoryIcon from "../Komponenty/HomeScreen/CategoryIcon.tsx";
import NextVisitCard from "../Komponenty/HomeScreen/NextVisitCard.tsx";
import Searchbar from "../Komponenty/HomeScreen/Searchbar.tsx";
import StudioCard from "../Komponenty/HomeScreen/StudioCard.tsx";
import WszystkieText from "../Komponenty/HomeScreen/WszystkieText.tsx";
import DodajSalon from "../Komponenty/HomeScreenEmployer/DodajSalon.tsx";
import EmployerInfoPanel from "../Komponenty/HomeScreenEmployer/EmployerInfoPanel.tsx";

import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import { Colors } from "../Themes/colors.ts";
import { styles as GlobalStyles } from "../Themes/global_styles.tsx";

import { getUserLocation } from "../utils/getUserLocation.js";
import { calculateDistance } from "../utils/calculateDistance.js";

const API_URL = process.env.API_URL;

export default HomeScreenEmployer;
function HomeScreenEmployer({ userId = 1 }) {
  const navigation = useNavigation();

  const [salony, setSalony] = useState([]);
  const [employeeCount, setEmployeeCount] = useState([]);

  const getSalony = async () => {
    try {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_API_URL}/api/salony/company/${userId}`,
      );

      const data = await response.json();

      console.log("Dane:", data);
      setSalony(data);
    } catch (error) {
      console.error(error);
    }
  };
const getEmployeeCount = async () => {
    try {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_API_URL}/api/employee_count/company/${userId}`,
      );

      const data = await response.json();

      console.log("Dane:", data);
      setEmployeeCount(Number(data[0]?.count ?? 0));;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSalony();
    getEmployeeCount();
  }, []);

  const numberOfStudios = salony.length;
  console.log(numberOfStudios);

  return (
    <View style={GlobalStyles.body}>
      <ScrollView>
        <View style={GlobalStyles.container}>
          <View style={styles.header}>
            <Welcome />
            <AlertIcon />
          </View>
          <View style={styles.panel_container}>
            <EmployerInfoPanel numberOfStudios={numberOfStudios} numberOfEmployees={employeeCount}/>
          </View>
          <View style={styles.recommended_container}>
            <Text style={styles.polecane_text}> Twoje salony </Text>
            {salony.length > 4 && <WszystkieText />}
          </View>

          <View style={styles.studios_container}>
            <FlatList
              columnWrapperStyle={styles.studios_row}
              data={salony.slice(0, 4)}
              numColumns={2}
              keyExtractor={(item) => item.id_studio.toString()}
              renderItem={({ item }) => (
                <StudioCard
                  service_name={item.name}
                  rating={item.avg_rating}
                  distance={`${calculateDistance(18.5418, 50.0971, item.longitude, item.latitude)} km`}
                  userType="employer"
                  street={item.street}
                />
              )}
            />
          </View>

          <View style={styles.next_visits_container}>
            <DodajSalon />
          </View>
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
    marginBottom: 20,
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

  studios_container: {
    marginTop: 15,
    marginBottom: 15,
  },

  studios_row: {
    justifyContent: "space-between",
    marginBottom: 25,
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
