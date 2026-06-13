import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@react-navigation/elements';

import { useNavigation } from '@react-navigation/native';

export default Profil;
function Profil() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profil</Text>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
    </View>
  );
}