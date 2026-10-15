import { StyleSheet, Text, View, ScrollView, TextInput, Image, Pressable, Switch, Animated} from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { FontAwesome, Feather, FontAwesome6, AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../Themes/colors';
import { Phone, Mail, CalendarCheck } from 'lucide-react-native';
import { LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold } from '@expo-google-fonts/league-spartan';
import { useFonts } from 'expo-font';
import Checkbox from 'expo-checkbox';

import React, { useState, useRef, useEffect } from 'react';

import Przelacznik from '../Komponenty/Powiadomienia/Przelacznik.tsx';

export default function Powiadomienia() {
  const tabBarHeight = useBottomTabBarHeight();
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold });

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', backgroundColor: Colors.creambackground, paddingBottom: 20 + 80 } }>
            <View style={{height:'63',width:'90%',flexDirection:'row', alignItems:'center', justifyContent: 'left',marginBottom:'3%'}}>
                <Pressable onPress={()=>navigation.navigate('Profil')} style={{height:'100%',aspectRatio:1,alignItems:'left', justifyContent: 'center', marginTop:'2%'}}>
                    <AntDesign name='arrow-left' size={24} color={Colors.green2} style={{}}/>
                </Pressable>
                <Text style={[styles.textbold, {fontSize: 20, width:'62%', left:'16%',fontFamily:'LeagueSpartan_600SemiBold'}]}>Powiadomienia</Text>
            </View>
            <Text style={[styles.text]}>POWIADOMIENIA PUSH</Text>
              <View style={[styles.container,{flexDirection:"column"}]}>
                    <View style={{flexDirection:'row', height:55, alignItems: 'center', margin:'1%', marginTop:'3%', marginBottom:'5%'}}>
                    <View style={styles.tloIconki}>
                          <Feather name="calendar" size={24} color={Colors.green2} />
                    </View>
                    <View style={{flexDirection:'column',marginTop:'1%'}}>
                                    <View style={{flexDirection:'column'}}>
                                    <Text style={styles.textbold}>Rezerwacje</Text>
                                    <Text style={styles.textundergray}>Informacje o nowych rezerwacjach,</Text>
                                    <Text style={[styles.textundergray,{marginTop:'-2%'}]}>potwierdzenia i przypomnienia.</Text>
                                    </View>
                    </View>
                    <Przelacznik/>
                    </View>
                </View>
                <Text style={[styles.text]}>POWIADOMIENIA E-MAIL</Text>
                <View style={[styles.container,{flexDirection:"column"}]}>
                    <View style={{flexDirection:'row', height:55, alignItems: 'center', margin:'1%', marginTop:'3%', marginBottom:'5%'}}>
                        <View style={styles.tloIconki}>
                            <Feather name="mail" size={24} color={Colors.green2} />
                        </View>
                        <View style={{flexDirection:'column',marginTop:'1%'}}>
                            <View style={{flexDirection:'column'}}>
                                <Text style={styles.textbold}>Rezerwacje</Text>
                                <Text style={styles.textundergray}>Potwierdzenia rezerwacji, zmiany</Text>
                                <Text style={[styles.textundergray,{marginTop:'-2%'}]}>terminów, przypomnienia.</Text>
                            </View>
                        </View>
                        <Przelacznik/>
                    </View>
                </View>
                <Text style={[styles.text]}>POZOSTAŁE</Text>
                <View style={[styles.container,{flexDirection:"column"}]}>
                    <View style={{flexDirection:'row', height:55, alignItems: 'center', margin:'1%', marginTop:'3%', marginBottom:'5%'}}>
                        <View style={styles.tloIconki}>
                            <Feather name="bell-off" size={24} color={Colors.green2} />
                        </View>
                        <View style={{flexDirection:'column',marginTop:'1%'}}>
                            <View style={{flexDirection:'column'}}>
                                <Text style={styles.textbold}>Tryb nie przeszkadzać</Text>
                                <Text style={styles.textundergray}>Tymczasowo wyłącz wszystkie</Text>
                                <Text style={[styles.textundergray,{marginTop:'-2%'}]}>powiadomienia w aplikacji.</Text>
                            </View>
                        </View>
                        <Przelacznik/>
                    </View>
                </View>
        </ScrollView>
        );
    }

const styles = StyleSheet.create({
  container:
      {
        width:'90%',
        backgroundColor: "white",
        borderRadius: 25,
        shadowColor: Colors.graphite,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 2,
        borderWidth: 1,
        borderColor: Colors.lightgray,
        margin: "2%",
        marginBottom:'1%'

      },
      tloIconki:
      {
          borderRadius:10,
          alignItems:'center',
          justifyContent:'center',
          backgroundColor:Colors.green6,
          aspectRatio:1,
          width:'11%',
          marginRight:'4%',
          marginLeft: '4%',
          marginTop:'2%',
          },
     text:
     {
         fontSize: 14,
         padding: '3%',
         paddingBottom: '0%',
         fontFamily: 'LeagueSpartan_500Medium',
         color:"gray",
         left:'4%',
         width:'100%'
     },
     textbold:
     {
         fontSize:18,
         color: Colors.graphite,
         fontFamily: 'LeagueSpartan_600SemiBold',
         marginBottom: '-2%'
         },
     textundergray:
        {
            fontSize: 15,
            paddingBottom: '0%',
            fontFamily: 'LeagueSpartan_500Medium',
            color: 'gray',
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
