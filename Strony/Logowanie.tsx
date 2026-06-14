import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@react-navigation/elements';

import { useNavigation } from '@react-navigation/native';

export default Logowanie;
function Logowanie() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Logowanie</Text>
      <Button onPress={() => navigation.goBack()}>Wróć</Button>
    </View>
  );
}