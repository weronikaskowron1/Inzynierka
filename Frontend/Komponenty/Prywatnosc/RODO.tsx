import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { Colors } from '../../Themes/colors';
import {
  LeagueSpartan_700Bold,
  LeagueSpartan_400Regular,
  LeagueSpartan_500Medium,
  LeagueSpartan_600SemiBold,
} from '@expo-google-fonts/league-spartan';
import { useFonts } from 'expo-font';

const RODO = () => {
  const [fontsLoaded] = useFonts({
    LeagueSpartan_700Bold,
    LeagueSpartan_400Regular,
    LeagueSpartan_500Medium,
    LeagueSpartan_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.title}>
        Polityka prywatności{'\n'}Aplikacja Appoint
      </Text>

      <Text style={styles.paragraph}>
        Niniejsza Polityka prywatności określa zasady przetwarzania
        danych osobowych użytkowników aplikacji Appoint, w tym
        informacje o celach, podstawach prawnych oraz okresie
        przetwarzania danych, a także o prawach przysługujących
        użytkownikom.
      </Text>

      <Text style={styles.heading}>
        § 1. Administrator danych osobowych
      </Text>

      <Text style={styles.paragraph}>
        Administratorem Twoich danych osobowych jest Appoint z
        siedzibą w Polsce. W sprawach związanych z ochroną danych
        osobowych możesz skontaktować się z nami pod adresem
        e-mail:{' '}
        <Text style={styles.bold}>kontakt@appoint.pl</Text>.
      </Text>

      <Text style={styles.heading}>
        § 2. Zakres przetwarzanych danych
      </Text>

      <Text style={styles.paragraph}>
        Przetwarzamy dane osobowe, które podajesz podczas korzystania
        z aplikacji Appoint, w szczególności:
      </Text>

      <View style={styles.list}>
        <Text style={styles.listItem}>
          • <Text style={styles.bold}>Imię i nazwisko</Text> – dane
          identyfikacyjne użytkownika.
        </Text>
        <Text style={styles.listItem}>
          • <Text style={styles.bold}>Numer telefonu</Text> – dane
          kontaktowe niezbędne do obsługi rezerwacji.
        </Text>
        <Text style={styles.listItem}>
          • <Text style={styles.bold}>Adres e-mail</Text> – dane
          wykorzystywane do kontaktu i obsługi konta.
        </Text>
        <Text style={styles.listItem}>
          • <Text style={styles.bold}>Informacje o rezerwacjach</Text>{' '}
          – dane dotyczące terminów, wybranych usług i historii
          rezerwacji.
        </Text>
        <Text style={styles.listItem}>
          • <Text style={styles.bold}>Dane konta</Text> – informacje
          niezbędne do utworzenia i obsługi konta użytkownika.
        </Text>
      </View>

      <Text style={styles.paragraph}>
        Przetwarzamy wyłącznie dane niezbędne do realizacji
        określonych celów. Zakres danych może zależeć od sposobu
        korzystania z aplikacji i dostępnych funkcjonalności.
      </Text>

      <Text style={styles.heading}>
        § 3. Cele i podstawy prawne przetwarzania
      </Text>

      <Text style={styles.paragraph}>
        Twoje dane osobowe przetwarzamy w następujących celach:
      </Text>

      <View style={styles.list}>
        <Text style={styles.listItem}>
          • <Text style={styles.bold}>Świadczenie usług aplikacji</Text>{' '}
          – w celu realizacji usług dostępnych w Appoint, na podstawie
          art. 6 ust. 1 lit. b RODO.
        </Text>
        <Text style={styles.listItem}>
          • <Text style={styles.bold}>Obsługa rezerwacji</Text> –
          w celu dokonywania, potwierdzania i obsługi rezerwacji,
          na podstawie art. 6 ust. 1 lit. b RODO.
        </Text>
        <Text style={styles.listItem}>
          • <Text style={styles.bold}>Obsługa konta użytkownika</Text>{' '}
          – w celu umożliwienia korzystania z konta i jego
          funkcjonalności, na podstawie art. 6 ust. 1 lit. b RODO.
        </Text>
      </View>

      <Text style={styles.paragraph}>
        Jeżeli pojawią się inne cele przetwarzania danych, które
        wymagają odrębnej podstawy prawnej, poinformujemy Cię o nich
        zgodnie z obowiązującymi przepisami.
      </Text>

      <Text style={styles.heading}>
        § 4. Odbiorcy danych osobowych
      </Text>

      <Text style={styles.paragraph}>
        Twoje dane mogą być udostępniane podmiotom wspierającym
        działanie aplikacji Appoint, w szczególności dostawcom usług
        IT, hostingu oraz baz danych, a także innym podmiotom, jeżeli
        jest to niezbędne do realizacji usług lub wymagane przez
        obowiązujące przepisy prawa.
      </Text>

      <Text style={styles.paragraph}>
        Dane są udostępniane wyłącznie w zakresie niezbędnym do
        realizacji określonych celów, z uwzględnieniem odpowiednich
        zabezpieczeń i obowiązków dotyczących ochrony danych
        osobowych.
      </Text>

      <Text style={styles.paragraph}>
        Informacje o przekazywaniu danych poza Europejski Obszar
        Gospodarczy powinny być ustalane na podstawie faktycznie
        wykorzystywanych dostawców usług i stosowanych zabezpieczeń.
      </Text>

      <Text style={styles.heading}>
        § 5. Okres przechowywania danych
      </Text>

      <Text style={styles.paragraph}>
        Twoje dane osobowe przechowujemy przez okres korzystania
        z aplikacji oraz przez czas niezbędny do realizacji celów,
        dla których zostały zebrane.
      </Text>

      <Text style={styles.paragraph}>
        Po zakończeniu korzystania z aplikacji dane mogą być
        przechowywane przez okres wymagany przepisami prawa lub
        niezbędny do ustalenia, dochodzenia albo obrony przed
        ewentualnymi roszczeniami. Po upływie odpowiednich okresów
        dane zostaną usunięte lub zanonimizowane, o ile dalsze
        przechowywanie nie będzie wymagane przez prawo.
      </Text>

      <Text style={styles.heading}>
        § 6. Twoje prawa
      </Text>

      <Text style={styles.paragraph}>
        W związku z przetwarzaniem Twoich danych osobowych
        przysługują Ci, w zakresie określonym przez RODO, następujące
        prawa:
      </Text>

      <View style={styles.list}>
        <Text style={styles.listItem}>
          • prawo dostępu do swoich danych osobowych;
        </Text>
        <Text style={styles.listItem}>
          • prawo do sprostowania nieprawidłowych danych;
        </Text>
        <Text style={styles.listItem}>
          • prawo do usunięcia danych;
        </Text>
        <Text style={styles.listItem}>
          • prawo do ograniczenia przetwarzania;
        </Text>
        <Text style={styles.listItem}>
          • prawo do przenoszenia danych, jeżeli ma zastosowanie;
        </Text>
        <Text style={styles.listItem}>
          • prawo do wniesienia sprzeciwu, jeżeli podstawą
          przetwarzania jest prawnie uzasadniony interes;
        </Text>
        <Text style={styles.listItem}>
          • prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych
          Osobowych.
        </Text>
      </View>

      <Text style={styles.paragraph}>
        W celu skorzystania ze swoich praw możesz skontaktować się
        z nami pod adresem:{' '}
        <Text style={styles.bold}>kontakt@appoint.pl</Text>.
      </Text>

      <Text style={styles.heading}>
        § 7. Bezpieczeństwo danych
      </Text>

      <Text style={styles.paragraph}>
        Stosujemy odpowiednie środki techniczne i organizacyjne
        mające na celu ochronę danych osobowych przed nieuprawnionym
        dostępem, utratą, zniszczeniem lub nieuprawnioną zmianą.
        Zakres stosowanych zabezpieczeń jest dostosowywany do
        charakteru przetwarzanych danych oraz związanego z tym ryzyka.
      </Text>

      <Text style={styles.heading}>
        § 8. Zmiany Polityki prywatności
      </Text>

      <Text style={styles.paragraph}>
        Zastrzegamy sobie prawo do aktualizacji niniejszej Polityki
        prywatności, w szczególności w przypadku zmian w działaniu
        aplikacji, sposobach przetwarzania danych lub obowiązujących
        przepisach prawa.
      </Text>

      <Text style={styles.paragraph}>
        Aktualna wersja Polityki prywatności będzie dostępna
        w aplikacji Appoint.
      </Text>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    width: '80%',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'LeagueSpartan_700Bold',
    color: '#333333',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 30,
    paddingTop: 10,
  },
  heading: {
    fontSize: 20,
    fontFamily: 'LeagueSpartan_600SemiBold',
    color: '#222222',
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    fontFamily: 'LeagueSpartan_400Regular',
    color: '#444444',
    lineHeight: 22,
    marginBottom: 10,
    textAlign: 'justify',
  },
  list: {
    paddingLeft: 10,
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    fontFamily: 'LeagueSpartan_400Regular',
    color: '#444444',
    lineHeight: 22,
    marginBottom: 6,
  },
  bold: {
    fontFamily: 'LeagueSpartan_600SemiBold',
    color: '#000000',
  },
});

export default RODO;
