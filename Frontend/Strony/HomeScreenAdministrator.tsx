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
import UserCard from "../Komponenty/HomeScreenAdministrator/UserCard.tsx";
import WszystkieText from '../Komponenty/HomeScreen/WszystkieText.tsx'
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";


export default function HomeScreenAdministrator() {
    const tabBarHeight = useBottomTabBarHeight();
  const navigation = useNavigation();
  const [image, setImage] = useState<ImagePicker.ImagePickerAsset | null>(null);
    const [profiles, setProfiles] = useState([]);
    const GetProfiles = async () => {
      try {
        const url = `${process.env.EXPO_PUBLIC_API_URL}/api/profile`;
        const response = await fetch(url);
        const data = await response.json();
        setProfiles(data);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      GetProfiles();
    }, []);

  return (
      <PaperProvider>
    <ScrollView style={GlobalStyles.body}>
      <View style={[GlobalStyles.container,{marginBottom:tabBarHeight+30}]}>
        <View style={styles.header}>
          <Text style={GlobalStyles.header_text}>Panel Administracyny</Text>
          <FilterIcon />
        </View>
        <Searchbar placeholder_text="Szukaj użytkownika" />
        <View style={styles.text_container}>
          <Text style={styles.salony_text}>Wszycy użytkownicy</Text>
        </View>
        <FlatList
          data={profiles}
          scrollEnabled={false}
          style={{height:'110%'}}
          keyExtractor={(profile) => profile.email.toString()}
          renderItem={({ item: profile }) => (
              <View style={styles.service_container}>
                  <UserCard
                    name={profile.name}
                    surname={profile.surname}
                    email={profile.email}
                    user_type={profile.user_type}
                    id={profile.id}
                    blocked={profile.blocked}
                    image_path={profile.image_path}
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

