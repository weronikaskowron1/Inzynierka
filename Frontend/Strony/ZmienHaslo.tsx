import { StyleSheet, Text, View, ScrollView, TextInput, Image, Pressable } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from "react";

import { Colors } from '../Themes/colors';
import Profil from './Strony/Profil.tsx';

export default function ZmienHaslo() {
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
  const [imie, setImie] = useState("bjbjb");
  const [nazwisko, setNazwisko] = useState("bjbjb");
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
              <View style={styles.container}>
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
                    <Pressable>
                        <Text>Zmień hasło</Text>
                    </Pressable>
                    <Pressable>
                        <Text>Usuń konto</Text>
                    </Pressable>
                    <Pressable>
                        <Text>Zapisz zmiany</Text>
                    </Pressable>

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
  },
});
