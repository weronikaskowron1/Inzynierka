import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  Switch,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import { Colors } from "../Themes/colors.ts";
import { styles as GlobalStyles } from "../Themes/global_styles.tsx";

import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from "react-native-safe-area-context";

import GoBackButton2 from "../Komponenty/DodajStudioPanel/GoBackButton2.tsx";
import StepIndicator from "../Komponenty/DodajStudioPanel/StepIndicator.tsx";
import CategoryDropDown from "../Komponenty/DodajStudioPanel/CategoryDropDown.tsx";
import DodajZdjecieButton from "../Komponenty/DodajStudioPanel/DodajZdjecieButton.tsx";
import DalejButton from "../Komponenty/DodajStudioPanel/DalejButton.tsx";
import WsteczButton from "../Komponenty/DodajStudioPanel/WsteczButton.tsx";
import DodajButton from "../Komponenty/DodajStudioPanel/DodajButton.tsx";
import HourWheelPicker from "../Komponenty/DodajStudioPanel/HourWheelPicker.tsx";
import TimeDropDown from "../Komponenty/DodajStudioPanel/TimeDropDown.tsx";

export default DodajStudioPanel;
function DodajStudioPanel() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [step, setStep] = useState(1);

  const [description, setDescription] = useState("");

  const [openingHour, setOpeningHour] = useState(8);
  const [openingMinute, setOpeningMinute] = useState(0);

  const [enabled, setEnabled] = useState(false);

  const weekDays = [
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota",
    "Niedziela",
  ];

  const [openingHours, setOpeningHours] = useState(
    weekDays.map(() => ({
      enabled: true,
      open: "08:00",
      close: "16:00",
    })),
  );

  const updateOpeningHours = (index, field, value) => {
    setOpeningHours((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item)),
    );
  };

  return (
    <View
      style={[
        GlobalStyles.body,
        { flex: 1, paddingTop: insets.top, paddingHorizontal: 15 },
      ]}
    >
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.header}>
          <View style={styles.backButton}>
            <GoBackButton2 />
          </View>

          <Text style={styles.title}>Dodaj salon</Text>
        </View>
        <View style={styles.step_container}>
          <StepIndicator step={step} />
        </View>
        <View style={styles.container}>
          {step === 1 && (
            <View style={{ marginHorizontal: 10, gap: 20 }}>
              <View>
                <Text style={styles.main_text}>Podstawowe informacje</Text>
                <Text style={styles.subtitle_text}>
                  Podaj podstawowe dane o salonie
                </Text>
              </View>
              <View style={styles.one_input}>
                <View style={styles.tag_container}>
                  <Text style={styles.tag_text}>Nazwa salonu</Text>
                  <Text style={styles.required}>*</Text>
                </View>
                <TextInput maxLength={50} style={styles.input_container} />
              </View>
              <View style={styles.one_input}>
                <Text style={styles.tag_text}>Opis salonu</Text>
                <TextInput
                  maxLength={300}
                  multiline
                  style={styles.input_container}
                  value={description}
                  onChangeText={setDescription}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: Colors.lightgrayText,
                    alignSelf: "flex-end",
                  }}
                >
                  {description.length}/300
                </Text>
              </View>

              <View style={styles.one_input}>
                <View style={styles.tag_container}>
                  <Text style={styles.tag_text}>Kategoria</Text>
                  <Text style={styles.required}>*</Text>
                </View>
                <CategoryDropDown />
              </View>

              <View>
                <Text style={styles.main_text}>Zdjęcie</Text>
                <Text style={styles.subtitle_text}>
                  Dodaj zdjęcie główne, które będzie widoczne na profilu salonu.
                </Text>
                <View style={{ alignItems: "center", marginTop: 30 }}>
                  <DodajZdjecieButton />
                </View>
              </View>
            </View>
          )}

          {step === 2 && (
            <View style={{ marginHorizontal: 10, gap: 20 }}>
              <View>
                <Text style={styles.main_text}>Adres</Text>
                <Text style={styles.subtitle_text}>
                  Podaj adres swojego salonu
                </Text>
              </View>
              <View style={styles.one_input}>
                <View style={styles.tag_container}>
                  <Text style={styles.tag_text}>Ulica</Text>
                  <Text style={styles.required}>*</Text>
                </View>
                <TextInput maxLength={50} style={styles.input_container} />
              </View>
              <View style={{ flexDirection: "row", gap: 20 }}>
                <View style={[styles.one_input, { flex: 1 }]}>
                  <View style={styles.tag_container}>
                    <Text style={styles.tag_text}>Numer budynku</Text>
                    <Text style={styles.required}>*</Text>
                  </View>
                  <TextInput maxLength={50} style={styles.input_container} />
                </View>

                <View style={[styles.one_input, { flex: 1 }]}>
                  <Text style={styles.tag_text}>Numer lokalu</Text>
                  <TextInput maxLength={50} style={styles.input_container} />
                </View>
              </View>
              <View style={{ flexDirection: "row", gap: 20 }}>
                <View style={[styles.one_input, { flex: 1 }]}>
                  <View style={styles.tag_container}>
                    <Text style={styles.tag_text}>Kod pocztowy</Text>
                    <Text style={styles.required}>*</Text>
                  </View>
                  <TextInput maxLength={50} style={styles.input_container} />
                </View>

                <View style={[styles.one_input, { flex: 1 }]}>
                  <View style={styles.tag_container}>
                    <Text style={styles.tag_text}>Miasto</Text>
                    <Text style={styles.required}>*</Text>
                  </View>
                  <TextInput maxLength={50} style={styles.input_container} />
                </View>
              </View>

              <View>
                <Text style={styles.main_text}>Kontakt</Text>
                <Text style={styles.subtitle_text}>
                  Podaj dane kontaktowe do salonu
                </Text>
              </View>
              <View style={styles.one_input}>
                <View style={styles.tag_container}>
                  <Text style={styles.tag_text}>Telefon</Text>
                  <Text style={styles.required}>*</Text>
                </View>
                <TextInput maxLength={50} style={styles.input_container} />
              </View>
              <View style={styles.one_input}>
                <View style={styles.tag_container}>
                  <Text style={styles.tag_text}>E-mail</Text>
                  <Text style={styles.required}>*</Text>
                </View>
                <TextInput maxLength={50} style={styles.input_container} />
              </View>
              <View style={styles.one_input}>
                <Text style={styles.tag_text}>Strona internetowa</Text>
                <TextInput maxLength={50} style={styles.input_container} />
              </View>
            </View>
          )}

          {step === 3 && (
            <View style={{ marginHorizontal: 10, gap: 20 }}>
              <View>
                <Text style={styles.main_text}>Godzina otwarcia</Text>
                <Text style={styles.subtitle_text}>
                  Określ, w jakich godzinach salon jest otwarty.
                </Text>
              </View>
              <View>
                {weekDays.map((item, index) => (
                  <View key={index} style={styles.row}>
                    <Text style={[styles.weekday, !openingHours[index].enabled && {color: Colors.lightgrayText}]}>{item}</Text>

                    <View style={styles.switch_container}>
                      <Switch
                        value={openingHours[index].enabled}
                        onValueChange={(value) =>
                          updateOpeningHours(index, "enabled", value)
                        }
                        trackColor={{ false: Colors.lightgrayText, true: Colors.green12 }}
                        thumbColor="white"
                      />
                    </View>
                    {openingHours[index].enabled ? (
                    <View style={styles.time_container}>
                      <TimeDropDown
                        value={openingHours[index].open}
                        onChange={(value) =>
                          updateOpeningHours(index, "open", value)
                        }
                      />

                      <Text>-</Text>

                      <TimeDropDown
                        value={openingHours[index].close}
                        onChange={(value) =>
                          updateOpeningHours(index, "close", value)
                        }
                      />
                    </View>
                    ) : (
                        <View style={{alignItems: 'center', flex: 1}}>
                        <Text style={styles.zamkniete_text}>Zamknięte</Text>
                        </View>
                        )}
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
      </ScrollView>
      <View style={[styles.footer, { bottom: insets.bottom + 5 }]}>
        {step > 1 && <WsteczButton step={step} setStep={setStep} />}
        {step < 3 && <DalejButton step={step} setStep={setStep} />}
        {step === 3 && <DodajButton />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  backButton: {
    position: "absolute",
    left: 0,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
  },
  step_container: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  main_text: {
    fontSize: 19,
    fontWeight: "700",
  },
  subtitle_text: {
    color: Colors.lightgrayText,
  },
  one_input: {
    gap: 5,
  },
  tag_container: {
    flexDirection: "row",
    gap: 3,
  },
  input_container: {
    backgroundColor: "white",
    minHeight: 40,
    borderWidth: 1,
    borderColor: Colors.lightgrayBorder,
    borderRadius: 10,
    width: "100%",
    paddingHorizontal: 10,
    fontSize: 13,
  },
  tag_text: {
    fontSize: 14,
  },
  required: {
    color: "red",
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  weekday: {
    width: "33%",
    fontWeight: "500",
    fontSize: 16,
  },
  switch_container: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -10,
  },
  time_container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginLeft: 20,
  },
zamkniete_text: {
    color: Colors.lightgrayText,
    fontSize: 15,
    },
  footer: {
    flexDirection: "row",
    gap: 13,
  },
});
