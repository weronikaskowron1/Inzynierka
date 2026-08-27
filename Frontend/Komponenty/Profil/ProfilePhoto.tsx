import { StyleSheet, Text, View, Image } from 'react-native';
import { Colors } from '../../Themes/colors';
import { LeagueSpartan_700Bold } from '@expo-google-fonts/league-spartan';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import Aparat from './Aparat';


export default function ZdjecieProfilowe({photopath,navigation,imie}) {
    const [fontsLoaded] = useFonts({LeagueSpartan_700Bold});

    return (
      <View style={styles.containerImage}>
      { photopath ?
          <Image
            source={{ uri: photopath }}
            style={{ width: '100%', height: '100%', borderRadius: 20, overflow: 'hidden'}}
          /> :
                      (
                      <View style={{width: '100%', height: '100%'}}>
                      <LinearGradient
                                colors={[Colors.green5, Colors.green4]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={{justifyContent:'center', alignItems:'center', borderRadius:20, aspectRatio:1,width:'100%'}}>
                        <Text style={{color:Colors.green1,fontSize: 30,fontFamily: 'LeagueSpartan_700Bold', paddingLeft:'5%'}}>{imie.slice(0,1)}</Text>
                        </LinearGradient>
                      </View>
                      )
          }
        <Aparat/>
      </View>
    );}

const styles = StyleSheet.create({
    containerImage:
    {
        justifyContent: 'center',
        alignItems: 'center',
        width: '25%',
        padding:'3%',
        marginTop: '4%',
        marginRight: '2%',
        marginLeft: '5%',
        aspectRatio: 1,
        marginBottom: 0
        },
})