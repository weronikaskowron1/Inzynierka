import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../Themes/colors.ts';

import { View } from 'react-native'

import HomeScreen from '../Strony/HomeScreen';
import Rezerwacje from '../Strony/Rezerwacje';
import Ulubione from '../Strony/Ulubione';
import ProfilNawigator from "./ProfilNawigator";

const Tab = createBottomTabNavigator();

export default function Nawigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route  }) => ({
          headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any = 'home-outline';

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Rezerwacje') {
            iconName = 'calendar-clear-outline';
          } else if (route.name === 'Ulubione') {
            iconName = 'heart-outline';
          } else if (route.name === 'ProfilNawigacja') {
            iconName = 'person-outline';
          }

          return (
            <View style={{ alignItems: 'center' }}>
              <Ionicons name={iconName} size={size} color={color} />

              {focused && ( //kółeczko
                <View
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: 999,
                    marginTop: 4,
                    backgroundColor: Colors.green2,
                  }}
                />
              )}
            </View>
          );
        },

        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.green2,
        tabBarInactiveTintColor: '#999999',
         tabBarStyle: {
              height: 65,
              paddingTop: 7,
              paddingLeft: 10,
              paddingRight: 10
            },

            tabBarItemStyle: {
//               justifyContent: 'center',
//               alignItems: 'center',
            },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Rezerwacje" component={Rezerwacje} />
      <Tab.Screen name="Ulubione" component={Ulubione} />
      <Tab.Screen name="ProfilNawigacja" component={ProfilNawigator} />
    </Tab.Navigator>
  );
}