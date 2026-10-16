import { StyleSheet, Text, View, ScrollView, Pressable, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
//import { LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold } from '@expo-google-fonts/league-spartan';
// import { useFonts } from 'expo-font';
import { PaperProvider } from 'react-native-paper';
import { AntDesign } from "@expo/vector-icons";


import { Colors } from "../Themes/colors.ts";
import { styles as GlobalStyles } from "../Themes/global_styles.tsx";

import FilterIcon from "../Komponenty/Buttons/FilterIcon.tsx";
import Searchbar from "../Komponenty/HomeScreen/Searchbar.tsx";
import EmployeeCard from "../Komponenty/HomeScreenAdministrator/EmployeeCard.tsx";
import WszystkieText from '../Komponenty/HomeScreen/WszystkieText.tsx'
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";


export default function PracownicyAdministrator({route}) {
    const { studioId, userId } = route.params;
    const tabBarHeight = useBottomTabBarHeight();
  const navigation = useNavigation();
  const [image, setImage] = useState<ImagePicker.ImagePickerAsset | null>(null);
    const [employees, setEmployees] = useState([]);
      const GetEmployees = async () => {
        try {
          const response = await fetch(
            `${process.env.EXPO_PUBLIC_API_URL}/api/pracownicy/${studioId}`,
          );

          const data = await response.json();

          console.log("Dane:", data);
          setEmployees(data);
        } catch (error) {
          console.error(error);
        }
      };
    useEffect(() => {
      GetEmployees();
    }, []);

  return (
      <PaperProvider>
    <ScrollView style={GlobalStyles.body}>
      <View style={[GlobalStyles.container,{marginBottom:tabBarHeight+30}]}>
          <View style={{marginTop:'-10%', height:'63',width:'90%',flexDirection:'row', alignItems:'center', justifyContent: 'left',marginBottom:'3%'}}>
              <Pressable onPress={()=>navigation.navigate('Salony',{userId})} style={{height:'100%',aspectRatio:1,alignItems:'left', justifyContent: 'center', marginTop:'2%'}}>
                  <AntDesign name='arrow-left' size={24} color={Colors.green2} style={{}}/>
              </Pressable>
              <Text style={[styles.textbold, {fontSize: 20, width:'62%', left:'9%'}]}>Pracownicy w salonie</Text>
          </View>
        <Searchbar placeholder_text="Szukaj pracownika" />
        <View style={styles.text_container}>
          <Text style={styles.pracownicy_text}>Wszyscy pracownicy</Text>
        </View>
        <FlatList
          data={employees}
          scrollEnabled={false}
          style={{height:'110%'}}
          keyExtractor={(employee) => employee.id.toString()}
          renderItem={({ item: employee }) => (
              <View style={employee.service_container}>
                  <EmployeeCard
                    name={employee.name}
                    surname={employee.surname}
                    id_salon={studioId}
                    id={employee.id}
                    image_path={employee.image_path}
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
   pracownicy_text: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom:'4%',
    color: Colors.grayText,
  },
  service_container: {
    marginTop: 20,
    gap: 35,
  },
});

