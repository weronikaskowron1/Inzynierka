import { Text, View, StyleSheet, Pressable, Modal} from "react-native";
import { Menu, Divider } from 'react-native-paper';
import { LinearGradient } from "expo-linear-gradient";
import { SimpleLineIcons, FontAwesome, Feather, Octicons } from "@expo/vector-icons";
import AvatarIcon from "../Buttons/AvatarIcon.tsx";
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold, LeagueSpartan_800ExtraBold, LeagueSpartan_900Black } from '@expo-google-fonts/league-spartan';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from "expo-image-picker";
import { supabase } from "../../Images/supabase.js";

import { pressed_styles } from "../../Themes/buton_pressed.tsx";
import { Colors } from "../../Themes/colors.ts";

import ZdjecieProfilowe from "../../Komponenty/Profil/ProfilePhoto";

import { useState, useEffect } from "react";

function SetImage({ image_path }: { image_path: string | null }) {
  if (!image_path) return null;

  const { data } = supabase.storage
    .from("Images")
    .getPublicUrl(image_path);

  return `${data.publicUrl}?v=${Date.now()}`;
}

const EmployeeCard = ({ name, surname, id, id_salon, image_path}) => {
    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold });
    const [menuVisible, setMenuVisible] = useState(false);
    const [showDeleteAccount, setShowDeleteAccount] = useState(false);
    const [visible, setVisible] = useState(true);
    const [profileImage, setProfileImage] = useState<string | null>(null);
        const DeleteEmployee = async () => {
          try {

            const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/api/delete/pracownik/${id}/${id_salon}`, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
              }),
            });

            const data = await response.json();

            console.log("Usunięto:", data);
            setVisible(false);

          } catch (error) {
            console.error(error);
          }
        };

  const image_uploaded = image_path!=null;
    useEffect(() => {
        const url = SetImage({image_path});
        setProfileImage(url);
    }, [image_path]);
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.service_container,
          pressed && pressed_styles.button_pressed,
        ]}
    onPress={()=> console.log("pressed")}
      >
        {!image_uploaded && (
          <AvatarIcon
            name={name}
            color1={Colors.green6}
            color2={Colors.green6}
            text_color={Colors.green2}
            size={55}
            text_size={30}
          />
        )}

        {image_uploaded && (
            <View style={styles.image_container}>
                <ZdjecieProfilowe
                  imie={name}
                  photopath={profileImage}
                  ShowChangeImage={() => setShowChangeImage(true)}
                  showCamera={true}
                />
                </View>
        )}
        <View style={styles.service_info}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>{name} {surname}</Text>
          <View style={styles.info_container}>
          </View>
        </View>
        <View style={styles.dots_container}>
          <Menu
            visible={menuVisible}
            onDismiss={() => setMenuVisible(false)}
            anchor={
              <Pressable
                onPress={() => setMenuVisible(true)}
                hitSlop={12}
              >
                <MaterialCommunityIcons
                  name="dots-horizontal"
                  size={22}
                  color="gray"
                />
              </Pressable>
            }
            contentStyle={{
              backgroundColor: Colors.backgroundColor,
              borderRadius: 5,
              width:135,
              height: 52,
              marginTop:'-8%',
              marginLeft:64

            }}
             anchorPosition="top"
          >

            <Menu.Item
              title="Usuń"
              style={{height:40}}
              leadingIcon={({ size }) => (
                              <MaterialCommunityIcons
                                name="trash-can-outline"
                                size={size}
                                color={Colors.lightred}
                              />
                            )}
              titleStyle={{
                color: Colors.lightred,
                fontFamily: "LeagueSpartan_500Medium",
                fontSize: 17,
              }}
              onPress={() => {
                setMenuVisible(false);
                setShowDeleteAccount(true);
              }}
            />
          </Menu>
        </View>
      </Pressable>


         <Modal visible={showDeleteAccount} transparent animationType="fade" onRequestClose={() => setShowDeleteAccount(false)}>
           <Pressable style={styles.modalTlo} onPress={() => setShowDeleteAccount(false)}>
             <Pressable style={styles.DeleteContainer} onPress={(e) => e.stopPropagation()}>
               <View style={[styles.tloIconki,{backgroundColor:Colors.pink,width:'18%',borderRadius:99, marginBottom:'1%'}]}>
                     <Feather name="trash-2" size={32} color={Colors.lightred} />
               </View>
               <Text style={[styles.textbold, {fontSize: 25, fontFamily:'LeagueSpartan_600SemiBold', paddingBottom:'4%', paddingHorizontal: '3%'}]}>Usunąć konto?</Text>
               <Text style={[styles.textbold, {fontSize: 15, fontFamily:'LeagueSpartan_500Medium', paddingBottom:'4%', paddingHorizontal: '3%', marginTop:'-1%',color:"gray"}]}>Tej operacji nie można cofnąć.</Text>
               <Text style={[styles.textbold, {fontSize: 15, fontFamily:'LeagueSpartan_500Medium', paddingBottom:'4%', paddingHorizontal: '3%', marginTop:'-2%',color:"gray"}]}>Czy na pewno chcesz usunąć konto?</Text>
               <View style={{flexDirection:'row', width:'90%',alignItems:'center', justifyContent:'center',gap:'7%', height:80}}>

               <Pressable style={[styles.Option,{backgroundColor:Colors.green6}]} onPress={() => {setShowDeleteAccount(false);}}>
                 <Text style={[styles.text, {fontSize: 20, fontFamily:'LeagueSpartan_500Medium', color:Colors.green2, marginTop:'-5%'}]}>Nie</Text>
               </Pressable>

               <Pressable style={[styles.Option,{backgroundColor:Colors.lightred}]} onPress={()=> {DeleteEmployee(); setShowDeleteAccount(false);}} >
                 <Text style={[styles.text, {fontSize: 20, fontFamily:'LeagueSpartan_500Medium', color:Colors.white, marginTop:'-5%'}]}>Tak, usuń</Text>
               </Pressable>
               </View>

             </Pressable>
           </Pressable>
         </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: 70,
    marginTop:'1%',
    marginBottom:'6%',
  },

  service_container: {
    flexDirection: "row",
    height:80,
    padding: 10,
    paddingRight: 15,
    alignItems: "center",
    borderWidth: 0,
    borderRadius: 15,
    borderWidth:2,
    borderColor: Colors.greenishwhite,
    boxShadow: "0px 0px 7px rgba(164, 164, 164, 0.2)",

  },

  image_container: {
    height: 60,
    aspectRatio:1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  service_info: {
      marginTop:'1%',
    padding: 14,
    paddingLeft: 14,
    justifyContent: "center",
    width:'70%'
  },
  name: {
    fontFamily: "LeagueSpartan_600SemiBold",
    fontSize: 19,
    color: Colors.graphite,
  },
  email: {
    paddingLeft:'1%',
    fontFamily: "LeagueSpartan_500Medium",
    fontSize: 14,
    color: "gray",
  },
  info_container: {
    marginTop: "2%",
    flexDirection: "row",
    height:'30%',
    alignItems:'center'
  },
  user_type: {
    color: Colors.lightgrayText,
    fontFamily:  "LeagueSpartan_400Regular",
    fontSize: 14,
  },
  dots_container: {
    marginLeft: "auto",
    marginTop:'2%',
    alignItems:'top',
    height:'100%'
  },
    tloIconki:
    {
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: Colors.green6,
        aspectRatio:1,
        width:'12%',
        marginRight:'4%',
        marginLeft: '4%',
        marginTop:'1%'
        },
  modalTlo: {
       flex: 1,
       backgroundColor: 'rgba(0,0,0,0.4)', //Tlo jest przezroczyste
       justifyContent: 'center',
       alignItems: 'center',
     },
 DeleteContainer: {
       width: '90%',
       backgroundColor: 'white',
       borderRadius: 25,
       padding: 20,
       alignItems:'center'
     },
  Option: {
       borderRadius:25,
       width:'40%',
       height:'65%',
       alignItems:'center',
       justifyContent:'center'
     },
});

export default EmployeeCard;