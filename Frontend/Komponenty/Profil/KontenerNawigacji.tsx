import { StyleSheet, Text, View, Pressable } from 'react-native';
import { FontAwesome, Feather, FontAwesome6, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../../Themes/colors';
import { LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold } from '@expo-google-fonts/league-spartan';
import { useFonts } from 'expo-font';

export default function NavigationContainer({navigation}) {
    console.log(navigation);
    const [fontsLoaded] = useFonts({LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold });
    return (
        <View style={[styles.container,{flexDirection:'column'}]}>
              <Pressable onPress={() => navigation.navigate('EdytujProfil')} style={{flexDirection:'row', alignItems: 'center', margin:'1%', marginTop:'3%', marginBottom:'3%'}}>
              <View style={styles.tloIconki}>
                    <Feather name="user" size={22} color={Colors.green2} />
              </View>
              <View style={{flexDirection:'column'}}>
              <Text style={styles.textbold}>Dane osobowe</Text>
              <Text style={styles.textundergray}>Edytuj swoje dane</Text>
              </View>
              <FontAwesome6 name='chevron-right' size={16} color='gray' style={{right:'5%', position: 'absolute',marginTop:'1%'}}/>
              </Pressable>
             <View style={{alignItems: 'center', width:'100%'}}>
              <View style={{width:'90%', height: 2, backgroundColor: Colors.lightgray, borderRadius:99}}/>
              </View>

                <Pressable onPress={() => navigation.navigate('Logowanie')} style={{flexDirection:'row', alignItems: 'center', margin:'1%', marginTop:'3%', marginBottom:'3%'}}>
                <View style={styles.tloIconki}>
                      <Feather name="bell" size={22} color={Colors.green2} />
                </View>
                <View style={{flexDirection:'column'}}>
                <Text style={styles.textbold}>Powiadomienia</Text>
                <Text style={styles.textundergray}>Zarządzaj alertami</Text>
                </View>
                <FontAwesome6 name='chevron-right' size={16} color='gray' style={{right:'5%', position: 'absolute',marginTop:'1%'}}/>
                </Pressable>
               <View style={{alignItems: 'center', width:'100%'}}>
                <View style={{width:'90%', height: 2, backgroundColor: Colors.lightgray, borderRadius:99}}/>
                </View>


                <Pressable onPress={() => navigation.navigate('Logowanie')} style={{flexDirection:'row', alignItems: 'center', margin:'1%', marginTop:'3%', marginBottom:'3%'}}>
                <View style={styles.tloIconki}>
                      <AntDesign name="credit-card" size={22} color={Colors.green2} />
                </View>
                <View style={{flexDirection:'column'}}>
                <Text style={styles.textbold}>Płatności</Text>
                <Text style={styles.textundergray}>Metody płatności i historia</Text>
                </View>
                <FontAwesome6 name='chevron-right' size={16} color='gray' style={{right:'5%', position: 'absolute',marginTop:'1%'}}/>
                </Pressable>
               <View style={{alignItems: 'center', width:'100%'}}>
                <View style={{width:'90%', height: 2, backgroundColor: Colors.lightgray, borderRadius:99}}/>
                </View>


              <Pressable onPress={() => navigation.navigate('Logowanie')} style={{flexDirection:'row', alignItems: 'center', margin:'1%', marginTop:'3%', marginBottom:'3%'}}>
              <View style={styles.tloIconki}>
                    <MaterialCommunityIcons name="shield-check-outline" size={22} color={Colors.green2} />
              </View>
              <View style={{flexDirection:'column'}}>
              <Text style={styles.textbold}>Prywatność</Text>
              <Text style={styles.textundergray}>Zarządzaj danymi i zgodami</Text>
              </View>
              <FontAwesome6 name='chevron-right' size={16} color='gray' style={{right:'5%', position: 'absolute',marginTop:'1%'}}/>
              </Pressable>
             <View style={{alignItems: 'center', width:'100%'}}>
              <View style={{width:'90%', height: 2, backgroundColor: Colors.lightgray, borderRadius:99}}/>
              </View>


              <Pressable onPress={() => navigation.navigate('Logowanie')} style={{flexDirection:'row', alignItems: 'center', margin:'1%', marginTop:'3%', marginBottom:'3%'}}>
              <View style={styles.tloIconki}>
                    <Feather name="help-circle" size={22} color={Colors.green2} />
              </View>
              <View style={{flexDirection:'column'}}>
              <Text style={styles.textbold}>Wsparcie</Text>
              <Text style={styles.textundergray}>Najczęstsze pytania i kontakt</Text>
              </View>
              <FontAwesome6 name='chevron-right' size={16} color='gray' style={{right:'5%', position: 'absolute',marginTop:'1%'}}/>
              </Pressable>
             <View style={{alignItems: 'center', width:'100%'}}>
              <View style={{width:'90%', height: 2, backgroundColor: Colors.lightgray, borderRadius:99}}/>
              </View>

              <Pressable onPress={() => navigation.navigate('Logowanie')} style={{flexDirection:'row', alignItems: 'center', margin:'1%', marginTop:'3%', marginBottom:'3%'}}>
              <View style={styles.tloIconki}>
                    <Feather name="info" size={22} color={Colors.green2} />
              </View>
              <View style={{flexDirection:'column'}}>
              <Text style={styles.textbold}>Infomacje</Text>
              <Text style={styles.textundergray}>Regulamin i infomacje o aplikacji</Text>
              </View>
              <FontAwesome6 name='chevron-right' size={16} color='gray' style={{right:'5%', position: 'absolute',marginTop:'1%'}}/>
              </Pressable>
        </View>
        );
    }


const styles = StyleSheet.create({
    container:
    {
        width:'90%',
        backgroundColor: 'white',
        borderRadius :25,
        shadowColor: Colors.graphite,
        shadowOffset: {width:0, height:4},
        shadowOpacity: 0.10,
        shadowRadius:6,
        elevation:2,
        borderWidth:1,
        borderColor: Colors.lightgray,
        margin: '3%'
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
   text:
   {
       fontSize: 16,
       padding: '3%',
       paddingBottom: '0%',
       fontFamily: 'LeagueSpartan_400Regular',
   },
   textbold:
   {
       fontSize:18,
       color: Colors.graphite,
       fontFamily: 'LeagueSpartan_600SemiBold',
       marginBottom: '-2%'
       },
   textundergray:
      {
          fontSize: 15,
          paddingBottom: '0%',
          fontFamily: 'LeagueSpartan_500Medium',
          color: 'gray',
          },
})