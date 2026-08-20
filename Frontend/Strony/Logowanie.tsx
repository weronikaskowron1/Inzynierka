import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Colors } from "../Themes/colors.ts";
import { Ionicons } from "@expo/vector-icons";
import LoginCard from "../Komponenty/Logowanie/LoginCard.tsx";
import Checkbox from "expo-checkbox";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function Logowanie() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [checked, setChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.logoConteiner}>
          <Image
            source={require("../assets/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.headerText}>Witaj ponownie</Text>
        <Text style={styles.normalText}>
          Zaloguj się, aby zarządzać swoimi wizytami.
        </Text>
        <Text style={styles.textDarkSmall}>Adres e-mail</Text>
        <View style={styles.emailWrapper}>
          <Ionicons
            name="mail-outline"
            size={screenWidth * 0.05}
            color="#999999"
            style={{ marginRight: screenWidth * 0.02 }}
          />
          <TextInput
            style={styles.inputEmail}
            placeholder="kuba@appoint.pl"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <Text style={styles.textDarkSmall}>Hasło</Text>
        <View style={styles.passwordWrapper}>
          <Ionicons
            name="lock-closed-outline"
            size={screenWidth * 0.05}
            color="#999999"
            style={{ marginRight: screenWidth * 0.01 }}
          />
          <TextInput
            style={styles.inputPassword}
            placeholder="• • • • • • • •"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={screenWidth * 0.05}
              color="#999999"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.checkbox}>
          <Checkbox
            value={checked}
            onValueChange={setChecked}
            color={checked ? "#81b525ff" : "#ccc"}
            style={styles.checkboxBox}
          />
          <Text style={styles.textDarkSmall}>Zapamiętaj mnie.</Text>
          <TouchableOpacity onPress={() => console.log("Kliknieto zapamietaj")}>
            <Text style={styles.textClick}>Nie pamiętasz hasła?</Text>
          </TouchableOpacity>
        </View>

        <LoginCard service="Zaloguj się" />
        <View style={styles.viewContainer}>
          <View style={styles.line} />
          <Text style={styles.normalText1}> lub kontynuuj z </Text>
          <View style={styles.line} />
        </View>
        <View style={styles.AppleGoogleContainer}>
          <TouchableOpacity style={styles.iconAppleGoogle}>
            <Image
              source={require("../assets/logo-google.webp")}
              style={styles.logoGoogle}
            />
            <Text style={styles.TextAppleGoogle}> Google </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconAppleGoogle}>
            <Image
              source={require("../assets/apple-logo.png")}
              style={styles.logoApple}
            />
            <Text style={styles.TextAppleGoogle}> Apple </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ZarejestrujContainer}>
          <Text style={styles.normalText}>Nie masz konta?</Text>
          <TouchableOpacity
            onPress={() => console.log("Kliknieto zarejestruj się")}
          >
            <Text style={styles.textClick}>Zarejestruj się</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    paddingTop: screenHeight * 0.02,
  },

  headerContainer: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    flex: 1,
    //alignItems: 'flex-start',
    //justifyContent: 'flex-end',
    paddingHorizontal: screenWidth * 0.07,
    paddingBottom: screenHeight * 0.02,
    //gap: screenHeight * 0.02,
  },
  logo: {
    width: screenWidth * 0.08,
    height: screenWidth * 0.08,
    //borderRadius: (screenWidth * 0.12) / 2,
    //marginBottom:screenHeight*0.025
  },
  headerText: {
    fontSize: screenWidth * 0.075,
    fontWeight: "475",
    color: "#1a1a1a",
    marginBottom: screenHeight * 0.005,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    //gap: screenHeight * 0.02,
  },
  normalText: {
    fontSize: screenWidth * 0.04,
    color: "#999999",
    marginBottom: screenHeight * 0.025,
  },
  textDarkSmall: {
    fontSize: screenWidth * 0.04,
    color: "#000000",
    fontWeight: "600",
  },
  inputEmail: {
    width: "100%",
    fontSize: screenWidth * 0.05,
    color: "#000",
  },
  emailWrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    paddingLeft: screenWidth * 0.02,
    paddingRight: screenWidth * 0.12,
    marginTop: screenHeight * 0.01,
    marginBottom: screenHeight * 0.02,
    paddingVertical: screenHeight * 0.004,

    backgroundColor: "white",
    shadowColor: Colors.graphite,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 9,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#F1F0EC",
  },
  inputPassword: {
    width: "100%",
    //paddingVertical: screenHeight * 0.015,
    fontSize: screenWidth * 0.05,
    color: "#000",
  },
  passwordWrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    borderRadius: 20,
    //height: screenHeight * 0.045,
    //paddingHorizontal: screenWidth*0.03,
    paddingLeft: screenWidth * 0.02,
    paddingRight: screenWidth * 0.14,
    marginTop: screenHeight * 0.01,
    marginBottom: screenHeight * 0.02,
    paddingVertical: screenHeight * 0.004,

    backgroundColor: "white",
    shadowColor: Colors.graphite,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 9,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#F1F0EC",
  },
  container1: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 25,
    shadowColor: Colors.graphite,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#F1F0EC",
    margin: "3%",
  },
  logoConteiner: {
    width: screenWidth * 0.16,
    height: screenWidth * 0.16,
    borderWidth: 1,
    borderColor: "#bfbfbf",
    borderRadius: 20,
    backgroundColor: "white",
    shadowColor: Colors.graphite,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 14,
    elevation: 6,
    borderWidth: 1,
    borderColor: "#F1F0EC",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: screenHeight * 0.017,
  },
  checkbox: {
    width: "100%",
    flexDirection: "row",
    gap: screenWidth * 0.03,
    //paddingVertical: screenHeight * 0.015,
    fontSize: screenWidth * 0.05,
    color: "#000",
    marginBottom: screenHeight * 0.03,
    paddingLeft: screenWidth * 0.02,
  },

  textClick: {
    fontSize: screenWidth * 0.04,
    color: "#81b525ff",
    fontWeight: "600",
  },

  checkboxBox: {
    width: screenWidth * 0.055,
    height: screenWidth * 0.055,
    borderRadius: 7,
  },
  viewContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#d9d9d9",
    opacity: 0.8,
  },
  normalText1: {
    fontSize: screenWidth * 0.04,
    color: "#999999",
    opacity: 0.7,
  },
  iconAppleGoogle: {
    //width:'100%',
    width: screenWidth * 0.38,
    height: screenWidth * 0.14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    borderRadius: 16,
    gap: screenWidth * 0.04,
    //paddingLeft: screenWidth * 0.04,
    //paddingRight: screenWidth * 0.14,
    //marginTop: screenHeight * 0.01,
    //marginBottom:screenHeight*0.08,
    //paddingVertical: screenHeight * 0.0040,
    backgroundColor: "white",
    shadowColor: Colors.graphite,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 9,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#F1F0EC",
  },
  AppleGoogleContainer: {
    width: "100%",
    flexDirection: "row",
    //alignItems: 'center',
    justifyContent: "center",
    gap: screenWidth * 0.05,
    //paddingVertical: screenHeight * 0.015,
    fontSize: screenWidth * 0.05,
    color: "#000",
    //marginBottom: screenHeight * 0.09,
    //paddingLeft: screenWidth * 0.09,
  },
  logoApple: {
    width: screenWidth * 0.07,
    height: screenWidth * 0.07,
    //borderRadius: (screenWidth * 0.12) / 2,
    //marginBottom:screenHeight*0.025
  },
  logoGoogle: {
    width: screenWidth * 0.06,
    height: screenWidth * 0.06,
    //borderRadius: (screenWidth * 0.12) / 2,
    //marginBottom:screenHeight*0.025
  },
  TextAppleGoogle: {
    fontSize: screenWidth * 0.04,
    color: "black",
    //opacity:0.7,
    fontWeight: "500",
  },
  ZarejestrujContainer: {
    width: "100%",
    flexDirection: "row",
    //alignItems: 'center',
    justifyContent: "center",
    gap: screenWidth * 0.02,
    //paddingVertical: screenHeight * 0.03,
    fontSize: screenWidth * 0.05,
    color: "#000",
    //marginBottom: screenHeight * 0.09,
    //paddingLeft: screenWidth * 0.09,
    marginTop: "auto",
  },
});
