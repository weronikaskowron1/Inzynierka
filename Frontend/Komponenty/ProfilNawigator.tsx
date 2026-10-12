import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Profil from "../Strony/Profil";
import EdytujProfil from "../Strony/EdytujProfil";
import UstawieniaKonta from "../Strony/UstawieniaKonta";
import ZmienHaslo from "../Strony/ZmienHaslo";
import DodajAdres from "../Strony/DodajAdres";
import Informacje from "../Strony/Informacje";
import Wsparcie from "../Strony/Wsparcie";
import Powiadomienia from "../Strony/Powiadomienia";
import Prywatnosc from "../Strony/Prywatnosc";

const Stack = createNativeStackNavigator();

export default function ProfilNawigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Profil"
        component={Profil}
      />

      <Stack.Screen
        name="UstawieniaKonta"
        component={UstawieniaKonta}
      />
    <Stack.Screen
      name="EdytujProfil"
      component={EdytujProfil}
    />
    <Stack.Screen
      name="ZmienHaslo"
      component={ZmienHaslo}
    />
    <Stack.Screen
      name="DodajAdres"
      component={DodajAdres}
    />
    <Stack.Screen
      name="Informacje"
      component={Informacje}
    />
    <Stack.Screen
      name="Wsparcie"
      component={Wsparcie}
    />
    <Stack.Screen
      name="Powiadomienia"
      component={Powiadomienia}
    />
    <Stack.Screen
      name="Prywatnosc"
      component={Prywatnosc}
    />

    </Stack.Navigator>
  );
}