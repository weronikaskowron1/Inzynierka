import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@react-navigation/elements';

import { useNavigation } from '@react-navigation/native';

import Logowanie from './Strony/Logowanie.tsx';

export default Profil;
function Profil() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profil</Text>
      <Button onPress={() => navigation.navigate('Logowanie')}>Zaloguj się</Button>
    </View>
  );
}