import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@react-navigation/elements';

import { useNavigation } from '@react-navigation/native';

export default Ulubione;
function Ulubione() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ulubione</Text>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
    </View>
  );
}