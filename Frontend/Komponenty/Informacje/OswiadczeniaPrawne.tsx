import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Colors } from '../../Themes/colors';
import { LeagueSpartan_700Bold, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_600SemiBold } from '@expo-google-fonts/league-spartan';
import { useFonts } from 'expo-font';

const OswiadczeniaPrawne = () => {
  return (
    <View style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.paragraph}>
        Poniższe oświadczenia określają zasady dotyczące własności intelektualnej, odpowiedzialności oraz treści udostępnianych w aplikacji <Text style={styles.bold}>Appoint</Text>.
      </Text>

      <View style={styles.section}>
        <Text style={styles.heading}>1. Prawa Autorskie i Własność Intelektualna</Text>
        <Text style={styles.paragraph}>
          Wszelkie prawa do Aplikacji, w tym jej kodu źródłowego, interfejsu graficznego, logotypów, nazwy oraz baz danych, należą do [Pełna nazwa Twojej firmy] (Operatora) i są chronione przepisami prawa autorskokiego oraz praw własności przemysłowej.
        </Text>
        <Text style={styles.paragraph}>
          Kopiowanie, modyfikowanie, inżynieria wsteczna (reverse engineering) lub rozpowszechnianie jakichkolwiek elementów Aplikacji bez pisemnej zgody Operatora jest surowo zabronione.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>2. Treści Generowane przez Użytkowników i Partnerów</Text>
        <Text style={styles.paragraph}>
          Aplikacja umożliwia Partnerom (Salonom) oraz Użytkownikom publikowanie własnych treści, takich jak zdjęcia w portfolio, opisy usług oraz opinie.
        </Text>
        <Text style={styles.paragraph}>
          Operator działa jako dostawca usług hostingu na podstawie art. 14 ustawy o świadczeniu usług drogą elektroniczną (oraz zgodnie z unijnym aktem o usługach cyfrowych - DSA) i <Text style={styles.bold}>nie ponosi odpowiedzialności</Text> za treści wprowadzane przez osoby trzecie, dopóki nie otrzyma urzędowego zawiadomienia lub wiarygodnej wiadomości o ich bezprawnym charakterze.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>3. Zastrzeżenie Medyczne (Disclaimer)</Text>
        <Text style={styles.paragraph}>
          Usługi prezentowane w Aplikacji w kategoriach "Health", "Fizjoterapia" lub "Medycyna Estetyczna" mają charakter informacyjny i nie zastępują profesjonalnej porady lekarskiej. Operator nie weryfikuje na bieżąco uprawnień medycznych Partnerów. W przypadku problemów zdrowotnych, Użytkownik powinien skonsultować się z odpowiednim lekarzem specjalistą przed dokonaniem rezerwacji zabiegu.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>4. Zgłaszanie Naruszeń (Notice and Takedown)</Text>
        <Text style={styles.paragraph}>
          Jeśli uważasz, że jakakolwiek treść w Aplikacji (np. zdjęcie, logo, opis) narusza Twoje prawa autorskie, dobra osobiste lub obowiązujące przepisy prawa, prosimy o niezwłoczne zgłoszenie tego faktu.
        </Text>
        <Text style={styles.paragraph}>
          Zgłoszenia należy kierować na adres e-mail: <Text style={styles.bold}>legal@appoint.pl</Text>. Operator zobowiązuje się do zbadania sprawy i, w przypadku potwierdzenia naruszenia, do niezwłocznego usunięcia lub zablokowania dostępu do bezprawnych treści.
        </Text>
      </View>

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
    padding: 40,
  },
  section: {
    marginBottom: 24,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
    paddingBottom: 6,
  },
  paragraph: {
    fontSize: 15,
    color: '#555555',
    lineHeight: 24,
    marginBottom: 12,
    textAlign: 'justify',
  },
  bold: {
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default OswiadczeniaPrawne;