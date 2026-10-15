import { StyleSheet, Text, View, ScrollView, TextInput, Image, Pressable, TouchableOpacity, LayoutAnimation,Platform,UIManager} from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { FontAwesome, Feather, FontAwesome6, AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../Themes/colors';
import { Phone, Mail, CalendarCheck } from 'lucide-react-native';
import { LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold } from '@expo-google-fonts/league-spartan';
import { useFonts } from 'expo-font';

import React, { useState, useEffect } from "react";

import RODO from '../Komponenty/Prywatnosc/RODO.tsx';

export default function Prywatnosc() {
  const tabBarHeight = useBottomTabBarHeight();
  const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', backgroundColor: Colors.creambackground, paddingBottom: 20 + 80 } }>
            <View style={{height:'63',width:'90%',flexDirection:'row', alignItems:'center', justifyContent: 'left',marginBottom:'3%'}}>
                <Pressable onPress={()=>navigation.navigate('Profil')} style={{height:'100%',aspectRatio:1,alignItems:'left', justifyContent: 'center', marginTop:'2%'}}>
                    <AntDesign name='arrow-left' size={24} color={Colors.green2} style={{}}/>
                </Pressable>
                <Text style={[styles.textbold, {fontSize: 20, width:'62%', left:'20%'}]}>Prywatność</Text>
            </View>
              <View style={[styles.container,{flexDirection:"column"}]}>

                            <View style={{alignItems:'center'}}>
                            <RODO/>
                            </View>
                 </View>
                   <View style={{alignItems: 'center', width:'100%'}}>
                    <View style={{width:'85%', height: 2, backgroundColor: Colors.lightgray, borderRadius:99}}/>
                    </View>

                    <View style={{bottom:20,position:'absolute', marginTop:100}}>
                        <Text style={styles.textundergray}>Wersja v1.0.0</Text>
                    </View>
        </ScrollView>
        );
    }

const styles = StyleSheet.create({
  container:
      {
          width:'100%',
          margin: '-3%',
      },
     textbold:
     {
         fontSize:18,
         color: Colors.graphite,
         fontFamily: 'LeagueSpartan_600SemiBold',
         marginBottom: '-2%'
         },
        modalTlo: {
             flex: 1,
             backgroundColor: 'rgba(0,0,0,0.4)', //Tlo jest przezroczyste
             justifyContent: 'center',
             alignItems: 'center',
           },
        Option: {
             borderRadius:25,
             width:'40%',
             height:'65%',
             alignItems:'center',
             justifyContent:'center'
           },
});
