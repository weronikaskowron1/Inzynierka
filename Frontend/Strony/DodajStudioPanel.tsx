import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
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

export default DodajStudioPanel;
function DodajStudioPanel() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [step, setStep] = useState(1);

  const [description, setDescription] = useState("");

  return (
    <View style={[GlobalStyles.body, { paddingTop: insets.top }]}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.backButton}>
              <GoBackButton2 />
            </View>

            <Text style={styles.title}>Dodaj salon</Text>
          </View>
          <View style={styles.step_container}>
            <StepIndicator step={step} />
          </View>

          {step === 1 && (
            <View style={{ marginHorizontal: 20, gap: 20 }}>
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
                <View style={{ alignItems: "center" }}>
                  <DodajZdjecieButton />
                </View>
              </View>
            </View>
          )}

          <View style={styles.footer}>
            {step > 1 && <WsteczButton step={step} setStep={setStep} />}
            {step < 3 && <DalejButton step={step} setStep={setStep} />}
            {step === 3 && <DodajButton />}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },

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
  footer: {
    flexDirection: "row",
    gap: 13,
  },
});
