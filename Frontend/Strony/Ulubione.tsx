import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import {Ionicons, Fontisto} from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { ServiceCard } from '../Komponenty/HomeScreen/ServiceCard.tsx'
import { LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold } from '@expo-google-fonts/league-spartan';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../Themes/colors';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

function ProfilFirmy({nazwaFirmy, idFirmy, profiloweFirmy, ocenaFirmy, polubione, odleglosc}) {
    const [czyPolubione, setPolubione] = useState(polubione);
    useEffect(() => {
      setPolubione(polubione);
    }, [polubione]);
    return (
        <View style={styles.containerFirma}>
            <Pressable style={styles.polubione} onPress={() => setPolubione(prev => !prev)}>
              {czyPolubione ? (
                  <>
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                   <Ionicons name="heart" style={styles.serduszko} size={35} />
                   <Ionicons name="heart" style={styles.serduszko_back} size={42}/>
                   </View>
                </>
              ) : (
                <Ionicons name="heart-outline" style={styles.serduszko_blank} size={42} />
              )}
            </Pressable>
            <View style={styles.Stopka}>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 0,
                     width: '100%', height: '100%', backgroundColor: 'green', borderRadius: 5, overflow: 'hidden'}}>
                {profiloweFirmy ? (
                  <Image
                    source={{ uri: {profiloweFirmy} }}
                    style={{ width: '100%', height: '100%' }}
                  />
                ) : (
                  <Ionicons name="image-outline" size={30} color="gray" style={{ position: 'absolute', top: '20%'}} />
                )}
                </View>
                <View style={{backgroundColor: 'rgba(255, 255, 255, 0.8)',borderRadius: 2, position: 'absolute', top:'70%', width: '100%'}}>
                <Text style={styles.nazwaFirmy}>{nazwaFirmy}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                    <Fontisto name="star" style={styles.ocenaFirmy}></Fontisto>
                    <Text> {ocenaFirmy}</Text>
                </View>
                <Text size={20} style={{padding: 5}}>{odleglosc}</Text>
                </View>
                </View>
            </View>
        </View>
        )
    }

function Ulubione() {
  const tabBarHeight = useBottomTabBarHeight();
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold });
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding:'5%', paddingBottom:tabBarHeight+'5%', backgroundColor:Colors.creambackground }}>
      <Text style={styles.textfont}>Najczęściej odwiedzane:</Text>
      <View style={{ flexDirection: 'row' }}>
      <ProfilFirmy nazwaFirmy="Nazwa Firmy" idFirmy={1} profiloweFirmy="" ocenaFirmy={3.4} polubione={false} odleglosc="5km"/>
      </View>
      <Text style={styles.textfont}>Polubione:</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerFirma: {
    width: '55%',
    height: '45%'
    },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
         textfont:
            {
                fontSize: 23,

                fontFamily: 'LeagueSpartan_500Medium',
                color: Colors.graphite,
                },
  text: {
    fontSize: 20,
  },
  boldText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  serduszko: {
      color: 'red',
      margin: 0,
      position: 'absolute',
      zIndex: 2
      },
  serduszko_back: {
      color: 'white',
      margin: 0,
      zIndex: 1
      },
  serduszko_blank: {
      color: 'gray',
      margin: 0,
      zIndex: 1
      },
  polubione: {
    position: 'absolute',
    top: 7,
    right: 12,
    zIndex: 1,
      },
  ocenaFirmy: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'darkorange',
  },
  nazwaFirmy: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  Stopka: {
      width: '80%',
      height: '100%',
      backgroundColor: 'white',
          padding: 10,
          margin: 15,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,

  },

});

export default Ulubione;