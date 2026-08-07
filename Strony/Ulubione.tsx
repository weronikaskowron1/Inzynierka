import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import {Ionicons, Fontisto} from '@expo/vector-icons';
import { useState } from 'react';


function ProfilFirmy({nazwaFirmy, idFirmy, profiloweFirmy, ocenaFirmy, polubione, odleglosc}) {
    const [czyPolubione, setPolubione] = useState(polubione);
    return (
        <View style={styles.containerFirma}>
            <Pressable style={styles.polubione} onPress={() => setPolubione(!polubione)}>
              {polubione ? (
                <Ionicons name="heart" style={styles.serduszko} size={25} />
              ) : (
                <Ionicons name="heart-outline" style={styles.serduszko} size={25} />
              )}
            </Pressable>
            <View style={styles.Stopka}>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10, marginTop: 45, width: 105, height: 70, backgroundColor: 'green', borderRadius: 5, overflow: 'hidden'}}>
                {profiloweFirmy ? (
                  <Image
                    source={{ uri: {profiloweFirmy} }}
                    style={{ width: 100, height: 100 }}
                  />
                ) : (
                  <Ionicons name="image-outline" size={30} color="gray" />
                )}
                </View>
                <Text style={styles.nazwaFirmy}>{nazwaFirmy}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                    <Fontisto name="star" style={styles.ocenaFirmy}></Fontisto>
                    <Text> {ocenaFirmy}</Text>
                </View>
                <Text size={20}>{odleglosc}</Text>
                </View>
            </View>
        </View>
        )
    }

function Ulubione() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
      <Text>Najczęściej odwiedzane:</Text>
      <View style={{ flexDirection: 'row' }}>
      <ProfilFirmy nazwaFirmy="Nazwa Firmy" idFirmy={1} profiloweFirmy="" ocenaFirmy={3.4} polubione={true} odleglosc="5km"/>
      </View>
      <Text>Polubione:</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerFirma: {
    width: 150,
    height: 150
    },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
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
      },
  polubione: {
    position: 'absolute',
    top: 0,
    right: 10,
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
      width: 120,
      height: 120,
      backgroundColor: 'white',
          padding: 10,
          margin: 10,
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