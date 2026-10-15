import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Profil from "../Strony/Profil";
import EdytujProfil from "../Strony/EdytujProfil";
import UstawieniaKonta from "../Strony/UstawieniaKonta";
//import EdytujProfilAdmin from "../Strony/EdytujProfilAdmin";
import HomeScreenAdministrator from "../Strony/HomeScreenAdministrator";
import HomeScreenEmployer from "../Strony/HomeScreenEmployer";
import EdytujProfilAdministrator from "../Strony/EdytujProfilAdministrator";
import SalonyAdministrator from "../Strony/SalonyAdministrator";
import PracownicyAdministrator from "../Strony/PracownicyAdministrator";

const Stack = createNativeStackNavigator();

export default function NawigatorAdmin() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Profil"
        component={HomeScreenAdministrator}
      />
        <Stack.Screen
          name="EdytujProfil"
          component={EdytujProfilAdministrator}
        />
        <Stack.Screen
          name="Salony"
          component={SalonyAdministrator}
        />
        {
//         <Stack.Screen
//           name="Pracownicy"
//           component={PracownicyAdministrator}
//         />
        }

    </Stack.Navigator>
  );
}