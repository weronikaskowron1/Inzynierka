import { StyleSheet, Text, View, Pressable, ScrollView, Modal } from 'react-native';
import { FontAwesome, Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../Themes/colors';
import { Phone, Mail, CalendarCheck } from 'lucide-react-native';
import { LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold } from '@expo-google-fonts/league-spartan';
import { useFonts } from 'expo-font';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useState, useEffect } from "react";

import ZdjecieProfilowe from '../Komponenty/Profil/ProfilePhoto';
import Logowanie from './Strony/Logowanie.tsx';
import NavigationContainer from '../Komponenty/Profil/KontenerNawigacji';

export default function Profil() {
  const tabBarHeight = useBottomTabBarHeight();
  const navigation = useNavigation();
  const odbyte_wizyty = 30;
  const polubione_obiekty = 15;
  const [fontsLoaded] = useFonts({LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold });
    const ip = 3;
    const [showChangeImage, setShowChangeImage] = useState(false);
    const [userType,setUserType]=useState("employer")
      const [profilinfo, setProfilInfo] = useState({
              created_at: "",
          });
      const GetProfileInfo = async () => {
          try{
          const url =
          userType === "user"
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
        useEffect(() => {
          GetProfileInfo();
        }, []);


  return (
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', backgroundColor: Colors.creambackground, paddingBottom: tabBarHeight + 80, } }>
      <View style={styles.containerProfile}>
          <View style={{flexDirection: 'row', marginTop:'8%'}}>
              <ZdjecieProfilowe imie='Kuba' ShowChangeImage={() => setShowChangeImage(true)}/>
              <View style={{flexDirection: 'column', alignItems: 'left', justifyContent: 'top', marginLeft: '3%'}}>
                  <Text style={styles.username}>{profilinfo.name} {profilinfo.surname}</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Phone size={15} color={Colors.gray} style={{marginRight:'4%', marginTop:'3%'}}/>
                  <Text style={styles.text2}>{profilinfo.phone}</Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Mail size={15} color={Colors.gray} style={{marginRight:'4%', marginTop:'3%'}}/>
                  <Text style={styles.text2}>{profilinfo.email}</Text>
                  </View>
              </View>
          </View>
      </View>
      { (userType === "user") ? (
      <View style={[styles.container, {flexDirection:'row', height:'10%', width:'90%', justifyContent:'center'}]}>
            <View style={{ flexDirection:'column', alignItems:'center', justifyContent:'center',width:'45%', marginTop:'3%', marginBottom:'3%'}}>
                <CalendarCheck size={22} strokeWidth={1.4} color={Colors.green2} style={{marginBottom:'-1%'}}/>
                <Text style={[styles.textbold,{fontSize:16}]}>{odbyte_wizyty}</Text>
                <Text style={[styles.textundergray,{fontSize:16, marginLeft:'0.5%'}]}>Wizyty</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems:'center', height:'100%', width:'5%'}}>
            <View style={{height:'80%', width: 2, backgroundColor: Colors.lightgray, borderRadius:99}}/>

            </View>
            <View style={{ flexDirection:'column', alignItems:'center', justifyContent:'center', width:'45%'}}>
                <Ionicons name="heart-outline" size={22} color={Colors.green2} style={{marginBottom:'-1%'}}/>
                <Text style={[styles.textbold,{fontSize:16}]}>{polubione_obiekty}</Text>
                <Text style={[styles.textundergray,{fontSize:16, marginLeft:'0.5%'}]}>Ulubione</Text>
            </View>
      </View>
      ) :
  (     <View style={{width: '100%', height: '5%'}}></View>
      )}
        <NavigationContainer navigation={navigation}/>

        <Pressable onPress={() => navigation.navigate('Logowanie')} style={styles.buttonwylogujsie}>
        <Feather name="log-out" size={25} color={Colors.green2} style={{paddingRight:'3%'}}/>
        <Text style={{fontSize:17,color: Colors.green2, fontFamily: 'LeagueSpartan_500Medium'}}>Wyloguj się</Text>
        </Pressable>

       <Modal visible={showChangeImage} transparent animationType="fade" onRequestClose={() => setShowChangeImage(false)}>
         <Pressable style={styles.modalTlo} onPress={() => setShowChangeImage(false)}>
           <Pressable style={styles.ChangeImageContainer} onPress={(e) => e.stopPropagation()}>
             <Text style={[styles.textbold, {fontSize: 25, fontFamily:'LeagueSpartan_600SemiBold', paddingBottom:'2%', paddingHorizontal: '3%'}]}>Dodaj zdjęcie</Text>
             <Text style={[styles.textbold, {fontSize: 15, fontFamily:'LeagueSpartan_500Medium', paddingBottom:'5%', paddingHorizontal: '3%', color:"gray"}]}>Wybierz opcje dodania zdjęcia.</Text>
               <View style={{width: '100%', alignItems:'center'}}>
               <Pressable onPress={() => navigation.navigate('Logowanie')} style={{flexDirection:'row', alignItems: 'center', margin:'1%', marginTop:'3%', marginBottom:'3%', borderWidth:2,borderColor:Colors.lightgray, borderRadius:10, padding:'5%', paddingHorizontal:'8%', width:'100%'}}>
               <View style={styles.tloIconki}>
                     <Feather name="camera" size={28} color={Colors.green2} />
               </View>
               <View style={{flexDirection:'column'}}>
               <Text style={styles.textbold}>Aparat</Text>
               <Text style={styles.textundergray}>Użyj aparatu i zrób zdjęcie</Text>
               </View>
               </Pressable>

              <Pressable onPress={() => navigation.navigate('Logowanie')} style={{flexDirection:'row', alignItems: 'center', margin:'1%', marginTop:'3%', marginBottom:'3%', borderWidth:2,borderColor:Colors.lightgray, borderRadius:10, padding:'5%', paddingHorizontal:'8%', width:'100%'}}>
              <View style={styles.tloIconki}>
                    <Ionicons name="images-outline" size={28} color={Colors.green2} />
              </View>
              <View style={{flexDirection:'column'}}>
              <Text style={styles.textbold}>Galeria</Text>
              <Text style={styles.textundergray}>Wybierz zdjęcie z galerii</Text>
              </View>
              </Pressable>
              </View>

           </Pressable>
         </Pressable>
       </Modal>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:
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
    containerProfile:
        {
        width:'100%',
        height: '21%',
        flexDirection: 'column'
    },
   text:
   {
       fontSize: 16,
       padding: '3%',
       paddingBottom: '0%',
       fontFamily: 'LeagueSpartan_400Regular',
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
       marginTop: 27,
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
   textundergray:
      {
          fontSize: 15,
          paddingBottom: '0%',
          fontFamily: 'LeagueSpartan_500Medium',
          color: 'gray',
          },
   buttonwylogujsie:
   {
      flexDirection: 'row',
      width: '90%',
      height: '7%',
      alignItems: 'center',
      justifyContent: 'center' ,
      borderWidth:2,
      borderColor: Colors.lightgray,
      backgroundColor:Colors.greenishwhite,
      borderRadius:15,
      marginTop:'3%'
      },
      modalTlo: {
           flex: 1,
           backgroundColor: 'rgba(0,0,0,0.4)', //Tlo jest przezroczyste
           justifyContent: 'center',
           alignItems: 'center',
         },
     ChangeImageContainer: {
           width: '75%',
           backgroundColor: 'white',
           borderRadius: 15,
           padding: 20,
           alignItems:'center'
         },
         tloIconki:
         {
             borderRadius:99,
             alignItems:'center',
             justifyContent:'center',
             backgroundColor: Colors.green6,
             aspectRatio:1,
             width:'25%',
             marginRight:'4%',
             marginLeft: '-4%',
             marginTop:'1%'
             },
})
