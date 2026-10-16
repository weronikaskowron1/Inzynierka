import { StyleSheet, Text, View, ScrollView, Pressable, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
// import { LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold } from '@expo-google-fonts/league-spartan';
// import { useFonts } from 'expo-font';
import { PaperProvider } from 'react-native-paper';
import { AntDesign } from "@expo/vector-icons";


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
          <View style={{marginTop:'-10%',height:'63',width:'90%',flexDirection:'row', alignItems:'center', justifyContent: 'left',marginBottom:'3%'}}>
              <Pressable onPress={()=>navigation.navigate('Profil')} style={{height:'100%',aspectRatio:1,alignItems:'left', justifyContent: 'center', marginTop:'2%'}}>
                  <AntDesign name='arrow-left' size={24} color={Colors.green2} style={{}}/>
              </Pressable>
              <Text style={[styles.textbold, {fontSize: 20, width:'62%', left:'10%'}]}>Salony użytkownika</Text>
          </View>
        <Searchbar placeholder_text="Szukaj salon" />
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
                    street={studio.street}
                    id={studio.id_studio}
                    image_path={studio.image_path}
                    userId={userId}
                    employeeCount={studio.employees_count}
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
     textbold:
     {
         fontSize:18,
         color: Colors.graphite,
         fontFamily: 'LeagueSpartan_600SemiBold',
         marginBottom: '-2%'
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

