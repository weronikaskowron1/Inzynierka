import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@react-navigation/elements';

import { useNavigation } from '@react-navigation/native';

export default Rezerwacje;
function Rezerwacje() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Rezerwacje</Text>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
    </View>
  );
}