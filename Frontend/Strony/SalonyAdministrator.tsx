import { StyleSheet, Text, View, ScrollView, Pressable, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import {Ionicons, Fontisto} from '@expo/vector-icons';
import { useState, useEffect } from "react";
// import { LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold } from '@expo-google-fonts/league-spartan';
// import { useFonts } from 'expo-font';
// import { LinearGradient } from 'expo-linear-gradient';
import { PaperProvider } from 'react-native-paper';


import { Colors } from "../Themes/colors.ts";
import { styles as GlobalStyles } from "../Themes/global_styles.tsx";

import FilterIcon from "../Komponenty/Buttons/FilterIcon.tsx";
import Searchbar from "../Komponenty/HomeScreen/Searchbar.tsx";
import StudioCard from "../Komponenty/HomeScreenAdministrator/StudioCard.tsx";
import WszystkieText from '../Komponenty/HomeScreen/WszystkieText.tsx'
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";


export default function SalonyAdministrator({route}) {
    const { userId } = route.params;
    const tabBarHeight = useBottomTabBarHeight();
  const navigation = useNavigation();
  const [image, setImage] = useState<ImagePicker.ImagePickerAsset | null>(null);
    const [studios, setStudios] = useState([]);
      const GetStudios = async () => {
        try {
          const response = await fetch(
            `${process.env.EXPO_PUBLIC_API_URL}/api/salony/company/${userId}`,
          );

          const data = await response.json();

          console.log("Dane:", data);
          setStudios(data);
        } catch (error) {
          console.error(error);
        }
      };
    useEffect(() => {
      GetStudios();
    }, []);

  return (
      <PaperProvider>
    <ScrollView style={GlobalStyles.body}>
      <View style={[GlobalStyles.container,{marginBottom:tabBarHeight+30}]}>
        <View style={styles.header}>
          <Text style={GlobalStyles.header_text}>Salony użytkonika</Text>
          <FilterIcon />
        </View>
        <Searchbar placeholder_text="Szukaj użytkownika" />
        <View style={styles.text_container}>
          <Text style={styles.salony_text}>Wszystkie salony</Text>
        </View>
        <FlatList
          data={studios}
          scrollEnabled={false}
          style={{height:'110%'}}
          keyExtractor={(studio) => studio.id_studio.toString()}
          renderItem={({ item: studio }) => (
              <View style={styles.service_container}>
                  <StudioCard
                    name={studio.name}
                    city={studio.city}
                    id={studio.id_studio}
                    image_path={studio.image_path}
                  />
              </View>)}
          />
      </View>
    </ScrollView>
    </PaperProvider>
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
  text_container: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: 'space-between',
  },
  salony_text: {
    fontSize: 18,
    fontWeight: "500",
    color: Colors.grayText,
  },
  service_container: {
    marginTop: 20,
    gap: 35,
  },
});

