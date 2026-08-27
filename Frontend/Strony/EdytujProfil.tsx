import { StyleSheet, Text, View, ScrollView, TextInput, Image, Pressable } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { FontAwesome, Feather, FontAwesome6, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
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
  const [nip, setNIP] = useState("bjbjb");

  const [userType,setUserType]=useState("user")

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', backgroundColor: Colors.creambackground, paddingBottom: 20 + 80, } }>
              <View style={{height:'9%',width:'90%',flexDirection:'row', alignItems:'center', justifyContent: 'left',marginBottom:'0%'}}>
                              <Pressable onPress={()=>navigation.navigate('UstawieniaKonta')} style={{height:'100%',aspectRatio:1,alignItems:'left', justifyContent: 'center', marginTop:'2%'}}>
                                  <AntDesign name='arrow-left' size={24} color={Colors.green2} style={{}}/>
                              </Pressable>
                              <Text style={[styles.textbold, {fontSize: 20,width:'62%', left:'14%'}]}>Dane Osobowe</Text>
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
                            </View>
                        </View>
                    </View>
              <View style={styles.container}>
              <Text style={styles.text}>Informacje Podstawowe:</Text>
              <View style={styles.container_input}>
                    {(userType=="user" ) ?
                        (
                    <>
                    <Text>Imię:</Text>
                    <TextInput placeholder="Imię" value={imie} onChangeText={setImie}/>
                    <Text>Nazwisko:</Text>
                    <TextInput placeholder="Nazwisko" value={nazwisko} onChangeText={setNazwisko}/>
                    </>
                    ) :
                    (
                        <>
                        <Text>Nazwa zakładu:</Text>
                        <TextInput placeholder="Nazwa zakładu" value={nazwa} onChangeText={setNazwa}/>
                        <Text>NIP: </Text>
                        <Text>{nip}</Text>
                        </>
                        )
                    }
                    <Text>Numer telefonu:</Text>
                    <TextInput placeholder="Numer telefonu" value={numertel} onChangeText={setNumerTel}/>
                    <Text>Mail:</Text>
                    <TextInput placeholder="Mail" value={mail} onChangeText={setMail}/>
                </View>
              <Text style={styles.text}>Informacje Dodatkowe:</Text>
              <View style={styles.container_input}>
                    <Text>Miasto:</Text>
                    <TextInput placeholder="Miasto" value={miasto} onChangeText={setMail}/>
                    <Text>Ulica:</Text>
                    <TextInput placeholder="Ulica" value={ulica} onChangeText={setUlica}/>
                    <Text>Numer budynku:</Text>
                    <TextInput placeholder="Numer budynku" value={budynek} onChangeText={setBudynek}/>
                    <Text>Numer mieszkania:</Text>
                    <TextInput placeholder="Numer mieszkania (opcjonalnie)" value={mieszkanie} onChangeText={setMieszkanie}/>
                    <Text>Kod pocztowy:</Text>
                    <TextInput placeholder="Kod pocztowy" value={kodpocztowy} onChangeText={setKodPocztowy}/>
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
    width:'90%'
  },
  containerProfile:
      {
      width:'100%',
      height: '21%',
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
      },
  container_input:
  {
      width:'100%',
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
});
