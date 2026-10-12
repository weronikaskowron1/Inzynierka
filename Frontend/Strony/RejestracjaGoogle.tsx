import {StyleSheet,Text,ScrollView,Image,Dimensions,TextInput,TouchableOpacity,View,Modal} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { Colors } from "../Themes/colors.ts";
import { Ionicons } from "@expo/vector-icons";
import LoginCard from "../Komponenty/Logowanie/LoginCard.tsx";
import Checkbox from "expo-checkbox";
import DateTimePicker from "@react-native-community/datetimepicker";
import {useAuth} from "../Context/AuthContext.tsx"


const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const Letters_only=/^[A-Za-złąćęłńóśżźĄĆĘŁŃÓŚŹŻ]+$/;

export default function RejestracjaGoogle() {

  const navigation = useNavigation();
  const route = useRoute();
  const {login} = useAuth();
  const {name: googleName, surname: googleSurname, email, googleId} = route.params;

  const [name, setName] = useState(googleName || "");
  const [surname, setSurname] = useState(googleSurname || "");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState(null);
  const [showBirthPicker, setShowBirthPicker] = useState(false);
  const [nameError,setNameError] = useState("");
  const [phoneError,setPhoneError] = useState("");
  const [surnameError,setSurnameError] = useState("");
  const [checked,setChecked] = useState(false);
  const [termsError,setTermsError] = useState("");




  const handleRegister = async() => {
      setNameError("");
      setSurnameError("");
      setPhoneError("");
      setTermsError("");


      let hasError = false;

      if (!Letters_only.test(name)) {
          setNameError("Imię może zawierać tylko litery");
          hasError = true;
          }
      if (!Letters_only.test(surname)) {
          setSurnameError("Nazwisko może zawierać tylko litery");
          hasError = true;
          }
      if (!checked) {
          setTermsError("Musisz zakceptować regulamin");
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
              if (data.field == "phone") {
                  setPhoneError(data.message);
                  hasError = true;
                  }
              return;
              }
          await login(data.user,true);
          navigation.navigate("Nawigator");
      }
  catch (error) {
      console.log(error);
      setPhoneError("Błąd połączenia z serwerem");
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
              <Text style={styles.headerText}>Dokończ rejestracje</Text>
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
              <View style={[styles.emailWrapper, phoneError ? styles.inputError : null ]}>
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

              <Text style={styles.textDarkSmall}>Adres e-mail </Text>
              <View style={[styles.emailWrapper, {backgroundColor: "#F1F0EC"}]}>
                <Ionicons
                    name="mail-outline"
                    size={screenWidth*0.05}
                    color="#999999"
                    styles={{marginRight:screenWidth*0.02}}
                />
                <TextInput
                    style={styles.inputEmail}
                    value={email}
                    editable={false}
                />
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
              {termsError ? <Text style={styles.errorText}>{termsError}</Text> : null}

              <LoginCard service="Dokończ rejestracje" onPress = {handleRegister}/>
            </View>
          </ScrollView>
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
    CofnijContainer: {
      width: "100%",
      flexDirection: "row",
      gap: screenWidth*0.06,
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


  });