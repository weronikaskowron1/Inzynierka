import { StyleSheet, Text, View, ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import { Colors } from "../Themes/colors.ts";
import { styles as GlobalStyles } from "../Themes/global_styles.tsx";


export default StudioPanel;
function StudioPanel({id_studio}) {
  const navigation = useNavigation();

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


  return (
    <ScrollView>
      <View style={GlobalStyles.body}>
        <View style={GlobalStyles.container}>

        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

});
