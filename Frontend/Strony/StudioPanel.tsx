import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import { Colors } from "../Themes/colors.ts";
import { styles as GlobalStyles } from "../Themes/global_styles.tsx";

import {
  SimpleLineIcons,
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
  Ionicons,
  Feather,
} from "@expo/vector-icons";

import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from "react-native-safe-area-context";

import GoBackButton from "../Komponenty/StudioPanel/GoBackButton.tsx";
import HeartButton from "../Komponenty/StudioPanel/HeartButton.tsx";
import ServiceCard from "../Komponenty/StudioPanel/ServiceCard.tsx";
import EmployeeCard from "../Komponenty/StudioPanel/EmployeeCard.tsx";
import AvatarIcon from "../Komponenty/Buttons/AvatarIcon.tsx";
import RatePanel from "../Komponenty/StudioPanel/RatePanel.tsx";
import ReviewPanel from "../Komponenty/StudioPanel/ReviewPanel.tsx";
import SortingDropDown from "../Komponenty/StudioPanel/SortingDropDown.tsx";

export default StudioPanel;
function StudioPanel({ id_studio }) {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [selectedValue, setSelectedValue] = useState("");

  const [salony, setSalony] = useState([]);
  const [zakladka, setZakladka] = useState(0);

  const getSalony = async () => {
    try {
      //       const location = await getUserLocation(); //narazie na emulatorze pobieranie lokalizacji nie dziala
      //       console.log(location);
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_API_URL}/api/salony`,
      );

      const data = await response.json();

      console.log("Dane:", data);
      setSalony(data);
    } catch (error) {
      console.error(error);
    }
  };
  const zakladki = ["Usługi", "Pracownicy", "Informacje", "Opinie"];
  const weekDays = [
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota",
    "Niedziela",
  ];

  useEffect(() => {
    getSalony();
  }, []);

  return (
    <View style={styles.body}>
      <View style={[styles.image_container, { paddingHorizontal: 20 }]}>
        <View
          style={{
            paddingTop: insets.top,

            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <GoBackButton />
          <HeartButton />
        </View>
        <View style={styles.logo_container}>
          <AvatarIcon
            name="Studio"
            name2="Glam"
            color1={Colors.green6}
            color2={Colors.green6}
            text_color={Colors.green1}
            size={90}
            text_size={40}
            borderRadius={999}
            fontWeight="400"
          ></AvatarIcon>
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.name}>Studio Glam</Text>
        <View style={styles.info_container}>
          <FontAwesome name="star" size={23} color="#E9BB5A" />
          <Text style={styles.rating}>4.8</Text>
          <Text style={styles.distance}>(120 opinii)</Text>
          <Text
            style={{ fontSize: 25, color: Colors.lightgrayText }}
          >{`\u00B7`}</Text>
          <Text style={styles.distance}>12km</Text>
        </View>
        <View style={styles.adres_container}>
          <Entypo name="location-pin" size={20} color={Colors.lightgrayText} />
          <Text style={styles.distance}>ul.Kościuszki 12, Rybnik</Text>
        </View>

        <View style={styles.zakladki_container}>
          {zakladki.map((item, index) => (
            <Pressable key={index} onPress={() => setZakladka(index)}>
              <Text
                style={[
                  styles.zakladka_text,
                  zakladka === index && styles.zakladka_selected,
                ]}
              >
                {item}
              </Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.main_container}>
          {zakladka === 0 && <ServiceCard />}
          {zakladka === 1 && <EmployeeCard />}
          {zakladka === 2 && (
            <ScrollView style={styles.zakladka_informacje}>
              <View>
                <Text style={styles.informacje_text}>Informacje o salonie</Text>
                <Text style={styles.description}>
                  Nowoczecny salon kosmetyczny i coś tam bla bla.
                </Text>
              </View>
              <View style={styles.opening_hours_container}>
                <MaterialCommunityIcons
                  name="clock-time-four-outline"
                  size={28}
                  color={Colors.green1}
                />

                <View style={styles.opening_hours_content}>
                  <Text style={styles.opening_hours_title}>
                    Godziny otwarcia
                  </Text>

                  {weekDays.map((item, index) => (
                    <View key={index} style={styles.row}>
                      <Text style={styles.weekDays_text}>{item}</Text>

                      <Text style={styles.weekDays_text}>8:00 — 20:00</Text>
                    </View>
                  ))}
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  gap: 17,
                  alignItems: "center",
                  marginBottom: 5,
                }}
              >
                <Entypo name="location-pin" size={30} color={Colors.green1} />
                <View>
                  <Text style={styles.title_text}>Adres</Text>
                  <Text style={styles.content_text}>
                    ul.Kościuszki 12, Rybnik
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  gap: 17,
                  alignItems: "center",
                  marginBottom: 5,
                }}
              >
                <Feather name="phone" size={27} color={Colors.green1} />
                <View>
                  <Text style={styles.title_text}>Telefon</Text>
                  <Text style={styles.content_text}>+48 123 456 789</Text>
                </View>
              </View>
              <View
                style={{ flexDirection: "row", gap: 17, alignItems: "center" }}
              >
                <MaterialCommunityIcons
                  name="web"
                  size={28}
                  color={Colors.green1}
                />
                <View>
                  <Text style={styles.title_text}>Strona internetowa</Text>
                  <Text style={styles.content_text}>www.studioglam.pl</Text>
                </View>
              </View>
            </ScrollView>
          )}
          {zakladka === 3 && (
            <View style={{gap:13}}>
              <RatePanel />
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: '500'}}>Sortuj opinie</Text>
                <SortingDropDown />
              </View>
              <ReviewPanel />
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  image_container: {
    width: "100%",
    height: "25%",
    backgroundColor: Colors.green2,
  },
  logo_container: {
    position: "absolute",
    bottom: -10,
    left: 20,
    zIndex: 20,
    borderWidth: 5,
    borderRadius: 999,
    borderColor: Colors.backgroundColor,
  },
  container: {
    top: -20,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: Colors.backgroundColor,

    paddingTop: 30,
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 30,
    fontWeight: "700",
  },
  info_container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },

  rating: {
    fontWeight: "500",
    fontSize: 23,
    color: "#4B4B4B",
  },

  distance: {
    color: Colors.lightgrayText,
    fontWeight: "400",
    fontSize: 19,
  },
  adres_container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    left: -5,
  },
  zakladki_container: {
    marginTop: 25,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  zakladka_text: {
    fontSize: 18,
    color: Colors.grayText,
  },
  zakladka_selected: {
    color: Colors.green1,
    fontWeight: "500",
    alignSelf: "flex-start",

    borderBottomWidth: 2,
    borderBottomColor: Colors.green1,

    paddingBottom: 4,
  },

  main_container: {
    marginTop: 17,
    flex: 1,
  },

  zakladka_informacje: {
    width: "100%",
    flex: 1,
  },
  informacje_text: {
    fontSize: 20,
    fontWeight: "700",
  },

  description: {
    color: Colors.grayText,
    width: "100%",
    fontSize: 15,
    marginTop: 5,
    marginBottom: 13,
  },
  opening_hours_container: {
    flexDirection: "row",
    gap: 17,
    alignItems: "flex-start",
    marginBottom: 9,
  },

  opening_hours_content: {
    flex: 1,
  },

  opening_hours_title: {
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 5,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",

    paddingVertical: 6,

    borderBottomWidth: 1,
    borderBottomColor: Colors.lightgrayBorder,
  },

  weekDays_text: {
    width: 140,
    fontSize: 16,
    color: Colors.grayText,
  },

  title_text: {
    fontWeight: "500",
    fontSize: 15,
  },

  content_text: {
    color: Colors.grayText,
    fontSize: 14,
  },
});
