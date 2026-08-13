import { StyleSheet, Text, View, Image, Dimensions,TextInput,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import {useState} from 'react'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function Logowanie() {
  const navigation = useNavigation();
  const [email,setEmail]=useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.headerText}>Witaj ponownie</Text>
        <Text style={styles.normalText}>Zaloguj się, aby zarządzać swoimi wizytami.</Text>
        <Text style={styles.textDarkSmall}>Adres e-mail</Text>
        <TextInput
          style={styles.inputEmail}
          placeholder="kuba@appoint.pl"
          value={email}
          onChangeText={setEmail}/>

      </View>

      <View style={styles.content}>
        <Text style={styles.normalText}>Logowanie</Text>
        <Button onPress={() => navigation.goBack()}>Wróć</Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfd9',
    paddingTop: screenHeight * 0.06,
  },
  header: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingHorizontal: screenWidth * 0.07,
    paddingBottom: screenHeight * 0.02,
    //gap: screenHeight * 0.02,
  },
  logo: {
    width: screenWidth * 0.15,
    height: screenWidth * 0.15,
    borderRadius: (screenWidth * 0.12) / 2,
    marginBottom:screenHeight*0.025

  },
  headerText: {
    fontSize: screenWidth * 0.075,
    fontWeight: '475',
    color: '#1a1a1a',
    marginBottom: screenHeight * 0.005,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //gap: screenHeight * 0.02,
  },
  normalText: {
    fontSize: screenWidth * 0.04,
    color: '#999999',
    marginBottom:screenHeight*0.025
  },
  textDarkSmall: {
    fontSize: screenWidth * 0.04,
    color: '#000000',
    fontWeight: '600',
  },
  inputEmail: {
    width:'100%',
    paddingVertical: screenHeight * 0.015,
    paddingHorizontal: screenWidth * 0.03,
    borderWidth: 1.5,
    borderColor: '#bfbfbf',
    borderRadius: 10,
    fontSize: screenWidth * 0.045,
    color: '#000',
    marginTop: screenHeight * 0.01,
  },

});