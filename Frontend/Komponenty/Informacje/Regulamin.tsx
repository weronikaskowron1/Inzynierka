import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Colors } from '../../Themes/colors';
import { LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold } from '@expo-google-fonts/league-spartan';
import { useFonts } from 'expo-font';

const Regulamin = () => {
    const [fontsLoaded] = useFonts({LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold });
  return (
    <View style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>
        Regulamin Współpracy B2B (dla Partnerów){'\n'}Aplikacja Appoint
      </Text>

      <Text style={styles.heading}>§ 1. Postanowienia ogólne</Text>
      <Text style={styles.paragraph}>
        1. Niniejszy regulamin (dalej: <Text style={styles.bold}>Regulamin B2B</Text>) określa zasady, na jakich właściciel aplikacji Appoint udostępnia przedsiębiorcom oprogramowanie typu SaaS służące do zarządzania rezerwacjami, kalendarzem wizyt oraz pozyskiwania klientów.
      </Text>
      <Text style={styles.paragraph}>
        2. Właścicielem Aplikacji jest [Pełna nazwa Twojej firmy], z siedzibą w [Adres], NIP: [Numer NIP], KRS: [Numer KRS, jeśli dotyczy] (dalej: <Text style={styles.bold}>Operator</Text>).
      </Text>
      <Text style={styles.paragraph}>
        3. Współpraca ma charakter wyłącznie profesjonalny (B2B). Przepisy dotyczące ochrony praw konsumentów nie mają zastosowania do Partnerów korzystających z Aplikacji w ramach prowadzonej działalności gospodarczej.
      </Text>

      <Text style={styles.heading}>§ 2. Definicje</Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>
          • <Text style={styles.bold}>Partner (Salon/Usługodawca)</Text> – przedsiębiorca posiadający aktywne Konto Partnera w Aplikacji.
        </Text>
        <Text style={styles.listItem}>
          • <Text style={styles.bold}>Aplikacja (System)</Text> – oprogramowanie zarządzane przez Operatora, udostępniane w modelu abonamentowym.
        </Text>
        <Text style={styles.listItem}>
          • <Text style={styles.bold}>Konto Partnera</Text> – indywidualny profil Partnera w Systemie do zarządzania grafikiem, cennikiem i personelem.
        </Text>
        <Text style={styles.listItem}>
          • <Text style={styles.bold}>Użytkownik (Klient)</Text> – klient końcowy rezerwujący usługi.
        </Text>
      </View>

      <Text style={styles.heading}>§ 3. Zakres usług Systemu (Zarządzanie Kalendarzem)</Text>
      <Text style={styles.paragraph}>
        1. W ramach zawartej umowy Operator udostępnia Partnerowi następujące funkcjonalności:
      </Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>• interaktywny kalendarz do zarządzania wizytami,</Text>
        <Text style={styles.listItem}>• wirtualną wizytówkę Salonu widoczną w aplikacji dla Użytkowników,</Text>
        <Text style={styles.listItem}>• system powiadomień dla klientów i pracowników Partnera,</Text>
        <Text style={styles.listItem}>• moduł zarządzania personelem i zasobami,</Text>
        <Text style={styles.listItem}>• dostęp do statystyk i raportów finansowych.</Text>
      </View>
      <Text style={styles.paragraph}>
        2. Partner zobowiązany jest do bieżącego aktualizowania kalendarza dostępności, cennika oraz informacji o personelu, aby uniknąć konfliktów w rezerwacjach.
      </Text>

      <Text style={styles.heading}>§ 4. Opłaty Abonamentowe i Prowizje</Text>
      <Text style={styles.paragraph}>
        1. Korzystanie z Aplikacji przez Partnera jest odpłatne. Na całkowity koszt korzystania z Systemu składa się stała <Text style={styles.bold}>Opłata Abonamentowa</Text> oraz <Text style={styles.bold}>Prowizja</Text> od zrealizowanych rezerwacji.
      </Text>
      <Text style={styles.paragraph}>
        2. Partner zobowiązuje się do uiszczania cyklicznej opłaty za dostęp do Systemu w wysokości [np. 149 PLN netto / miesiąc] zgodnie z wybranym planem.
      </Text>
      <Text style={styles.paragraph}>
        3. Operator pobiera prowizję za każdego <Text style={styles.bold}>nowego Klienta</Text>, który dokonał pierwszej rezerwacji w Salonie. Wysokość prowizji wynosi [np. 20%] wartości zrealizowanej usługi.
      </Text>
      <Text style={styles.paragraph}>
        4. Operator do [np. 5. dnia] każdego miesiąca wystawi Partnerowi fakturę VAT. Termin płatności wynosi [np. 7 dni].
      </Text>

      <Text style={styles.heading}>§ 5. Obowiązki i Oświadczenia Partnera</Text>
      <Text style={styles.paragraph}>
        1. Partner oświadcza, że posiada niezbędne kwalifikacje i uprawnienia do świadczenia oferowanych Usług.
      </Text>
      <Text style={styles.paragraph}>
        2. <Text style={styles.bold}>Zakaz omijania Systemu:</Text> Partnerowi zabrania się nakłaniania Użytkowników pozyskanych przez Aplikację do anulowania rezerwacji w Systemie i rezerwowania bezpośrednio w Salonie w celu ominięcia należnej Operatorowi prowizji.
      </Text>

      <Text style={styles.heading}>§ 6. Odpowiedzialność Operatora</Text>
      <Text style={styles.paragraph}>
        1. Operator dokłada najwyższych starań, aby System był dostępny nieprzerwanie (SLA 99%).
      </Text>
      <Text style={styles.paragraph}>
        2. Operator nie jest stroną umów zawieranych między Partnerem a Użytkownikiem i nie ponosi odpowiedzialności za jakość usług świadczonych przez Partnera.
      </Text>

      <Text style={styles.heading}>§ 7. Rozwiązanie umowy</Text>
      <Text style={styles.paragraph}>
        1. Umowa zostaje zawarta na czas nieokreślony. Każda ze stron może wypowiedzieć umowę z zachowaniem [np. 1-miesięcznego] okresu wypowiedzenia.
      </Text>
      <Text style={styles.paragraph}>
        2. Operator ma prawo rozwiązać umowę ze skutkiem natychmiastowym, jeśli Partner rażąco narusza Regulamin B2B lub zalega z opłatami przez okres dłuższy niż [np. 14 dni].
      </Text>

      {/* Dodatkowy margines na dole ułatwiający przewijanie do samego końca */}
      <View style={{ height: 40 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    width:'80%'
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 30,
    paddingTop:10
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222222',
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 14,
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
    fontSize: 14,
    color: '#444444',
    lineHeight: 22,
    marginBottom: 6,
  },
  bold: {
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default Regulamin;