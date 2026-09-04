import { StyleSheet, Text, View, ScrollView, TextInput, Image, Pressable } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { FontAwesome,FontAwesome5, Feather, FontAwesome6, AntDesign, MaterialCommunityIcons, Ionicons, Fontisto } from '@expo/vector-icons';
import { Phone, Mail, CalendarCheck } from 'lucide-react-native';
import { LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold } from '@expo-google-fonts/league-spartan';
import { useFonts } from 'expo-font';

import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from "react";

import { Colors } from '../Themes/colors';


export default function DodajAdres() {
  const tabBarHeight = useBottomTabBarHeight();
  const navigation = useNavigation();
  const ip = 3;
  const user_type="user";
    const [profilinfo, setProfilInfo] = useState({
            id: 2,
            street: "",
            building_number: "",
            apartment_number: "",
            postal_code: "",
            city: ""
        });
    const GetProfileInfo = async () => {
        try{
        const url =
        user_type === "user"
          ? `${process.env.EXPO_PUBLIC_API_URL}/api/uzytkownicy/${ip}`
          : `${process.env.EXPO_PUBLIC_API_URL}/api/firmy/${ip}`;

        const response = await fetch(url);
        const data = await response.json();

        console.log("Dane:", data);
              setProfilInfo(data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    const UpdateAdress = async (updatedData = profilinfo) => {
      try {
        const url =
          user_type === "user"
            ? `${process.env.EXPO_PUBLIC_API_URL}/api/uzytkownicy/adres/${ip}`
            : `${process.env.EXPO_PUBLIC_API_URL}/api/firmy/adres/${ip}`;

        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        });

        const data = await response.json();

        console.log("Zaktualizowano adres:", data);

      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      GetProfileInfo();
    }, []);

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: Colors.creambackground, paddingBottom: 50 } }>
              <View style={{height:'9%',width:'100%',flexDirection:'row', alignItems:'center', justifyContent: 'center',marginBottom:'0%'}}>
                              <Pressable onPress={()=>navigation.navigate('EdytujProfil')} style={{height:'100%',aspectRatio:1,alignItems:'left', justifyContent: 'center', marginTop:'2%'}}>
                                  <AntDesign name='arrow-left' size={24} color={Colors.green2} style={{}}/>
                              </Pressable>
                              <Text style={[styles.textbold, {fontSize: 20,width:'56%', left:'21%'}]}>Adres</Text>
                              <Pressable onPress={()=>{UpdateAdress(); navigation.navigate('EdytujProfil');}} style={{height:'100%',aspectRatio:1,alignItems:'right', justifyContent: 'center', marginTop:'2%'}}>
                              <Text style={[styles.text, {left:'27%', position:'absolute', color:Colors.green2}]}>Zapisz</Text>
                              </Pressable>
                          </View>
              <Text style={styles.text}>Dodaj swój adres:</Text>
              <View style={styles.container}>
              <View style={styles.container_input}>
                    <View style={{flexDirection:'row', alignItems: 'center', margin:'1%'}}>
                    <View style={[styles.tloIconki,{backgroundColor:"white"}]}>
                        <FontAwesome5 name="city" size={25} color={Colors.graphite} />
                    </View>
                    <View style={{flexDirection:'column', justifyContent:'left'}}>
                    <Text style={styles.textundergray_input}>Miasto</Text>
                    <TextInput style={styles.textbold_input} placeholder="Miasto" value={profilinfo.city} onChangeText={(text)=>{setProfilInfo({...profilinfo,city:text})}}/>
                    </View>
                    </View>
                    <View style={{alignItems: 'center', width:'100%'}}>
                    <View style={{width:'90%', height: 2, backgroundColor: Colors.lightgray, borderRadius:99}}/>
                    </View>
                    <View style={{flexDirection:'row', alignItems: 'center', margin:'1%'}}>
                    <View style={[styles.tloIconki,{backgroundColor:"white"}]}>
                        <FontAwesome name="road" size={25} color={Colors.graphite} />
                    </View>
                    <View style={{flexDirection:'column', justifyContent:'left'}}>
                    <Text style={styles.textundergray_input}>Ulica</Text>
                    <TextInput style={styles.textbold_input} placeholder="Ulica" value={profilinfo.street} onChangeText={(text)=>{setProfilInfo({...profilinfo,street:text})}}/>
                    </View>
                    </View>
                        <View style={{alignItems: 'center', width:'100%'}}>
                        <View style={{width:'90%', height: 2, backgroundColor: Colors.lightgray, borderRadius:99}}/>
                        </View>
                        <View style={{flexDirection:'row', alignItems: 'center', margin:'1%'}}>
                        <View style={[styles.tloIconki,{backgroundColor:"white"}]}>
                            <FontAwesome5 name="building" size={25} color={Colors.graphite} />
                        </View>
                        <View style={{flexDirection:'column', justifyContent:'left'}}>
                        <Text style={styles.textundergray_input}>Budynek</Text>
                        <TextInput style={styles.textbold_input} placeholder="Budynek" value={profilinfo.building_number} onChangeText={(text)=>{setProfilInfo({...profilinfo,building_number:text})}}/>
                        </View>
                        </View>
                            <View style={{alignItems: 'center', width:'100%'}}>
                            <View style={{width:'90%', height: 2, backgroundColor: Colors.lightgray, borderRadius:99}}/>
                            </View>
                            <View style={{flexDirection:'row', alignItems: 'center', margin:'1%'}}>
                            <View style={[styles.tloIconki,{backgroundColor:"white"}]}>
                                <FontAwesome5 name="door-closed" size={25} color={Colors.graphite} />
                            </View>
                            <View style={{flexDirection:'column', justifyContent:'left'}}>
                            <Text style={styles.textundergray_input}>Mieszkanie</Text>
                            <TextInput style={styles.textbold_input} placeholder="Mieszkanie" value={profilinfo.apartment_number} onChangeText={(text)=>{setProfilInfo({...profilinfo,apartment_number:text})}}/>
                            </View>
                            </View>
                                <View style={{alignItems: 'center', width:'100%'}}>
                                <View style={{width:'90%', height: 2, backgroundColor: Colors.lightgray, borderRadius:99}}/>
                                </View>
                                <View style={{flexDirection:'row', alignItems: 'center', margin:'1%'}}>
                                <View style={[styles.tloIconki,{backgroundColor:"white"}]}>
                                    <Ionicons name="mail-outline" size={25} color={Colors.graphite} />
                                </View>
                                <View style={{flexDirection:'column', justifyContent:'left'}}>
                                <Text style={styles.textundergray_input}>Kod pocztowy</Text>
                                <TextInput style={styles.textbold_input} placeholder="Kod pocztowy" value={profilinfo.postal_code} onChangeText={(text)=>{setProfilInfo({...profilinfo,postal_code:text})}}/>
                                </View>
                                </View>
                    </View>
                    </View>
        </ScrollView>
        );
    }

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'top',
    width:'100%'
  },
  containerProfile:
      {
      width:'90%',
  },
 text2:
 {
     fontSize: 18,
     paddingBottom: '0%',
     fontFamily: 'LeagueSpartan_400Regular',
     color: 'gray',
     },
 username:
 {
     fontSize: 21,
     fontFamily: 'LeagueSpartan_700Bold',
     color: Colors.graphite,
     },
   textbold:
   {
       fontSize:18,
       color: Colors.graphite,
       fontFamily: 'LeagueSpartan_600SemiBold',
       marginBottom: '-2%'
       },
  text:
  {
      fontSize: 18,
      fontFamily: 'LeagueSpartan_500Medium',
      color: Colors.graphite,
      marginLeft:'5%'
      },
  container_input:
  {
      width:'90%',
      backgroundColor: 'white',
      borderRadius :25,
      shadowColor: Colors.graphite,
      shadowOffset: {width:0, height:4},
      shadowOpacity: 0.10,
      shadowRadius:6,
      elevation:2,
      borderWidth:1,
      borderColor: Colors.lightgray,
      margin: '3%'
  },
  tloIconki:
  {
      borderRadius:15,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: Colors.green6,
      aspectRatio:1,
      width:'12%',
      marginRight:'4%',
      marginLeft: '4%',
      marginTop:'1%'
      },
 textundergray:
    {
        fontSize: 15,
        paddingBottom: '0%',
        fontFamily: 'LeagueSpartan_500Medium',
        color: 'gray',
        },
textbold_input:
    {
       fontSize:20,
       color: Colors.green2,
       fontFamily: 'LeagueSpartan_600SemiBold',
       marginTop: -10,
       marginLeft:-5,
   },
textundergray_input:
   {
       fontSize: 14,
       paddingBottom: '0%',
       fontFamily: 'LeagueSpartan_500Medium',
       color: 'gray',
       paddingTop:10,
       marginBottom:0
       },
});
