import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Button } from '@react-navigation/elements';
import {SimpleLineIcons, FontAwesome} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {Colors} from '../Themes/colors';

import Logowanie from './Strony/Logowanie.tsx';

function ZdjecieProfilowe({photopath},navigation) {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '33%', padding:'3%', marginTop: '10%', aspectRatio: 1, marginBottom: 0}}>
      { photopath ?
          <Image
            source={{ uri: photopath }}
            style={{ width: '100%', height: '100%', borderRadius: 100, overflow: 'hidden', borderWidth: 3, borderColor: Colors.green3, backgroundColor: Colors.green1 }}
          /> :
            <>
            <View style={{width: '100%', height: '100%', borderRadius: 100, justifyContent: 'center', alignItems: 'center', overflow: 'hidden', borderWidth: 3, borderColor: Colors.green3, backgroundColor: Colors.green1}}>
            <FontAwesome name="user" size={35} color= {Colors.green3} />
            </View>
            </>
          }
<View style={styles.tloaparatu}>
<Pressable style={styles.aparat} onPress={() => {navigation.navigate('Logowanie')}} >
    <SimpleLineIcons name="camera" size={20} color="white"/>
  </Pressable>
</View>
      </View>
    )}

function Profil() {
  const navigation = useNavigation();
  const usernamer = 'usernamer';
  const imie = 'imie';
  const nazwisko = 'nazwisko';
  const email = 'email';
  const numer_telefonu = 'numer_telefonu';
  const data_dolaczenia = 'data_dolaczenia';
  const adres = 'adres';
  return (
      <View>
      <View style={{width:'100%', height: '35%', backgroundColor: 'white', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <ZdjecieProfilowe />
      <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <Text>{usernamer}</Text>
      <Text>{imie} {nazwisko}</Text>
      <Text>{email}</Text>
      </View>
      <View>
      <Text>Telefon: {numer_telefonu}</Text>
      <Text>Dołączono {data_dolaczenia}</Text>
      <Text>Adres: {adres}</Text>
      </View>
      </View>
      <Button onPress={() => navigation.navigate('Logowanie')}>Edytuj profil</Button>
      <Button onPress={() => navigation.navigate('Logowanie')}>Wyloguj się</Button>
      <Text>Ostatnie wizyty</Text>
      <Button onPress={() => navigation.navigate('Logowanie')}>Zobacz wiecej</Button>
      <Button onPress={() => navigation.navigate('Logowanie')}>Zmień hasło</Button>
      <Button onPress={() => navigation.navigate('Logowanie')}>O aplikacji</Button>
      <Button onPress={() => navigation.navigate('Logowanie')}>Regulamin</Button>
      <Button onPress={() => navigation.navigate('Logowanie')}>Polityka prywatności</Button>
      <Button onPress={() => navigation.navigate('Logowanie')}>Kontakt</Button>
      <Button onPress={() => navigation.navigate('Logowanie')}>Usuń konto</Button>
      <Button onPress={() => navigation.navigate('Logowanie')}>Zaloguj się</Button>
      </View>
  );
}

const styles = StyleSheet.create({
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
         top: '-3%',
         right: '-3%',
         width: '35%',
         aspectRatio: 1,
         borderRadius: 999,
         backgroundColor: Colors.green3,
         alignItems: 'center',
         justifyContent: 'center',
       }
})

export default Profil;