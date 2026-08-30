import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { Button } from "@react-navigation/elements";
import {
  SimpleLineIcons,
  FontAwesome,
  Feather,
  FontAwesome6,
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../Themes/colors";
import { Phone, Mail, CalendarCheck } from "lucide-react-native";
import {
  LeagueSpartan_700Bold,
  LeagueSpartan_400Regular,
  LeagueSpartan_500Medium,
  LeagueSpartan_600SemiBold,
} from "@expo-google-fonts/league-spartan";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import Logowanie from "./Strony/Logowanie.tsx";

function ZdjecieProfilowe({ photopath, navigation, imie }) {
  const [fontsLoaded] = useFonts({
    LeagueSpartan_700Bold,
    LeagueSpartan_400Regular,
    LeagueSpartan_500Medium,
    LeagueSpartan_600SemiBold,
  });

  return (
    <View style={styles.containerImage}>
      {photopath ? (
        <Image
          source={{ uri: photopath }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 20,
            overflow: "hidden",
          }}
        />
      ) : (
        <View style={{ width: "100%", height: "100%" }}>
          <LinearGradient
            colors={[Colors.green5, Colors.green4]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              aspectRatio: 1,
              width: "100%",
            }}
          >
            <Text
              style={{
                color: Colors.green1,
                fontSize: 30,
                fontFamily: "LeagueSpartan_700Bold",
                paddingLeft: "5%",
              }}
            >
              {imie.slice(0, 1)}
            </Text>
          </LinearGradient>
        </View>
      )}
      <View style={styles.tloaparatu}>
        <Pressable
          style={styles.aparat}
          onPress={() => {
            navigation.navigate("Logowanie");
          }}
        >
          <SimpleLineIcons name="camera" size={16} color={Colors.green2} />
        </Pressable>
      </View>
    </View>
  );
}

function NavigationContainer() {
  const [fontsLoaded] = useFonts({
    LeagueSpartan_700Bold,
    LeagueSpartan_400Regular,
    LeagueSpartan_500Medium,
    LeagueSpartan_600SemiBold,
  });
  return (
    <View style={[styles.container, { flexDirection: "column" }]}>
      <Pressable
        onPress={() => navigation.navigate("Logowanie")}
        style={{
          flexDirection: "row",
          alignItems: "center",
          margin: "1%",
          marginTop: "3%",
          marginBottom: "3%",
        }}
      >
        <View style={styles.tloIconki}>
          <Feather name="user" size={22} color={Colors.green2} />
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.textbold}>Dane osobowe</Text>
          <Text style={styles.textundergray}>Edytuj swoje dane</Text>
        </View>
        <FontAwesome6
          name="chevron-right"
          size={16}
          color="gray"
          style={{ right: "5%", position: "absolute", marginTop: "1%" }}
        />
      </Pressable>
      <View style={{ alignItems: "center", width: "100%" }}>
        <View
          style={{
            width: "90%",
            height: 2,
            backgroundColor: Colors.lightgray,
            borderRadius: 99,
          }}
        />
      </View>

      <Pressable
        onPress={() => navigation.navigate("Logowanie")}
        style={{
          flexDirection: "row",
          alignItems: "center",
          margin: "1%",
          marginTop: "3%",
          marginBottom: "3%",
        }}
      >
        <View style={styles.tloIconki}>
          <Feather name="bell" size={22} color={Colors.green2} />
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.textbold}>Powiadomienia</Text>
          <Text style={styles.textundergray}>Zarządzaj alertami</Text>
        </View>
        <FontAwesome6
          name="chevron-right"
          size={16}
          color="gray"
          style={{ right: "5%", position: "absolute", marginTop: "1%" }}
        />
      </Pressable>
      <View style={{ alignItems: "center", width: "100%" }}>
        <View
          style={{
            width: "90%",
            height: 2,
            backgroundColor: Colors.lightgray,
            borderRadius: 99,
          }}
        />
      </View>

      <Pressable
        onPress={() => navigation.navigate("Logowanie")}
        style={{
          flexDirection: "row",
          alignItems: "center",
          margin: "1%",
          marginTop: "3%",
          marginBottom: "3%",
        }}
      >
        <View style={styles.tloIconki}>
          <AntDesign name="credit-card" size={22} color={Colors.green2} />
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.textbold}>Płatności</Text>
          <Text style={styles.textundergray}>Metody płatności i historia</Text>
        </View>
        <FontAwesome6
          name="chevron-right"
          size={16}
          color="gray"
          style={{ right: "5%", position: "absolute", marginTop: "1%" }}
        />
      </Pressable>
      <View style={{ alignItems: "center", width: "100%" }}>
        <View
          style={{
            width: "90%",
            height: 2,
            backgroundColor: Colors.lightgray,
            borderRadius: 99,
          }}
        />
      </View>

      <Pressable
        onPress={() => navigation.navigate("Logowanie")}
        style={{
          flexDirection: "row",
          alignItems: "center",
          margin: "1%",
          marginTop: "3%",
          marginBottom: "3%",
        }}
      >
        <View style={styles.tloIconki}>
          <MaterialCommunityIcons
            name="shield-check-outline"
            size={22}
            color={Colors.green2}
          />
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.textbold}>Prywatność</Text>
          <Text style={styles.textundergray}>Zarządzaj danymi i zgodami</Text>
        </View>
        <FontAwesome6
          name="chevron-right"
          size={16}
          color="gray"
          style={{ right: "5%", position: "absolute", marginTop: "1%" }}
        />
      </Pressable>
      <View style={{ alignItems: "center", width: "100%" }}>
        <View
          style={{
            width: "90%",
            height: 2,
            backgroundColor: Colors.lightgray,
            borderRadius: 99,
          }}
        />
      </View>

      <Pressable
        onPress={() => navigation.navigate("Logowanie")}
        style={{
          flexDirection: "row",
          alignItems: "center",
          margin: "1%",
          marginTop: "3%",
          marginBottom: "3%",
        }}
      >
        <View style={styles.tloIconki}>
          <Feather name="help-circle" size={22} color={Colors.green2} />
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.textbold}>Wsparcie</Text>
          <Text style={styles.textundergray}>
            Najczęstsze pytania i kontakt
          </Text>
        </View>
        <FontAwesome6
          name="chevron-right"
          size={16}
          color="gray"
          style={{ right: "5%", position: "absolute", marginTop: "1%" }}
        />
      </Pressable>
      <View style={{ alignItems: "center", width: "100%" }}>
        <View
          style={{
            width: "90%",
            height: 2,
            backgroundColor: Colors.lightgray,
            borderRadius: 99,
          }}
        />
      </View>

      <Pressable
        onPress={() => navigation.navigate("Logowanie")}
        style={{
          flexDirection: "row",
          alignItems: "center",
          margin: "1%",
          marginTop: "3%",
          marginBottom: "3%",
        }}
      >
        <View style={styles.tloIconki}>
          <Feather name="info" size={22} color={Colors.green2} />
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.textbold}>Infomacje</Text>
          <Text style={styles.textundergray}>
            Regulamin i infomacje o aplikacji
          </Text>
        </View>
        <FontAwesome6
          name="chevron-right"
          size={16}
          color="gray"
          style={{ right: "5%", position: "absolute", marginTop: "1%" }}
        />
      </Pressable>
    </View>
  );
}

function Profil() {
  const tabBarHeight = useBottomTabBarHeight();
  const navigation = useNavigation();
  const imie = "Kuba";
  const nazwisko = "nazwisko";
  const email = "email";
  const numer_telefonu = "numer_telefonu";
  const data_dolaczenia = "data_dolaczenia";
  const adres = "adres";
  const odbyte_wizyty = 30;
  const polubione_obiekty = 15;
  const [fontsLoaded] = useFonts({
    LeagueSpartan_700Bold,
    LeagueSpartan_400Regular,
    LeagueSpartan_500Medium,
    LeagueSpartan_600SemiBold,
  });

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: "center",
        backgroundColor: Colors.backgroundColor,
        paddingBottom: tabBarHeight + 80,
      }}
    >
      <View style={styles.containerProfile}>
        <View style={{ flexDirection: "row", marginTop: "8%" }}>
          <ZdjecieProfilowe imie="Kuba" />
          <View
            style={{
              flexDirection: "column",
              alignItems: "left",
              justifyContent: "top",
              marginLeft: "3%",
            }}
          >
            <Text style={styles.username}>
              {imie} {nazwisko}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Phone
                size={15}
                color={Colors.gray}
                style={{ marginRight: "4%", marginTop: "3%" }}
              />
              <Text style={styles.text2}>{numer_telefonu}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Mail
                size={15}
                color={Colors.gray}
                style={{ marginRight: "4%", marginTop: "3%" }}
              />
              <Text style={styles.text2}>{email}</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.container,
          {
            flexDirection: "row",
            height: "10%",
            width: "90%",
            justifyContent: "center",
          },
        ]}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "45%",
            marginTop: "3%",
            marginBottom: "3%",
          }}
        >
          <CalendarCheck
            size={22}
            strokeWidth={1.4}
            color={Colors.green2}
            style={{ marginBottom: "-1%" }}
          />
          <Text style={[styles.textbold, { fontSize: 16 }]}>
            {odbyte_wizyty}
          </Text>
          <Text
            style={[styles.textundergray, { fontSize: 16, marginLeft: "0.5%" }]}
          >
            Wizyty
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "5%",
          }}
        >
          <View
            style={{
              height: "80%",
              width: 2,
              backgroundColor: Colors.light_gray,
              borderRadius: 99,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "45%",
          }}
        >
          <Ionicons
            name="heart-outline"
            size={22}
            color={Colors.green2}
            style={{ marginBottom: "-1%" }}
          />
          <Text style={[styles.textbold, { fontSize: 16 }]}>
            {polubione_obiekty}
          </Text>
          <Text
            style={[styles.textundergray, { fontSize: 16, marginLeft: "0.5%" }]}
          >
            Ulubione
          </Text>
        </View>
      </View>
      <NavigationContainer />

      <Pressable
        onPress={() => navigation.navigate("Logowanie")}
        style={{
          flexDirection: "row",
          width: "90%",
          height: "7%",
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 2,
          borderColor: Colors.light_gray,
          backgroundColor: Colors.greenishwhite,
          borderRadius: 15,
          marginTop: "3%",
        }}
      >
        <Feather
          name="log-out"
          size={25}
          color={Colors.green2}
          style={{ paddingRight: "3%" }}
        />
        <Text
          style={{
            fontSize: 17,
            color: Colors.green2,
            fontFamily: "LeagueSpartan_500Medium",
          }}
        >
          Wyloguj się
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerImage: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    padding: "3%",
    marginTop: "4%",
    marginRight: "2%",
    marginLeft: "5%",
    aspectRatio: 1,
    marginBottom: 0,
  },
  container: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 25,
    shadowColor: Colors.graphite,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: Colors.light_gray,
    margin: "3%",
  },
  containerProfile: {
    width: "100%",
    height: "21%",
    flexDirection: "column",
  },
  tloIconki: {
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.green6,
    aspectRatio: 1,
    width: "12%",
    marginRight: "4%",
    marginLeft: "4%",
    marginTop: "1%",
  },
  tloaparatu: {
    width: "100%",
    aspectRatio: 1,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  aparat: {
    position: "absolute",
    bottom: "-5%",
    right: "-9%",
    width: "35%",
    aspectRatio: 1,
    borderRadius: 999,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.green2,
  },
  text: {
    fontSize: 16,
    padding: "3%",
    paddingBottom: "0%",
    fontFamily: "LeagueSpartan_400Regular",
  },
  text2: {
    fontSize: 18,
    paddingBottom: "0%",
    fontFamily: "LeagueSpartan_400Regular",
    color: "gray",
  },
  username: {
    fontSize: 21,
    marginTop: "16%",
    fontFamily: "LeagueSpartan_700Bold",
    color: Colors.graphite,
  },
  textbold: {
    fontSize: 18,
    color: Colors.graphite,
    fontFamily: "LeagueSpartan_600SemiBold",
    marginBottom: "-2%",
  },
  textundergray: {
    fontSize: 15,
    paddingBottom: "0%",
    fontFamily: "LeagueSpartan_500Medium",
    color: "gray",
  },
});

export default Profil;
