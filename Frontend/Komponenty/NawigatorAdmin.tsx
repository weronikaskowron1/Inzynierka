import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Profil from "../Strony/Profil";
import EdytujProfil from "../Strony/EdytujProfil";
import UstawieniaKonta from "../Strony/UstawieniaKonta";
//import EdytujProfilAdmin from "../Strony/EdytujProfilAdmin";
import HomeScreenAdministrator from "../Strony/HomeScreenAdministrator";
import HomeScreenEmployer from "../Strony/HomeScreenEmployer";

const Stack = createNativeStackNavigator();

export default function NawigatorAdmin() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Profil"
        component={HomeScreenAdministrator}
      />
{
//       <Stack.Screen
//         name="EdytujProfilAdmin"
//         component={EdytujProfilAdmin}
//       />
}
        <Stack.Screen
          name="EdytujProfil"
          component={EdytujProfil}
        />
        <Stack.Screen
          name="Salony"
          component={HomeScreenEmployer}
        />

    </Stack.Navigator>
  );
}