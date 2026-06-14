import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Button } from '@react-navigation/elements';


import Logowanie from './Strony/Logowanie.tsx'
import Nawigator from './Komponenty/Nawigator.tsx'

const Stack = createNativeStackNavigator();

function RootStack() {
  return (

    <Stack.Navigator
     screenOptions={{
            headerShown: false,
          }}
      >

        <Stack.Screen
         name="Nawigator"
         component={Nawigator}
        />

        <Stack.Screen
        name="Logowanie"
        component={Logowanie}
        options={{ title: 'Logowanie' }}
        />
     </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
       <RootStack />
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
