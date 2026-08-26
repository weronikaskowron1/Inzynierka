import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import {Ionicons, Fontisto} from '@expo/vector-icons';
import { useState, useEffect } from "react";
// import { LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold } from '@expo-google-fonts/league-spartan';
// import { useFonts } from 'expo-font';
// import { LinearGradient } from 'expo-linear-gradient';

import { Colors } from "../Themes/colors.ts";
import { styles as GlobalStyles } from "../Themes/global_styles.tsx";

import FilterIcon from "../Komponenty/Buttons/FilterIcon.tsx";
import Searchbar from "../Komponenty/HomeScreen/Searchbar.tsx";

function Ulubione() {
  const navigation = useNavigation();
  return (
    <ScrollView style={GlobalStyles.body}>
      <View style={GlobalStyles.container}>
        <View style={styles.header}>
          <Text style={GlobalStyles.header_text}>Ulubione</Text>
          <FilterIcon />
        </View>
        <Searchbar placeholder_text="Szukaj salonu" />
        <View style={styles.text_container}>
          <Text style={styles.ulubione_salony_text}>Ulubione salony</Text>
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
    marginBottom: 20,
  },
    text_container: {
        flexDirection: 'row',
        marginTop: 20,
        },
  ulubione_salony_text: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.gray,
  },
});

export default Ulubione;
