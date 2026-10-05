import { StyleSheet, Text, View, ScrollView, TextInput, Image, Pressable, Modal } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { FontAwesome, Feather, FontAwesome6, AntDesign, MaterialCommunityIcons, Ionicons, Fontisto } from '@expo/vector-icons';
import { Phone, Mail, CalendarCheck } from 'lucide-react-native';
import { LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold } from '@expo-google-fonts/league-spartan';
import { useFonts } from 'expo-font';

import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from "react";

import { Colors } from '../Themes/colors';


export default function EdytujProfil() {
  const tabBarHeight = useBottomTabBarHeight();
  const navigation = useNavigation();
  const ip = 2;
  const user_type="user";
    const [profilinfo, setProfilInfo] = useState({
            created_at: "",
        });
    const GetProfileInfo = async () => {
        try{
        const url =
        user_type === "user"
          ? `${process.env.EXPO_PUBLIC_API_URL}/api/uzytkownicy/${ip}`
          : `${process.env.EXPO_PUBLIC_API_URL}/api/firmy/${ip}`;

        const response = await fetch(url);
        const data = await response.json();

        console.log("Dane:", data[0]);
        setProfilInfo(data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    const UpdateProfilInfo = async () => {
      try {
        const url =
          user_type === "user"
            ? `${process.env.EXPO_PUBLIC_API_URL}/api/uzytkownicy/${ip}`
            : `${process.env.EXPO_PUBLIC_API_URL}/api/firmy/${ip}`;

        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(profilinfo),
        });

        const data = await response.json();

        console.log("Zaktualizowano:", data);

      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      GetProfileInfo();
    }, []);
  const [password,setPassword]=useState('');

  const [userType,setUserType]=useState("user")

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: Colors.creambackground, paddingBottom: 50 } }>
              <View style={{height:'9%',width:'100%',flexDirection:'row', alignItems:'center', justifyContent: 'center',marginBottom:'0%'}}>
                              <Pressable onPress={()=>navigation.navigate('UstawieniaKonta')} style={{height:'100%',aspectRatio:1,alignItems:'left', justifyContent: 'center', marginTop:'2%'}}>
                                  <AntDesign name='arrow-left' size={24} color={Colors.green2} style={{}}/>
                              </Pressable>
                              <Text style={[styles.textbold, {fontSize: 20,width:'73%', left:'15%'}]}>Zmień Hasło</Text>
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
modalTlo: {
     flex: 1,
     backgroundColor: 'rgba(0,0,0,0.4)', //Tlo jest przezroczyste
     justifyContent: 'center',
     alignItems: 'center',
   },
genderContainer: {
     width: '90%',
     backgroundColor: 'white',
     borderRadius: 15,
     padding: 20,
   },
genderOption: {
     paddingVertical: 18
   },
});
