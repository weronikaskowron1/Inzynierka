import {StyleSheet,Text,ScrollView,Image,Dimensions,TextInput,TouchableOpacity,View,Modal} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Colors } from "../Themes/colors.ts";
import { Ionicons } from "@expo/vector-icons";
import LoginCard from "../Komponenty/Logowanie/LoginCard.tsx";
import Checkbox from "expo-checkbox";
import DateTimePicker from "@react-native-community/datetimepicker";


const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const Letters_only=/^[A-Za-złąćęłńóśżźĄĆĘŁŃÓŚŹŻ]+$/;

export default function Rejestracja() {

  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [checked, setChecked] = useState(false);
  const [birthDate, setBirthDate] = useState(null);
  const [showBirthPicker, setShowBirthPicker] = useState(false);
  const [nameError,setNameError] = useState("");
  const [phoneError,setPhoneError] = useState("");
  const [surnameError,setSurnameError] = useState("");
  const [showEmailTakenModal,setShowEmailTakenModal] = useState("");
  const [passwordError,setPasswordError] = useState("");

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

  const handleRegister = async() => {
      let hasError = false;
      setNameError(""),
      setSurnameError(""),
      setPhoneError(""),
      setPasswordError("");

      //let hasError = true;

      if (!Letters_only.test(name)) {
          setNameError("Imię może zawierać tylko litery");
          hasError = true;
          }
      if (!Letters_only.test(surname)) {
          setSurnameError("Nazwisko może zawierać tylko litery");
          hasError = true;
          }
      if (password != password2) {
          setPasswordError("Hasła się różnią");
          hasError = true;
          }
      if (hasError) return;

      try {
          const response = await fetch("http://10.0.2.2:3000/api/register",{
              method: "POST",
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify({name,surname,phoneNumber,email,password,birthDate})
              });

          const data = await response.json();

          if(!response.ok) {
              if(data.field == "email") {
                  setShowEmailTakenModal(true);
                  hasError = true;
                  }
              else if (data.field == "phone") {
                  setPhoneError(data.message);
                  hasError = true;
                  }
              return;
              }

          navigation.navigate("Logowanie");
      }
  catch (error) {
      console.log(error);
      setPasswordError("Błąd połączenia z serwerem");
      }

  };


  return (
      <SafeAreaView style={styles.container}>
          <ScrollView>
            <View style={styles.headerContainer}>
                <View style={styles.CofnijContainer}>
                  <TouchableOpacity
                     onPress={() => navigation.navigate("Logowanie")}>
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
                  <View style={[styles.NameSurnameWrapper, nameError ? styles.inputError : null]}>
                     <Ionicons
                       name="person-outline"
                       size={screenWidth * 0.05}
                       color="#999999"
                       style={{ marginRight: screenWidth * 0.02 }}
                     />
                     <TextInput
                        style={styles.inputNameSurname}
                        placeholder="Imię"
                        value={name}
                        onChangeText={(text) => {setName(text); if (nameError) setNameError("");}}
                     />
                  </View>
                  <View style={[styles.NameSurnameWrapper, surnameError ? styles.inputError : null]}>
                     <TextInput
                         style={styles.inputNameSurname}
                         placeholder="Nazwisko"
                         value={surname}
                         onChangeText={(text) => {setSurname(text); if (surnameError) setSurnameError("");}}
                     />
                  </View>
              </View>
              {(nameError || surnameError) && (
                  <View style={[styles.content1,{gap:screenWidth*0.04, marginBottom: screenHeight*0.01}]}>
                    <Text style={[styles.errorText, {width: "48%"}]}>{nameError}</Text>
                    <Text style={[styles.errorText, {width: "48%"}]}>{surnameError}</Text>
                  </View>
                  )}
              <Text style={styles.textDarkSmall}>Numer telefonu</Text>
              <View style={styles.emailWrapper}>
                <Ionicons
                  name="call-outline"
                  size={screenWidth * 0.05}
                  color="#999999"
                  style={{ marginRight: screenWidth * 0.02 }}
                />
                <TextInput
                  style={styles.inputEmail}
                  placeholder="798 345 123"
                  value={phoneNumber}
                  onChangeText={(text) => {setPhoneNumber(text); if (phoneError) setPhoneError("");}}
                />
              </View>
              {phoneError ? <Text style = {styles.errorText}>{phoneError}</Text> : null}
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
              <View style={[styles.passwordWrapper, passwordError ? styles.inputError : null]}>
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
                  onChangeText={(text) =>  {setPassword(text);if (passwordError) setPasswordError("");}}
                />

                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Ionicons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={screenWidth * 0.05}
                    color="#999999"
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.textDarkSmall}>Powtórz hasło</Text>
              <View style={[styles.passwordWrapper, passwordError ? styles.inputError : null]}>
                <Ionicons
                  name="lock-closed-outline"
                  size={screenWidth * 0.05}
                  color="#999999"
                  style={{ marginRight: screenWidth * 0.01 }}
                />
                <TextInput
                  style={styles.inputPassword}
                  placeholder="• • • • • • • •"
                  secureTextEntry={!showPassword2}
                  value={password2}
                  onChangeText={setPassword2}
                />

                <TouchableOpacity onPress={() => setShowPassword2(!showPassword2)}>
                  <Ionicons
                    name={showPassword2 ? "eye-off-outline" : "eye-outline"}
                    size={screenWidth * 0.05}
                    color="#999999"
                  />
                </TouchableOpacity>
              </View>
              {passwordError ? <Text style = {styles.errorText}>{passwordError}</Text> : null}
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
                <TouchableOpacity onPress={() => console.log("Home")}>
                   <Text style={[styles.textClick,{marginBottom: screenHeight * 0.004}]}>Politykę</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.checkbox}>
                <TouchableOpacity onPress={() => console.log("Kliknieto zapamietaj")}>
                   <Text style={[styles.textClick,{paddingLeft: screenWidth * 0.07},{marginBottom: screenHeight * 0.03}]}>Prywatności.</Text>
                </TouchableOpacity>
              </View>

              <LoginCard service="Utwórz konto" onPress = {handleRegister}/>
              <View style={styles.ZarejestrujContainer}>
                <Text style={styles.normalText}>Masz już konto?</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Logowanie")}>
                  <Text style={styles.textClick}>Zaloguj się</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.FirmaContainer}>
                 <Text style={styles.normalText}>Prowadzisz działalność?</Text>
                     <TouchableOpacity
                        onPress={() => navigation.navigate("Logowanie")}>
                        <Text style={styles.textClick}>Zarejestruj firmę</Text>
                     </TouchableOpacity>
              </View>

            </View>
          </ScrollView>

          <Modal
            visible = {showEmailTakenModal}
            transparent
            animationType = "fade"
            onRequestClose = {() => setShowEmailTakenModal(false)}
          >
            <View style = {styles.modalOverlay}>
                <View style = {styles.modalBox}>
                    <Text style = {styles.modalTitle}> Ten adres e-mail jest juz zarejestrowany</Text>
                    <Text style = {styles.modalText}> Popraw dane albo zaloguj się na istniejące konto</Text>
                    <View style = {styles.modalButtons}>
                        <TouchableOpacity style = {styles.modalButtonSecondary} onPress = {() => setShowEmailTakenModal(false)}>
                            <Text style = {styles.modalButtonSecondaryText}>Wróć, poprawię</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.modalButtonPrimary} onPress = {() => {setShowEmailTakenModal(false), navigation.navigate("Logowanie");}}>
                            <Text style = {styles.modalButtonPrimaryText}>Zaloguj się</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
          </Modal>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.backgroundColor,
      paddingTop: screenHeight * -0.03,
    },

    headerContainer: {
      alignItems: "flex-start",
      flex: 1,
      paddingHorizontal: screenWidth * 0.07,
      paddingBottom: screenHeight * 0.02,
    },
    logo: {
      width: screenWidth * 0.08,
      height: screenWidth * 0.08,
    },
    logoSmall: {
      width: screenWidth * 0.06,
      height: screenWidth * 0.06,
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
    },
    content1: {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },
    normalText: {
      fontSize: screenWidth * 0.04,
      color: "#999999",
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
      fontSize: screenWidth * 0.05,
      color: "#000",
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
    ZarejestrujContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "center",
      gap: screenWidth * 0.02,
      fontSize: screenWidth * 0.05,
      color: "#000",
      marginTop: screenHeight * 0.04,
    },
    FirmaContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "center",
      gap: screenWidth * 0.02,
      fontSize: screenWidth * 0.05,
      color: "#000",
      marginTop: screenHeight * 0.01,
    },
    CofnijContainer: {
      width: "100%",
      flexDirection: "row",
      gap: screenWidth * 0.06,
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
    inputError:{
        color:"#e74c3c",
        borderWidth: 1.5,
    },
    errorText:{
        color:"#e74c3c",
        fontSize: screenWidth*0.035,
        marginBottom:screenWidth*0.01,
        marginLeft:screenWidth*0.02,
    },
    modalOverlay:{
        flex:1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:screenWidth*0.08,
    },
    modalBox:{
        width:"100%",
        backgroundColor: "white",
        borderRadius:20,
        padding:screenWidth*0.06,
    },
    modalText: {
      fontSize: screenWidth * 0.04,
      color: "#999999",
      marginBottom: screenHeight*0.03,
    },
    modalButtons: {
      flexDirection: "row",
      gap: screenWidth*0.03,
    },
    modalButtonSecondary: {
      flex: 1,
      paddingVertical: screenHeight*0.015,
      borderRadius:14,
      borderWidth:1,
      borderColor: "bfbfbf",
      alignItems: "center",
    },
    modalButtonSecondaryText: {
      color: "1a1a1a",
      fontWeight: "600",
    },
    modalButtonPrimary: {
      flex: 1,
      paddingVertical: screenHeight*0.015,
      borderRadius: 14,
      backgroundColor: "#81b525ff",
      alignItems: "center"
    },
    modalButtonPrimaryText: {
      color: "white",
      fontWeight: "600",
    },

  });