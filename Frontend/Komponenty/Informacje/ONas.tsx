import React from 'react';
import { Text, StyleSheet, View,} from 'react-native';
import { Colors } from '../../Themes/colors';
import { LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold } from '@expo-google-fonts/league-spartan';
import { useFonts } from 'expo-font';


const ONas = () => {
  return (
    <View style={styles.container} contentContainerStyle={styles.content} >

      <Text style={styles.leadText}>
        Witamy w{' '}
        <Text style={styles.bold}>Appoint</Text> – Twoim
        nowoczesnym centrum rezerwacji usług z branży beauty, health &
        wellness.
      </Text>

      <View style={styles.section}>
        <Text style={styles.heading}>Nasza Misja</Text>

        <Text style={styles.paragraph}>
          Naszym celem jest ułatwianie codziennego życia. Wierzymy, że
          proces umawiania wizyt powinien być szybki, intuicyjny i
          dostępny o każdej porze. Dlatego stworzyliśmy platformę,
          która łączy wymagających klientów z najlepszymi
          specjalistami w okolicy, tworząc przestrzeń opartą na
          zaufaniu i najwyższej jakości.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Dla Klientów</Text>

        <Text style={styles.paragraph}>
          Koniec z dzwonieniem w godzinach pracy salonu. Z{' '}
          Appoint masz dostęp do tysięcy wolnych terminów
          24/7. Przeglądaj prawdziwe opinie, porównuj ceny, inspiruj
          się portfolio specjalistów i rezerwuj wizyty za pomocą
          zaledwie kilku kliknięć. Twój czas jest dla nas
          priorytetem.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Dla Partnerów (Salonów)</Text>

        <Text style={styles.paragraph}>
          Dostarczamy narzędzia, które pomagają biznesom rosnąć. Nasz
          system to nie tylko wirtualny kalendarz, ale kompletny
          asystent zarządzania salonem. Pomagamy redukować liczbę
          zapomnianych wizyt dzięki automatycznym powiadomieniom SMS,
          zdobywać nowych lojalnych klientów i optymalizować
          codzienną pracę.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Nasza Historia</Text>

        <Text style={styles.paragraph}>
          Aplikacja Appoint powstała w 2026 roku
          z prostej potrzeby – znalezienia fryzjera na „już” bez
          konieczności wykonywania kilkunastu telefonów. Od tego
          czasu nieustannie rozwijamy nasz produkt, wsłuchując się w
          głosy zarówno użytkowników, jak i właścicieli salonów.
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    width:'80%'
  },

  content: {
    padding: 20,
  },

  leadText: {
    fontSize: 16,
    color: '#444444',
    lineHeight: 24,
    marginBottom: 24,
    textAlign: 'center',
    fontStyle: 'italic',
  },

  section: {
    marginBottom: 24,
  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 5,
  },

  paragraph: {
    fontSize: 15,
    color: '#555555',
    lineHeight: 24,
    textAlign: 'justify',
  },

  bold: {
    fontWeight: 'bold',
    color: '#000000',
  },

});

export default ONas;
