import {StyleSheet,Text,View,Image,Dimensions,TextInput,TouchableOpacity,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Colors } from "../Themes/colors.ts";
import { Ionicons } from "@expo/vector-icons";
import LoginCard from "../Komponenty/Logowanie/LoginCard.tsx";
import Checkbox from "expo-checkbox";
import DateTimePicker from "@react-native-community/datetimepicker";


const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function Rejestracja() {

  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [checked, setChecked] = useState(false);
  const [birthDate, setBirthDate] = useState(null);
  const [showBirthPicker, setShowBirthPicker] = useState(false);
  const getPasswordStrength=(password)=>{
      let score=0;
      if (password.length >6) score++;
      if (password.length >10) score++;
      if (/[A-Z]/.test(password)) score++;
      if (/[0-9]/.test(password)) score++;
      if (/[^A-Za-z0-9]/.test(password)) score++;
      return Math.min(score,4);};
  const strengthColors=[
      "#C8D4C0",
      "#A9C39A",
      "#7FA86F",
      "#2F5D3A",];


  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
            <View style={styles.CofnijContainer}>
              <TouchableOpacity
                 onPress={() => console.log("Kliknieto cofnij")}>
                 <View style={styles.BackButtonConteiner}>
                     <Ionicons
                        name="chevron-back"
                        size={screenWidth * 0.07}
                        color="#2F5D3A"
                 />
                 </View>
              </TouchableOpacity>
              <View style={styles.logoConteinerSmall}>
                <Image
                  source={require("../assets/logo.png")}
                  style={styles.logoSmall}
                  resizeMode="contain"
                />
              </View>
            </View>
          <Text style={styles.headerText}>Załóż konto</Text>
          <Text style={[styles.normalText,{marginBottom: screenHeight * 0.02}]}>
            Kilka kroków i umawiasz następną wizytę
          </Text>
          <View style={[styles.content1,{gap: screenHeight * 0.17}]}>
            <Text style={styles.textDarkSmall}>Imię</Text>
            <Text style={styles.textDarkSmall}>Nazwisko</Text>
          </View>
          <View style={[styles.content1,{gap:screenWidth*0.04}]}>
              <View style={styles.NameSurnameWrapper}>
                 <Ionicons
                   name="mail-outline"
                   size={screenWidth * 0.05}
                   color="#999999"
                   style={{ marginRight: screenWidth * 0.02 }}
                 />
                 <TextInput
                    style={styles.inputNameSurname}
                    placeholder="Imię"
                    value={name}
                    onChangeText={setName}
                 />
              </View>
              <View style={styles.NameSurnameWrapper}>
                 <TextInput
                     style={styles.inputNameSurname}
                     placeholder="Nazwisko"
                     value={surname}
                     onChangeText={setSurname}
                 />
              </View>
          </View>
          <Text style={styles.textDarkSmall}>Data Urodzenia</Text>
          <View style={styles.emailWrapper}>
             <Ionicons
                name="calendar-outline"
                size={screenWidth * 0.05}
                color="#999999"
                style={{ marginRight: screenWidth * 0.02 }}
             />
             <TouchableOpacity
                onPress={() => setShowBirthPicker(true)}>
                 <Text style={styles.inputEmail}>
                   {birthDate ? birthDate.toLocaleDateString() : "4/6/2004"}
                 </Text>
               </TouchableOpacity>
          </View>
           {showBirthPicker && (
               <DateTimePicker
                   value={birthDate || new Date(2000,0,1)}
                   mode="date"
                   display="spinner"
                   maximumDate={new Date()}
                   onChange={(event,selected)=>{
                       setShowBirthPicker(false);
                           if (selected) setBirthDate(selected);
                                }}/>
           )}
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
          <View style={styles.passwordStrengthContainer}>
            {[0,1,2,3].map((i)=>(
                <View
                key={i}
                style={[
                    styles.strengthSegment,
                    {backgroundColor: i<getPasswordStrength(password)?strengthColors[i]:"#E5E5E5"}
                    ]}
                />
                ))}
                <Text style={styles.strengthLabel}>
                    {["Słabe","OK","Średnie","Dobre","Świetne"][getPasswordStrength(password)]}
                </Text>
            </View>
          <View style={styles.checkbox}>
            <Checkbox
              value={checked}
              onValueChange={setChecked}
              color={checked ? "#81b525ff" : "#ccc"}
              style={styles.checkboxBox}
            />
            <Text style={styles.normalText}>Akceptuję</Text>
            <TouchableOpacity onPress={() => console.log("Kliknieto zapamietaj")}>
              <Text style={styles.textClick}>Regulamin</Text>
            </TouchableOpacity>
            <Text style={styles.normalText}>oraz</Text>
            <TouchableOpacity onPress={() => console.log("Kliknieto zapamietaj")}>
               <Text style={[styles.textClick,{marginBottom: screenHeight * 0.004}]}>Politykę</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.checkbox}>
            <TouchableOpacity onPress={() => console.log("Kliknieto zapamietaj")}>
               <Text style={[styles.textClick,{paddingLeft: screenWidth * 0.07},{marginBottom: screenHeight * 0.03}]}>Prywatności.</Text>
            </TouchableOpacity>
          </View>

          <LoginCard service="Utwórz konto" />
          <View style={styles.ZarejestrujContainer}>
            <Text style={styles.normalText}>Masz już konto?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Rejestracja")}>
              <Text style={styles.textClick}>Zaloguj się</Text>
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
      //paddingTop: screenHeight * 0.02,
    },

    headerContainer: {
      //width: "100%",
      alignItems: "flex-start",
      //justifyContent: "flex-end",
      flex: 1,
      //alignItems: 'flex-start',
      //justifyContent: 'flex-end',
      paddingHorizontal: screenWidth * 0.07,
      paddingBottom: screenHeight * 0.02,
      //gap: screenHeight * 0.02,
      transform: [{ translateY: -20 }],
      //minHeight: screenHeight * 1.01,
    },
    logo: {
      width: screenWidth * 0.08,
      height: screenWidth * 0.08,
      //borderRadius: (screenWidth * 0.12) / 2,
      //marginBottom:screenHeight*0.025
    },
    logoSmall: {
      width: screenWidth * 0.06,
      height: screenWidth * 0.06,
      //borderRadius: (screenWidth * 0.12) / 2,
      //marginBottom:screenHeight*0.025
    },
    headerText: {
      fontSize: screenWidth * 0.072,
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
    content1: {
      //flex: 1,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",

      //gap: screenHeight * 0.08,
    },
    normalText: {
      fontSize: screenWidth * 0.04,
      color: "#999999",
      //marginBottom: screenHeight * 0.025,
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
      //paddingVertical: screenHeight*0.07;
    },
    inputNameSurname: {
      width: "100%",
      fontSize: screenWidth * 0.045,
      color: "black",
    },
    emailWrapper: {
      width: "100%",
      height:screenWidth*0.12,
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 20,
      paddingLeft: screenWidth * 0.02,
      paddingRight: screenWidth * 0.12,
      marginTop: screenHeight * 0.01,
      marginBottom: screenHeight * 0.02,
      paddingVertical: screenHeight * 0.002,

      backgroundColor: "white",
      shadowColor: Colors.graphite,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 9,
      elevation: 2,
      borderWidth: 1,
      borderColor: "#F1F0EC",
    },
    NameSurnameWrapper: {
      width: "48%",
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 20,
      height:screenWidth*0.12,
      paddingLeft: screenWidth * 0.02,
      paddingRight: screenWidth * 0.12,
      marginTop: screenHeight * 0.01,
      marginBottom: screenHeight * 0.02,
      paddingVertical: screenHeight * 0.002,

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
      height:screenWidth*0.12,
      //height: screenHeight * 0.045,
      //paddingHorizontal: screenWidth*0.03,
      paddingLeft: screenWidth * 0.02,
      paddingRight: screenWidth * 0.14,
      marginTop: screenHeight * 0.01,
      marginBottom: screenHeight * 0.02,
      paddingVertical: screenHeight * 0.002,

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
      gap: screenWidth * 0.015,
      //paddingVertical: screenHeight * 0.015,
      fontSize: screenWidth * 0.05,
      color: "#000",
      //marginBottom: screenHeight * 0.03,
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
      //marginTop: "auto",
      marginTop: screenHeight * 0.06,
      //paddingLeft: screenWidth * 0.09,
      //marginTop: "auto",
    },
    CofnijContainer: {
      width: "100%",
      flexDirection: "row",
      //alignItems: 'center',
      //justifyContent: "center",
      gap: screenWidth * 0.06,
      //paddingVertical: screenHeight * 0.015,
      //fontSize: screenWidth * 0.05,
      //color: "#000",
      //marginBottom: screenHeight * 0.09,
      //paddingLeft: screenWidth * 0.09,
    },
    BackButtonConteiner: {
      width: screenWidth * 0.12,
      height: screenWidth * 0.12,
      borderWidth: 1,
      borderColor: "#bfbfbf",
      borderRadius: 14,
      backgroundColor: "#EEF1ED",
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
      //opacity: 0.8;
    },
    logoConteinerSmall: {
      width: screenWidth * 0.12,
      height: screenWidth * 0.12,
      borderWidth: 1,
      borderColor: "#bfbfbf",
      borderRadius: 14,
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
    passwordStrengthContainer:{
        flexDirection:"row",
        alignItems:"center",
        gap:screenWidth*0.02,
        //justifyContent: "center",
        marginBottom:screenHeight*0.01,
    },
    strengthSegment:{
        width:screenWidth*0.16,
        height:screenHeight*0.007,
        borderRadius:4,
    },
    strengthLabel:{
        color:"#2F5D3A",
        fontWeight:"600",
        fontSize:screenWidth*0.037,
    },
  });