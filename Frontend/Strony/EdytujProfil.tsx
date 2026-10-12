import { StyleSheet, Text, View, ScrollView, TextInput, Image, Pressable, Modal } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { FontAwesome, Feather, FontAwesome6, AntDesign, MaterialCommunityIcons, Ionicons, Fontisto, Entypo} from '@expo/vector-icons';
import { Phone, Mail, CalendarCheck } from 'lucide-react-native';
import { LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold } from '@expo-google-fonts/league-spartan';
import { useFonts } from 'expo-font';

import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, Fragment } from "react";

import { Colors } from '../Themes/colors';


export default function EdytujProfil() {
  const tabBarHeight = useBottomTabBarHeight();
  const navigation = useNavigation();
  const ip = 3;
  const [userType,setUserType]=useState("employer");
  const [showGender, setShowGender] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [nip, setNIP] = useState("nipnimm33");
  const [changenumer, setChangeNumer] = useState(false);
  const [changemail, setChangeMail] = useState(false);
  const [changewebsite, setChangeWebsite] = useState(false);
  const [plec, setPlec] = useState("Ustaw płeć");
  const [profilinfo, setProfilInfo] = useState({created_at: ""});
  const [categories, setCategories] = useState([]);
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

    const UpdateProfilInfo = async () => {
      try {
        const url =
          userType === "user"
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

    const GetCategories = async () => {
        try{
        const url =
        userType === "employer"
          ? `${process.env.EXPO_PUBLIC_API_URL}/api/kategorie`
          : null;

        const response = await fetch(url);
        const data = await response.json();

        console.log("Kategeorie:", data);
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      GetProfileInfo();
    }, []);
    useEffect(() => {
    GetCategories();
    }, []);

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: Colors.creambackground, paddingBottom: 50 } }>
              <View style={{height:'9%',width:'100%',flexDirection:'row', alignItems:'center', justifyContent: 'center',marginBottom:'0%'}}>
                              <Pressable onPress={()=>navigation.navigate('UstawieniaKonta')} style={{height:'100%',aspectRatio:1,alignItems:'left', justifyContent: 'center', marginTop:'2%'}}>
                                  <AntDesign name='arrow-left' size={24} color={Colors.green2} style={{}}/>
                              </Pressable>
                              <Text style={[styles.textbold, {fontSize: 20,width:'56%', left:'12%'}]}>Dane Osobowe</Text>
                              <Pressable onPress={()=>{UpdateProfilInfo(); navigation.navigate('Profil');}} style={{height:'100%',aspectRatio:1,alignItems:'right', justifyContent: 'center', marginTop:'2%'}}>
                              <Text style={[styles.text, {left:'27%', position:'absolute', color:Colors.green2}]}>Zapisz</Text>
                              </Pressable>
                          </View>
              <Text style={styles.text}>Informacje Podstawowe:</Text>
              <View style={styles.container}>
              <View style={styles.container_input}>
                    {(userType==="user" ) ?
                        (
                    <>
                    <View style={{flexDirection:'row', alignItems: 'center', margin:'1%'}}>
                    <View style={[styles.tloIconki,{backgroundColor:"white"}]}>
                        <Feather name="user" size={25} color={Colors.graphite} />
                    </View>
                    <View style={{flexDirection:'column', justifyContent:'left'}}>
                    <Text style={styles.textundergray_input}>Imię</Text>
                    <TextInput style={styles.textbold_input} placeholder="Imię" value={profilinfo.name} onChangeText={(text)=>{setProfilInfo({...profilinfo,name:text})}}/>
                    </View>
                    </View>
                    <View style={{alignItems: 'center', width:'100%'}}>
                    <View style={{width:'90%', height: 2, backgroundColor: Colors.lightgray, borderRadius:99}}/>
                    </View>
                    <View style={{flexDirection:'row', alignItems: 'center', margin:'1%'}}>
                    <View style={[styles.tloIconki,{backgroundColor:"white"}]}>
                        <Feather name="user" size={25} color={Colors.graphite} />
                    </View>
                    <View style={{flexDirection:'column', justifyContent:'left'}}>
                    <Text style={styles.textundergray_input}>Nazwisko</Text>
                    <TextInput style={styles.textbold_input} placeholder="Nazwisko" value={profilinfo.surname} onChangeText={(text)=>{setProfilInfo({...profilinfo,surname:text})}}/>
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
                        <View style={[styles.tloIconki,{backgroundColor:"white"}]}>
                            <Feather name="user" size={25} color={Colors.graphite} />
                        </View>
                        <View style={{flexDirection:'column', justifyContent:'left'}}>
                        <Text style={styles.textundergray_input}>Nazwa zakładu</Text>
                        <TextInput style={styles.textbold_input} placeholder="Nazwa zakładu" value={profilinfo.name} onChangeText={(text)=>{setProfilInfo({...profilinfo,name:text})}}/>
                        </View>
                        </View>
                        <View style={{alignItems: 'center', width:'100%'}}>
                        <View style={{width:'90%', height: 2, backgroundColor: Colors.lightgray, borderRadius:99}}/>
                        </View>

                        <View style={{flexDirection:'row', alignItems: 'center', margin:'1%'}}>
                        <View style={[styles.tloIconki,{backgroundColor:"white"}]}>
                            <MaterialCommunityIcons name='web' size={25} color={Colors.graphite} />
                        </View>
                        <View style={{flexDirection:'column', justifyContent:'left'}}>
                        <Text style={styles.textundergray_input}>Strona internetowa</Text>
                        { (changewebsite) ?
                        <TextInput style={styles.textbold_input} placeholder="Adres strony" value={profilinfo.website} onChangeText={(text)=>{setProfilInfo({...profilinfo,website:text})}}/>
                           :
                        <Text style={[styles.textbold_input,{padding:10, paddingLeft:4, paddingBottom:11, color:Colors.graphite}]}>{profilinfo.website}</Text>
                            }
                        </View>
                        <Pressable onPress={()=>setChangeWebsite(prev=>!prev)} style={{right:'7%', position: 'absolute',marginTop:'2%'}}>
                        <Feather name='edit-3' size={20} color='gray'/>
                        </Pressable>
                        </View>
                        <View style={{alignItems: 'center', width:'100%'}}>
                        <View style={{width:'90%', height: 2, backgroundColor: Colors.lightgray, borderRadius:99}}/>
                        </View>
                        </>
                        )
                    }

                    <View style={{flexDirection:'row', alignItems: 'center', margin:'1%'}}>
                    <View style={[styles.tloIconki,{backgroundColor:"white"}]}>
                        <Phone size={25} color={Colors.graphite} />
                    </View>
                    <View style={{flexDirection:'column', justifyContent:'left'}}>
                    <Text style={styles.textundergray_input}>Numer telefonu</Text>
                    { (changenumer) ?
                    <TextInput style={styles.textbold_input} placeholder="Numer telefonu" value={profilinfo.phone} onChangeText={(text)=>{setProfilInfo({...profilinfo,phone:text})}}/>
                       :
                    <Text style={[styles.textbold_input,{padding:10, paddingLeft:4, paddingBottom:11, color:Colors.graphite}]}>{profilinfo.phone}</Text>
                        }
                    </View>
                    <Pressable onPress={()=>setChangeNumer(prev=>!prev)} style={{right:'7%', position: 'absolute',marginTop:'2%'}}>
                    <Feather name='edit-3' size={20} color='gray'/>
                    </Pressable>
                    </View>
                    <View style={{alignItems: 'center', width:'100%'}}>
                    <View style={{width:'90%', height: 2, backgroundColor: Colors.lightgray, borderRadius:99}}/>
                    </View>

                    <View style={{flexDirection:'row', alignItems: 'center', margin:'1%'}}>
                    <View style={[styles.tloIconki,{backgroundColor:"white"}]}>
                        <Mail size={25} color={Colors.graphite} />
                    </View>
                    <View style={{flexDirection:'column', justifyContent:'left'}}>
                    <Text style={styles.textundergray_input}>Mail</Text>
                    { (changemail) ?
                    <TextInput style={styles.textbold_input} placeholder="Mail" value={profilinfo.email} onChangeText={(text)=>{setProfilInfo({...profilinfo,email:text})}}/>
                    :
                    <Text style={[styles.textbold_input,{padding:10, paddingLeft:4, paddingBottom:11, color:Colors.graphite}]}>{profilinfo.email}</Text>
                    }
                    </View>
                    <Pressable onPress={()=>setChangeMail(prev=>!prev)} style={{right:'7%', position: 'absolute',marginTop:'2%'}}>
                    <Feather name='edit-3' size={20} color='gray'/>
                    </Pressable>
                    </View>
                    {(userType=="employer" ) &&
                        (
                            <>
                            <View style={{alignItems: 'center', width:'100%'}}>
                            <View style={{width:'90%', height: 2, backgroundColor: Colors.lightgray, borderRadius:99}}/>
                            </View>
                            <View style={{flexDirection:'row', alignItems: 'center', margin:'1%'}}>
                            <View style={[styles.tloIconki,{backgroundColor:"white"}]}>
                                <Ionicons name="business" size={25} color={Colors.graphite} />
                            </View>
                            <View style={{flexDirection:'column', justifyContent:'left'}}>
                            <Text style={styles.textundergray_input}>NIP</Text>
                            <Text style={[styles.textbold_input,{padding:10, paddingLeft:4, paddingBottom:11, color:Colors.graphite}]}>{profilinfo.nip}</Text>
                            </View>
                            </View>

                            <View style={{alignItems: 'center', width:'100%'}}>
                            <View style={{width:'90%', height: 2, backgroundColor: Colors.lightgray, borderRadius:99}}/>
                            </View>
                            <View style={{flexDirection:'row', alignItems: 'center', margin:'1%'}}>
                            <View style={[styles.tloIconki,{backgroundColor:"white"}]}>
                                <MaterialCommunityIcons name="file-document-outline" size={29} color={Colors.graphite} />
                            </View>
                            <View style={{flexDirection:'column', justifyContent:'left'}}>
                            <Text style={styles.textundergray_input}>Regon</Text>
                            <Text style={[styles.textbold_input,{padding:10, paddingLeft:4, paddingBottom:11, color:Colors.graphite}]}>{profilinfo.regon}</Text>
                            </View>
                            </View>
                            </>
                            )
                        }
                    <View style={{alignItems: 'center', width:'100%'}}>
                    <View style={{width:'90%', height: 2, backgroundColor: Colors.lightgray, borderRadius:99}}/>
                    </View>
                    <View style={{flexDirection:'row', alignItems: 'center', margin:'1%'}}>
                    <View style={[styles.tloIconki,{backgroundColor:"white"}]}>
                        <FontAwesome name="calendar-check-o" size={25} color={Colors.graphite} />
                    </View>
                    <View style={{flexDirection:'column', justifyContent:'left'}}>
                    <Text style={styles.textundergray_input}>Dołączono</Text>
                    <Text style={[styles.textbold_input,{padding:10, paddingLeft:4, paddingBottom:11, color:Colors.graphite}]}>{profilinfo.created_at.split("T")[0]}</Text>
                    </View>
                    </View>
                </View>
                </View>
              <Text style={styles.text}>Informacje Dodatkowe:</Text>
              <View style={styles.container}>
              <View style={styles.container_input}>
                      <Pressable onPress={() => navigation.navigate('DodajAdres')} style={{flexDirection:'row', alignItems: 'center', margin:'1%', marginTop:'3%', marginBottom:'3%'}}>
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

                      {(userType==='user') ?
                          (
                          <>
                      <Pressable onPress={() => setShowGender(true)} style={{flexDirection:'row', alignItems: 'center', margin:'1%', marginTop:'3%', marginBottom:'3%'}}>
                      <View style={styles.tloIconki}>
                          <Fontisto name="intersex" size={22} color={Colors.green2} />
                      </View>
                      <View style={{flexDirection:'column'}}>
                      <Text style={styles.textbold}>Płeć</Text>
                      { (profilinfo.sex==='mezczyzna') ?
                          <Text style={styles.textundergray}>Mężczyzna</Text>
                          :
                          (profilinfo.sex==='kobieta') ?
                          <Text style={styles.textundergray}>Kobieta</Text>
                          :
                          <Text style={styles.textundergray}>Inny</Text>
                          }
                      </View>
                      <FontAwesome6 name='chevron-down' size={16} color='gray' style={{right:'5%', position: 'absolute',marginTop:'1%'}}/>
                      </Pressable>
                       <Modal visible={showGender} transparent animationType="fade" onRequestClose={() => setShowGender(false)}>
                         <Pressable style={styles.modalTlo} onPress={() => setShowGender(false)}>
                           <Pressable style={styles.genderContainer} onPress={(e) => e.stopPropagation()}>
                             <Text style={[styles.textbold, {fontSize: 25, fontFamily:'LeagueSpartan_700Bold', paddingBottom:'4%'}]}>Wybierz płeć</Text>
                             <Pressable style={styles.genderOption} onPress={()=>{setProfilInfo({...profilinfo,sex:"mezczyzna"}); setShowGender(false);}} >
                               <Text style={styles.text}>Mężczyzna</Text>
                             </Pressable>

                             <View style={{alignItems: 'center', width:'100%'}}>
                             <View style={{width:'90%', height: 2, backgroundColor: Colors.lightgray, borderRadius:99}}/>
                             </View>

                             <Pressable style={styles.genderOption} onPress={() => {setProfilInfo({...profilinfo,sex:"kobieta"}); setShowGender(false);}}>
                               <Text style={styles.text}>Kobieta</Text>
                             </Pressable>

                             <View style={{alignItems: 'center', width:'100%'}}>
                             <View style={{width:'90%', height: 2, backgroundColor: Colors.lightgray, borderRadius:99}}/>
                             </View>

                             <Pressable style={styles.genderOption} onPress={() => {setProfilInfo({...profilinfo,sex:"inny"}); setShowGender(false);}}>
                               <Text style={styles.text}>Inny</Text>
                             </Pressable>

                           </Pressable>
                         </Pressable>
                       </Modal>
                           </>)
                        :
                        (
                            <>
                        <Pressable onPress={() => setShowCategories(true)} style={{flexDirection:'row', alignItems: 'center', margin:'1%', marginTop:'3%', marginBottom:'3%'}}>
                        <View style={styles.tloIconki}>
                        <Entypo name="scissors" size={22} color={Colors.green2} />
                        </View>
                        <View style={{flexDirection:'column'}}>
                        <Text style={styles.textbold}>Kategoria salonu</Text>
                        { (profilinfo.category!=null) ?
                        <Text style={styles.textundergray}>{profilinfo.category}</Text>
                        :
                        <Text style={styles.textundergray}>Dodaj kategorie swojego salonu</Text>
                        }
                        </View>
                        <FontAwesome6 name='chevron-down' size={16} color='gray' style={{right:'5%', position: 'absolute',marginTop:'1%'}}/>
                        </Pressable>
                        <Modal visible={showCategories} transparent animationType="fade" onRequestClose={() => setShowCategories(false)}>
                        <Pressable style={styles.modalTlo} onPress={() => setShowCategories(false)}>
                        <Pressable style={styles.genderContainer} onPress={(e) => e.stopPropagation()}>
                        <Text style={[styles.textbold, {fontSize: 25, fontFamily:'LeagueSpartan_700Bold', paddingBottom:'4%'}]}>Wybierz kategorie</Text>

                        { categories.map(kategoria => (
                            <>
                                <React.Fragment key={kategoria.id}>
                                <Pressable style={styles.genderOption} onPress={()=>{setProfilInfo({...profilinfo,category:kategoria.name}); setShowCategories(false);}} >
                                  <Text style={styles.text}>{kategoria.name}</Text>
                                </Pressable>

                                <View style={{alignItems: 'center', width:'100%'}}>
                                <View style={{width:'90%', height: 2, backgroundColor: Colors.lightgray, borderRadius:99}}/>
                                </View>
                                </React.Fragment>
                            </>
                            ))}
                        </Pressable>
                        </Pressable>
                        </Modal>
                        </>
                        )
                        }
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
