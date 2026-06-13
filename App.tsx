import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Button } from '@react-navigation/elements';

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Details')}>
        Go to Details
      </Button>

    </View>
  );
}

function DetailsScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>DetailsScreen</Text>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function RootStack() {
  return (

    <Stack.Navigator
    // domyślna strona
        initialRouteName="Home"
    // opcje dla wszystkich zakładek
        screenOptions={{
             headerStyle: { backgroundColor: 'tomato' },
        }}
    >
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
        />

        <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Details' }}
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
