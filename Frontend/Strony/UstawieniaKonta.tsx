import { StyleSheet, Text, View, ScrollView, TextInput, Image, Pressable, Modal } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { FontAwesome, Feather, FontAwesome6, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../Themes/colors';
import { Phone, Mail, CalendarCheck } from 'lucide-react-native';
import { LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold } from '@expo-google-fonts/league-spartan';
import { useFonts } from 'expo-font';

import { useState, useEffect } from "react";

import Profil from './Strony/Profil.tsx';

export default function UstawieniaKonta() {
  const tabBarHeight = useBottomTabBarHeight();
  const navigation = useNavigation();
  const ip = 3;
  const [showDeleteAccount, setShowDeleteAccount] = useState(false);
  const [userType,setUserType]=useState("user")
  const [fontsLoaded] = useFonts({LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold });
      const DeleteUser = async () => {
        try {

          const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/api/delete/uzytkownik/${ip}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_type: userType,
            }),
          });

          const data = await response.json();

          console.log("Usunięto:", data);

        } catch (error) {
          console.error(error);
        }
      };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', backgroundColor: Colors.creambackground, paddingBottom: 20 + 80 } }>
            <View style={{height:'10%',width:'90%',flexDirection:'row', alignItems:'center', justifyContent: 'left',marginBottom:'3%'}}>
                <Pressable onPress={()=>navigation.navigate('Profil')} style={{height:'100%',aspectRatio:1,alignItems:'left', justifyContent: 'center', marginTop:'2%'}}>
                    <AntDesign name='arrow-left' size={24} color={Colors.green2} style={{}}/>
                </Pressable>
                <Text style={[styles.textbold, {fontSize: 20, width:'62%', left:'12%'}]}>Ustawienia Konta</Text>
            </View>
              <View style={[styles.container,{flexDirection:"column"}]}>
                    <Pressable onPress={() => navigation.navigate('EdytujProfil')} style={{flexDirection:'row', alignItems: 'center', margin:'1%', marginTop:'5%', marginBottom:'5%'}}>
                    <View style={styles.tloIconki}>
                          <Feather name="user" size={22} color={Colors.green2} />
                    </View>
                    <View style={{flexDirection:'column'}}>
                    <Text style={styles.textbold}>Dane osobowe</Text>
                    <Text style={styles.textundergray}>Edytuj swoje dane</Text>
                    </View>
                    <FontAwesome6 name='chevron-right' size={16} color='gray' style={{right:'5%', position: 'absolute',marginTop:'1%'}}/>
                    </Pressable>
                   <View style={{alignItems: 'center', width:'100%'}}>
                    <View style={{width:'90%', height: 2, backgroundColor: Colors.lightgray, borderRadius:99}}/>
                    </View>
                    <Pressable onPress={() => navigation.navigate('ZmienHaslo')} style={{flexDirection:'row', alignItems: 'center', margin:'1%', marginTop:'5%', marginBottom:'5%'}}>
                    <View style={styles.tloIconki}>
                          <Feather name="lock" size={22} color={Colors.green2} />
                    </View>
                    <View style={{flexDirection:'column'}}>
                    <Text style={styles.textbold}>Zmień hasło</Text>
                    <Text style={styles.textundergray}>Zaktualizuj hasło do konta</Text>
                    </View>
                    <FontAwesome6 name='chevron-right' size={16} color='gray' style={{right:'5%', position: 'absolute',marginTop:'1%'}}/>
                    </Pressable>
                   <View style={{alignItems: 'center', width:'100%'}}>
                    <View style={{width:'90%', height: 2, backgroundColor: Colors.lightgray, borderRadius:99}}/>
                    </View>
                    <Pressable onPress={() => setShowDeleteAccount(true)} style={{flexDirection:'row', alignItems: 'center', margin:'1%', marginTop:'5%', marginBottom:'5%'}}>
                    <View style={[styles.tloIconki,{backgroundColor: Colors.pink}]}>
                          <Feather name="trash-2" size={22} color={Colors.red} />
                    </View>
                    <View style={{flexDirection:'column'}}>
                    <Text style={styles.textbold}>Usuń konto</Text>
                    <Text style={styles.textundergray}>Trwale zlikwiduj konto</Text>
                    </View>
                    <FontAwesome6 name='chevron-right' size={16} color='gray' style={{right:'5%', position: 'absolute',marginTop:'1%'}}/>
                    </Pressable>

                   <Modal visible={showDeleteAccount} transparent animationType="fade" onRequestClose={() => setshowDeleteAccount(false)}>
                     <Pressable style={styles.modalTlo} onPress={() => setShowDeleteAccount(false)}>
                       <Pressable style={styles.DeleteContainer} onPress={(e) => e.stopPropagation()}>
                         <Text style={[styles.textbold, {fontSize: 25, fontFamily:'LeagueSpartan_600SemiBold', paddingBottom:'4%', paddingHorizontal: '3%'}]}>Czy na pewno chcesz usunąć swoje konto?</Text>
                         <View style={{flexDirection:'row', width:'90%',alignItems:'center', justifyContent:'center',gap:'40%'}}>
                         <Pressable style={styles.Option} onPress={()=> {DeleteUser(); setShowDeleteAccount(false); navigation.navigate('Logowanie');}} >
                           <Text style={[styles.text, {fontSize: 20, fontFamily:'LeagueSpartan_500Medium'}]}>Tak</Text>
                         </Pressable>
                         <Pressable style={styles.Option} onPress={() => {setShowDeleteAccount(false);}}>
                           <Text style={[styles.text, {fontSize: 20, fontFamily:'LeagueSpartan_500Medium'}]}>Nie</Text>
                         </Pressable>
                         </View>

                       </Pressable>
                     </Pressable>
                   </Modal>
              </View>
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
          margin: '3%',
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
       DeleteContainer: {
             width: '90%',
             backgroundColor: 'white',
             borderRadius: 15,
             padding: 20,
             alignItems:'center'
           },
        Option: {
             paddingVertical: 18
           },
});
