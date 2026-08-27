import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import { FontAwesome, Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../Themes/colors';
import { Phone, Mail, CalendarCheck } from 'lucide-react-native';
import { LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold } from '@expo-google-fonts/league-spartan';
import { useFonts } from 'expo-font';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import ZdjecieProfilowe from '../Komponenty/Profil/ProfilePhoto';
import Logowanie from './Strony/Logowanie.tsx';
import NavigationContainer from '../Komponenty/Profil/KontenerNawigacji';

export default function Profil() {
  const tabBarHeight = useBottomTabBarHeight();
  const navigation = useNavigation();
  const imie = 'Kuba';
  const nazwisko = 'nazwisko';
  const email = 'email';
  const numer_telefonu = 'numer_telefonu';
  const data_dolaczenia = 'data_dolaczenia';
  const adres = 'adres';
  const odbyte_wizyty = 30;
  const polubione_obiekty = 15;
  const [fontsLoaded] = useFonts({LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold });

  return (
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', backgroundColor: Colors.creambackground, paddingBottom: tabBarHeight + 80, } }>
      <View style={styles.containerProfile}>
          <View style={{flexDirection: 'row', marginTop:'8%'}}>
              <ZdjecieProfilowe imie='Kuba'/>
              <View style={{flexDirection: 'column', alignItems: 'left', justifyContent: 'top', marginLeft: '3%'}}>
                  <Text style={styles.username}>{imie} {nazwisko}</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Phone size={15} color={Colors.gray} style={{marginRight:'4%', marginTop:'3%'}}/>
                  <Text style={styles.text2}>{numer_telefonu}</Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Mail size={15} color={Colors.gray} style={{marginRight:'4%', marginTop:'3%'}}/>
                  <Text style={styles.text2}>{email}</Text>
                  </View>
              </View>
          </View>
      </View>
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
        <NavigationContainer navigation={navigation}/>

        <Pressable onPress={() => navigation.navigate('Logowanie')} style={styles.buttonwylogujsie}>
        <Feather name="log-out" size={25} color={Colors.green2} style={{paddingRight:'3%'}}/>
        <Text style={{fontSize:17,color: Colors.green2, fontFamily: 'LeagueSpartan_500Medium'}}>Wyloguj się</Text>
        </Pressable>
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
})
