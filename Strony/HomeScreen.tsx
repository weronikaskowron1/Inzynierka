import { StyleSheet, Text, View } from 'react-native';
// import { Button } from '@react-navigation/elements';

import { useNavigation } from '@react-navigation/native';

export default HomeScreen;
function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}