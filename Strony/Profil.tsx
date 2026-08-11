import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Button } from '@react-navigation/elements';

import { useNavigation } from '@react-navigation/native';

import Logowanie from './Strony/Logowanie.tsx';

export default Profil;
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
      <Image source={{ uri: 'https://picsum.photos/200' }} style={{ width: 200, height: 200 }} />
      <Pressable onPress={() => navigation.navigate('Logowanie')}>
      </Pressable>
      <Text>{usernamer}</Text>
      <Text>{imie} {nazwisko}</Text>
      <Text>{email}</Text>
      <Text>Telefon: {numer_telefonu}</Text>
      <Text>Dołączono {data_dolaczenia}</Text>
      <Text>Adres: {adres}</Text>
      <Button onPress={() => navigation.navigate('Logowanie')}>Edytuj profil</Button>
      <Button onPress={() => navigation.navigate('Logowanie')}>Wyloguj się</Button>
      </View>
      <Text>Ostatnie wizyty</Text>
      <Button onPress={() => navigation.navigate('Logowanie')}>Zobacz wiecej</Button>
      <Button onPress={() => navigation.navigate('Logowanie')}>Zmień hasło</Button>
      <Button onPress={() => navigation.navigate('Logowanie')}>O aplikacji</Button>
      <Button onPress={() => navigation.navigate('Logowanie')}>Regulamin</Button>
      <Button onPress={() => navigation.navigate('Logowanie')}>Polityka prywatności</Button>
      <Button onPress={() => navigation.navigate('Logowanie')}>Kontakt</Button>
      <Button onPress={() => navigation.navigate('Logowanie')}>Usuń konto</Button>
      <Button onPress={() => navigation.navigate('Logowanie')}>Zaloguj się</Button>
  );
}

