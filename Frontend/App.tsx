import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSafeAreaInsets, SafeAreaProvider } from 'react-native-safe-area-context';

import { Button } from '@react-navigation/elements';
import { Colors } from './Themes/colors.ts';

import Logowanie from './Strony/Logowanie.tsx'
import Nawigator from './Komponenty/Nawigator.tsx'
import Rejestracja from './Strony/Rejestracja.tsx';
import {AuthProvider,useAuth} from "./Context/AuthContext";


const Stack = createNativeStackNavigator();


function RootStack() {
  const {user, isLoading} = useAuth();
  const insets = useSafeAreaInsets();

  if (isLoading) {
      return null;
  }
  return (
    <View style={{backgroundColor: 'white', paddingBottom: insets.bottom, paddingTop: insets.top, height: '100%', width: '100%'}}>
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
        <Stack.Screen
        name="Rejestracja"
        component={Rejestracja}
        options={{ title: 'Rejestracja' }}
        />
     </Stack.Navigator>
     </View>
  );
}


export default function App() {
  return (
    <SafeAreaProvider>
        <AuthProvider>
            <NavigationContainer>
               <RootStack />
            </NavigationContainer>
        </AuthProvider>
    </SafeAreaProvider>


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
