import { StyleSheet, Text, View, ScrollView, TextInput, Image, Pressable, TouchableOpacity, LayoutAnimation,Platform,UIManager} from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { FontAwesome, Feather, FontAwesome6, AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../Themes/colors';
import { Phone, Mail, CalendarCheck } from 'lucide-react-native';
import { LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold } from '@expo-google-fonts/league-spartan';
import { useFonts } from 'expo-font';

import React, { useState, useEffect } from "react";

import Profil from './Strony/Profil.tsx';
import NajczestszeProblemy from '../Komponenty/Wsparcie/NajczestszeProblemy.tsx';
import ProblemyzKontem from '../Komponenty/Wsparcie/ProblemyzKontem.tsx';
import ZglosUsterke from '../Komponenty/Wsparcie/ZglosUsterke.tsx';

    if (
      Platform.OS === 'android' &&
      UIManager.setLayoutAnimationEnabledExperimental
    ) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }

export default function Informacje() {
  const tabBarHeight = useBottomTabBarHeight();
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold });
    // Wymagane, aby LayoutAnimation działało na systemie Android
    const [expanded, setExpanded] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);

      const toggleExpand = (setter) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setter(prev => !prev);
      };
  useEffect
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', backgroundColor: Colors.creambackground, paddingBottom: 20 + 80 } }>
            <View style={{height:'63',width:'90%',flexDirection:'row', alignItems:'center', justifyContent: 'left',marginBottom:'3%'}}>
                <Pressable onPress={()=>navigation.navigate('Profil')} style={{height:'100%',aspectRatio:1,alignItems:'left', justifyContent: 'center', marginTop:'2%'}}>
                    <AntDesign name='arrow-left' size={24} color={Colors.green2} style={{}}/>
                </Pressable>
                <Text style={[styles.textbold, {fontSize: 20, width:'62%', left:'24%'}]}>Wsparcie</Text>
            </View>
              <View style={[styles.container,{flexDirection:"column"}]}>
                    <Pressable onPress={() => toggleExpand(setExpanded)} style={{flexDirection:'row', height:40, alignItems: 'center', margin:'1%', marginTop:'3%', marginBottom:'5%'}}>
                    <View style={styles.tloIconki}>
                          <Feather name="list" size={30} color={Colors.green2} />
                    </View>
                    <View style={{flexDirection:'column'}}>
                    <Text style={[styles.textbold,{fontSize:23}]}>Najczęstsze Problemy</Text>
                    </View>
                    {expanded ?
                        (
                            <FontAwesome6 name='chevron-up' size={16} color='gray' style={{right:'5%', position: 'absolute',marginTop:'3%'}}/>
                            ) :
                        (
                    <FontAwesome6 name='chevron-down' size={16} color='gray' style={{right:'5%', position: 'absolute',marginTop:'3%'}}/>
                            )
                        }
                    </Pressable>
                    {expanded &&
                        (
                            <>
                                <View style={{alignItems: 'center', width:'100%'}}>
                                <View style={{width:'100%', height: 2, backgroundColor: Colors.lightgray, borderRadius:99}}/>
                                </View>
                                <View style={{alignItems:'center'}}>
                                <NajczestszeProblemy/>
                                </View>
                            </>
                        )
                    }
                 </View>
                 <View style={[styles.container,{flexDirection:"column"}]}>
                    <Pressable onPress={() => toggleExpand(setExpanded2)} style={{flexDirection:'row', height:40, alignItems: 'center', margin:'1%', marginTop:'3%', marginBottom:'5%'}}>
                    <View style={styles.tloIconki}>
                          <MaterialCommunityIcons name="account-question" size={30} color={Colors.green2} />
                    </View>
                    <View style={{flexDirection:'column'}}>
                    <Text style={[styles.textbold,{fontSize:23}]}>Problemy z Kontem</Text>
                    </View>
                    {expanded2 ?
                        (
                            <FontAwesome6 name='chevron-up' size={16} color='gray' style={{right:'5%', position: 'absolute',marginTop:'3%'}}/>
                            ) :
                        (
                    <FontAwesome6 name='chevron-down' size={16} color='gray' style={{right:'5%', position: 'absolute',marginTop:'3%'}}/>
                            )
                        }
                    </Pressable>
                    {expanded2 &&
                        (
                            <>
                                <View style={{alignItems: 'center', width:'100%'}}>
                                <View style={{width:'100%', height: 2, backgroundColor: Colors.lightgray, borderRadius:99}}/>
                                </View>
                                <View style={{alignItems:'center'}}>
                                <ProblemyzKontem/>
                                </View>
                            </>
                            )

                        }
                 </View>
                 <View style={[styles.container,{flexDirection:"column"}]}>
                    <Pressable onPress={() => toggleExpand(setExpanded3)} style={{flexDirection:'row', height:40, alignItems: 'center', margin:'1%', marginTop:'3%', marginBottom:'5%'}}>
                    <View style={styles.tloIconki}>
                          <FontAwesome name="bug" size={30} color={Colors.green2} />
                    </View>
                    <View style={{flexDirection:'column'}}>
                    <Text style={[styles.textbold,{fontSize:23}]}>Złoś Usterkę</Text>
                    </View>
                    {expanded3 ?
                        (
                            <FontAwesome6 name='chevron-up' size={16} color='gray' style={{right:'5%', position: 'absolute',marginTop:'3%'}}/>
                            ) :
                        (
                    <FontAwesome6 name='chevron-down' size={16} color='gray' style={{right:'5%', position: 'absolute',marginTop:'3%'}}/>
                            )
                        }
                    </Pressable>
                    {expanded3 &&
                        (
                            <>
                                <View style={{alignItems: 'center', width:'100%'}}>
                                <View style={{width:'100%', height: 2, backgroundColor: Colors.lightgray, borderRadius:99}}/>
                                </View>
                                <View style={{alignItems:'center'}}>
                                <ZglosUsterke/>
                            </View>
                            </>
                            )
                        }
                </View>
                    <View style={{bottom:20,position:'absolute', marginTop:100, justifyContent:'center',alignItems:'center'}}>
                        <Text style={styles.textundergray}>Nie znalazleś odpowiedzi na swoje pytania?</Text>
                        <Text style={styles.textundergray}>Skontaktuj się z nami przez:</Text>
                        <Text style={styles.textundergray}>pomoc@appoint.pl</Text>
                        <Text style={styles.textundergray}>+48 123 456 789</Text>
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

      },
      tloIconki:
      {
          borderRadius:15,
          alignItems:'center',
          justifyContent:'center',
          aspectRatio:1,
          width:'8%',
          marginRight:'4%',
          marginLeft: '4%',
          marginTop:'1%',
          },
     text:
     {
         fontSize: 16,
         padding: '3%',
         paddingBottom: '0%',
         fontFamily: 'LeagueSpartan_400Regular',
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
