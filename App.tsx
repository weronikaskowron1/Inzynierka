import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Button } from '@react-navigation/elements';



import Nawigator from './Komponenty/Nawigator.tsx'

const Stack = createNativeStackNavigator();

// function RootStack() {
//   return (
//
//     <Stack.Navigator
//     // domyślna strona
//         initialRouteName="Home"
//     // opcje dla wszystkich zakładek
//         screenOptions={{
// //              headerStyle: { backgroundColor: 'tomato' },
//         }}
//     >
//         <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//             title: 'Home',
// //             headerStyle: {
// //                 backgroundColor: '#f4511e',
// //             },
// //             headerTintColor: '#fff',
// //             headerTitleStyle: {
// //                fontWeight: 'bold',
// //            },
//             }}
//         />
//
//         <Stack.Screen
//         name="Rezerwacje"
//         component={Rezerwacje}
//         options={{ title: 'Rezerwacje' }}
//         />
//
//         <Stack.Screen
//         name="Ulubione"
//         component={Ulubione}
//         options={{ title: 'Ulubione' }}
//         />
//
//         <Stack.Screen
//         name="Profil"
//         component={Profil}
//         options={{ title: 'Profil' }}
//         />
//      </Stack.Navigator>
//   );
// }


export default function App() {
  return (
    <NavigationContainer>
       <Nawigator />
    </NavigationContainer>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
