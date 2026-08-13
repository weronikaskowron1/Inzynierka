import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native';
import { Button } from '@react-navigation/elements';
import { SimpleLineIcons, FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../Themes/colors';
import { Phone, Mail } from 'lucide-react-native';
import { LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold } from '@expo-google-fonts/league-spartan';
import { useFonts } from 'expo-font';

import Logowanie from './Strony/Logowanie.tsx';
function ZdjecieProfilowe({photopath,navigation,imie}) {
    const [fontsLoaded] = useFonts({LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold });

    return (
      <View style={styles.containerImage}>
      { photopath ?
          <Image
            source={{ uri: photopath }}
            style={{ width: '100%', height: '100%', borderRadius: 25, overflow: 'hidden', borderWidth: 3, borderColor: Colors.green3 }}
          /> :
                      (
                      <View style={{width: '100%', height: '100%', borderRadius: 25, justifyContent: 'center', alignItems: 'center', overflow: 'hidden', borderWidth: 3, borderColor: Colors.green3, backgroundColor: Colors.green2}}>
                        <Text style={{color:Colors.green1,fontSize: 50,fontFamily: 'LeagueSpartan_700Bold', paddingLeft:'5%'}}>{imie.slice(0,1)}</Text>
                      </View>
                      )
          }
<View style={styles.tloaparatu}>
<Pressable style={styles.aparat} onPress={() => {navigation.navigate('Logowanie')}} >
    <SimpleLineIcons name="camera" size={20} color={Colors.gray}/>
  </Pressable>
</View>
      </View>
    );}

function Profil() {
  const navigation = useNavigation();
  const imie = 'Kuba';
  const nazwisko = 'nazwisko';
  const email = 'email';
  const numer_telefonu = 'numer_telefonu';
  const data_dolaczenia = 'data_dolaczenia';
  const adres = 'adres';
  const [fontsLoaded] = useFonts({LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold });

  return (
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', backgroundColor: Colors.creambackground } }>
      <View style={styles.containerProfile}>
          <View style={{flexDirection: 'row'}}>
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
              <View style={{flexDirection: 'column', alignItems: 'left', justifyContent: 'center'}}>
                  <Text style={styles.text}>Dołączono {data_dolaczenia}</Text>
                  <Text style={styles.text}>Adres: {adres}</Text>
              </View>
      </View>
      <Button onPress={() => navigation.navigate('Logowanie')}>Edytuj profil</Button>
      <View style={{ flexDirection: 'row', width:'90%', alignItems: 'center', justifyContent: 'space-between' }}>
      <Text style={{fontSize:20,color: Colors.graphite, fontFamily: 'LeagueSpartan_500Medium'}}>Ostatnie wizyty</Text>
      <Pressable onPress={() => navigation.navigate('Logowanie') }><Text style={{fontSize:18,color: Colors.green2, fontFamily: 'LeagueSpartan_600SemiBold'}}>Zobacz więcej</Text></Pressable>
      </View>
      <View style={styles.container}>
      <Button onPress={() => navigation.navigate('Logowanie')}>Zmień hasło</Button>
      <Button onPress={() => navigation.navigate('Logowanie')}>O aplikacji</Button>
      <Button onPress={() => navigation.navigate('Logowanie')}>Regulamin</Button>
      <Button onPress={() => navigation.navigate('Logowanie')}>Polityka prywatności</Button>
      <Button onPress={() => navigation.navigate('Logowanie')}>Kontakt</Button>
      <Button onPress={() => navigation.navigate('Logowanie')}>Usuń konto</Button>
      </View>
        <Pressable onPress={() => navigation.navigate('Logowanie')} style={{flexDirection: 'row', width: '90%', height: '8%', alignItems: 'center', justifyContent: 'center' , borderWidth:2, borderColor: Colors.lightgray, backgroundColor:Colors.greenishwhite, borderRadius:15 }}>
        <Feather name="log-out" size={25} color={Colors.green2} style={{paddingRight:'3%'}}/>
        <Text style={{fontSize:17,color: Colors.green2, fontFamily: 'LeagueSpartan_600SemiBold'}}>Wyloguj się</Text>
        </Pressable>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
    containerImage:
    {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '33%',
        padding:'3%',
        marginTop: '3%',
        marginRight: '3%',
        marginLeft: '5%',
        aspectRatio: 1,
        marginBottom: 0
        },
    container:
    {
        width:'100%',
        backgroundColor: 'white',
        borderRadius :25,
        flexDirection: 'column',
        shadowColor: '#000',
        shadowOffset: {width:0, height:4},
        shadowOpacity: 0.15,
        shadowRadius:6,
        elevation:5
    },
    containerProfile:
        {
        width:'100%',
        height: '40%',
        flexDirection: 'column'
    },
    tloaparatu:
    {
        width: '100%',
        aspectRatio: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
      },
    aparat:
    {
         position: 'absolute',
         top: '-9%',
         right: '-9%',
         width: '35%',
         aspectRatio: 1,
         borderRadius: 999,
         backgroundColor: 'white',
         alignItems: 'center',
         justifyContent: 'center',
       },
   text:
   {
       fontSize: 20,
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
       fontSize: 28,
       marginTop: '20%',
       fontFamily: 'LeagueSpartan_700Bold',
       color: Colors.graphite,
       }
})

export default Profil;