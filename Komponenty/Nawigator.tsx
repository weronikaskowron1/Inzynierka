import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from '../Strony/HomeScreen';
import Rezerwacje from '../Strony/Rezerwacje';
import Ulubione from '../Strony/Ulubione';
import Profil from '../Strony/Profil';

const Tab = createBottomTabNavigator();

export default function Nawigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any = 'home-outline';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Rezerwacje') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Ulubione') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Profil') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarShowLabel: false,
        tabBarActiveTintColor: '#3A5616',
        tabBarInactiveTintColor: '#999999',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Rezerwacje" component={Rezerwacje} />
      <Tab.Screen name="Ulubione" component={Ulubione} />
      <Tab.Screen name="Profil" component={Profil} />
    </Tab.Navigator>
  );
}