import { StyleSheet, Text, View, ScrollView, TextInput, Image, Pressable } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { FontAwesome, Feather, FontAwesome6, AntDesign, MaterialCommunityIcons, Ionicons, Fontisto } from '@expo/vector-icons';
import { Phone, Mail, CalendarCheck } from 'lucide-react-native';
import { LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold } from '@expo-google-fonts/league-spartan';
import { useFonts } from 'expo-font';

import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from "react";

import { Colors } from '../Themes/colors';
import ZdjecieProfilowe from '../Komponenty/Profil/ProfilePhoto';


export default function EdytujProfil() {
  const tabBarHeight = useBottomTabBarHeight();
  const navigation = useNavigation();
  const ip = 2;
    const [profilinfo, setProfilInfo] = useState([]);
    const GetProfileInfo = async () => {
      try {
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/api/profil/${ip}`);

        const data = await response.json();

        console.log("Dane:", data);
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      GetProfileInfo();
    }, []);
   const [imie, setImie] = useState("Kuba");
   const [nazwisko, setNazwisko] = useState("nazwisko");
  const [mail, setMail] = useState("bjbjb");
  const [numertel, setNumerTel] = useState("bjbjb");
  const [miasto, setMiasto] = useState("bjbjb");
  const [mieszkanie, setMieszkanie] = useState("bjbjb");
  const [budynek, setBudynek] = useState("bjbjb");
  const [ulica, setUlica] = useState("bjbjb");
  const [kodpocztowy, setKodPocztowy] = useState("bjbjb");
  const [nazwa, setNazwa] = useState("bjbjb");
  const [nip, setNIP] = useState("nipnimm33");

  const [userType,setUserType]=useState("user")

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: Colors.creambackground, paddingBottom: 50 } }>
              <View style={{height:'9%',width:'100%',flexDirection:'row', alignItems:'center', justifyContent: 'center',marginBottom:'0%'}}>
                              <Pressable onPress={()=>navigation.navigate('UstawieniaKonta')} style={{height:'100%',aspectRatio:1,alignItems:'left', justifyContent: 'center', marginTop:'2%'}}>
                                  <AntDesign name='arrow-left' size={24} color={Colors.green2} style={{}}/>
                              </Pressable>
                              <Text style={[styles.textbold, {fontSize: 20,width:'56%', left:'12%'}]}>Dane Osobowe</Text>
                              <Pressable onPress={()=>navigation.navigate('Profil')} style={{height:'100%',aspectRatio:1,alignItems:'right', justifyContent: 'center', marginTop:'2%'}}>
                              <Text style={[styles.text, {left:'27%', position:'absolute', color:Colors.green2}]}>Zapisz</Text>
                              </Pressable>
                          </View>
              <View style={styles.containerProfile}>
                        <View style={{flexDirection: 'row'}}>
                            <ZdjecieProfilowe imie='Kuba'/>
                            <View style={{flexDirection: 'column', alignItems: 'left', justifyContent: 'top', marginLeft: '3%'}}>
                                <Text style={styles.username}>{imie} {nazwisko}</Text>
                                <Text style={styles.text2}>Dołączono ....</Text>
                                {userType === "employer" && (
                                    <Text style={styles.text2}>NIP: {nip}</Text>
                                )}
                            </View>
                        </View>
                    </View>
              <Text style={styles.text}>Informacje Podstawowe:</Text>
              <View style={styles.container}>
              <View style={styles.container_input}>
                    {(userType=="user" ) ?
                        (
                    <>
                    <View style={{flexDirection:'row', alignItems: 'center', margin:'1%'}}>
                    <View style={styles.tloIconki}>
                        <Feather name="user" size={22} color={Colors.green2} />
                    </View>
                    <View style={{flexDirection:'column', justifyContent:'left'}}>
                    <Text style={styles.textundergray_input}>Imię</Text>
                    <TextInput style={styles.textbold_input} placeholder="Imię" value={imie} onChangeText={setImie}/>
                    </View>
                    </View>
                    <View style={{alignItems: 'center', width:'100%'}}>
                    <View style={{width:'90%', height: 2, backgroundColor: Colors.lightgray, borderRadius:99}}/>
                    </View>
                    <View style={{flexDirection:'row', alignItems: 'center', margin:'1%'}}>
                    <View style={styles.tloIconki}>
                        <Feather name="user" size={22} color={Colors.green2} />
                    </View>
                    <View style={{flexDirection:'column', justifyContent:'left'}}>
                    <Text style={styles.textundergray_input}>Nazwisko</Text>
                    <TextInput style={styles.textbold_input} placeholder="Nazwisko" value={nazwisko} onChangeText={setNazwisko}/>
                    </View>
                    </View>
                    <View style={{alignItems: 'center', width:'100%'}}>
                    <View style={{width:'90%', height: 2, backgroundColor: Colors.lightgray, borderRadius:99}}/>
                    </View>
                    </>
                    ) :
                    (
                        <>
                        <View style={{flexDirection:'row', alignItems: 'center', margin:'1%'}}>
                        <View style={styles.tloIconki}>
                            <Feather name="user" size={22} color={Colors.green2} />
                        </View>
                        <View style={{flexDirection:'column', justifyContent:'left'}}>
                        <Text style={styles.textundergray_input}>Nazwa zakładu</Text>
                        <TextInput style={styles.textbold_input} placeholder="Nazwa zakładu" value={nazwa} onChangeText={setNazwa}/>
                        </View>
                        </View>
                        <View style={{alignItems: 'center', width:'100%'}}>
                        <View style={{width:'90%', height: 2, backgroundColor: Colors.lightgray, borderRadius:99}}/>
                        </View>
                        </>
                        )
                    }

                    <View style={{flexDirection:'row', alignItems: 'center', margin:'1%'}}>
                    <View style={styles.tloIconki}>
                        <Phone size={22} color={Colors.green2} />
                    </View>
                    <View style={{flexDirection:'column', justifyContent:'left'}}>
                    <Text style={styles.textundergray_input}>Numer telefonu</Text>
                    <TextInput style={styles.textbold_input} placeholder="Numer telefonu" value={numertel} onChangeText={setNumerTel}/>
                    </View>
                    </View>
                    <View style={{alignItems: 'center', width:'100%'}}>
                    <View style={{width:'90%', height: 2, backgroundColor: Colors.lightgray, borderRadius:99}}/>
                    </View>

                    <View style={{flexDirection:'row', alignItems: 'center', margin:'1%'}}>
                    <View style={styles.tloIconki}>
                        <Mail size={22} color={Colors.green2} />
                    </View>
                    <View style={{flexDirection:'column', justifyContent:'left'}}>
                    <Text style={styles.textundergray_input}>Mail</Text>
                    <TextInput style={styles.textbold_input} placeholder="Mail" value={mail} onChangeText={setMail}/>
                    </View>
                    </View>
                </View>
                </View>
              <Text style={styles.text}>Informacje Dodatkowe:</Text>
              <View style={styles.container}>
              <View style={styles.container_input}>
                      <Pressable onPress={() => navigation.navigate('UstawieniaKonta')} style={{flexDirection:'row', alignItems: 'center', margin:'1%', marginTop:'3%', marginBottom:'3%'}}>
                      <View style={styles.tloIconki}>
                            <Ionicons name="home-outline" size={22} color={Colors.green2} />
                      </View>
                      <View style={{flexDirection:'column'}}>
                      <Text style={styles.textbold}>Adres zamieszkania</Text>
                      <Text style={styles.textundergray}>Dodaj adres</Text>
                      </View>
                      <FontAwesome6 name='chevron-right' size={16} color='gray' style={{right:'5%', position: 'absolute',marginTop:'1%'}}/>
                      </Pressable>
                     <View style={{alignItems: 'center', width:'100%'}}>
                      <View style={{width:'90%', height: 2, backgroundColor: Colors.lightgray, borderRadius:99}}/>
                      </View>
                      <Pressable onPress={() => navigation.navigate('UstawieniaKonta')} style={{flexDirection:'row', alignItems: 'center', margin:'1%', marginTop:'3%', marginBottom:'3%'}}>
                      <View style={styles.tloIconki}>
                          <Fontisto name="intersex" size={22} color={Colors.green2} />
                      </View>
                      <View style={{flexDirection:'column'}}>
                      <Text style={styles.textbold}>Płeć</Text>
                      <Text style={styles.textundergray}>Ustaw płeć</Text>
                      </View>
                      <FontAwesome6 name='chevron-right' size={16} color='gray' style={{right:'5%', position: 'absolute',marginTop:'1%'}}/>
                      </Pressable>
              </View>
              </View>

        </ScrollView>
        );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%'
  },
  containerProfile:
      {
      width:'100%',
      height: '19%',
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
     marginTop: '16%',
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
       color: Colors.graphite,
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
