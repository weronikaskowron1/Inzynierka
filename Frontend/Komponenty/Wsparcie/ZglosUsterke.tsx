import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

const ZglosUsterke = () => {
  return (
    <View
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.leadText}>
        Napotkałeś problem podczas korzystania z aplikacji? Daj nam
        znać. Każde zgłoszenie pomaga nam poprawiać działanie
        aplikacji i zapewnić lepsze doświadczenia wszystkim
        użytkownikom.
      </Text>

      <View style={styles.section}>
        <Text style={styles.heading}>Jak zgłosić problem?</Text>

        <Text style={styles.paragraph}>
          Opisz dokładnie, co się wydarzyło. Im więcej szczegółów
          podasz, tym łatwiej będzie nam znaleźć przyczynę problemu
          i szybko go naprawić.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Co warto zawrzeć w zgłoszeniu?</Text>

        <Text style={styles.paragraph}>
          • Opis problemu{'\n'}
          • Informację, co robiłeś przed wystąpieniem problemu{'\n'}
          • Datę i godzinę wystąpienia problemu{'\n'}
          • Nazwę usługi lub salonu, którego dotyczy problem{'\n'}
          • Zrzut ekranu, jeśli pokazuje się komunikat błędu
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Problemy z działaniem aplikacji</Text>

        <Text style={styles.paragraph}>
          Jeśli aplikacja działa nieprawidłowo, nie możesz wykonać
          rezerwacji, występują problemy z płatnością lub widzisz
          nieprawidłowe informacje, koniecznie poinformuj nas o tym.
        </Text>
      </View>

      <View style={styles.contactSection}>
        <Text style={styles.heading}>Kontakt</Text>

        <Text style={styles.paragraph}>
          Zgłoszenie możesz przesłać na nasz adres e-mail.
          W wiadomości dokładnie opisz problem i, jeśli to możliwe,
          dołącz zrzut ekranu.
        </Text>

        <Text style={styles.contactDetail}>
          📧 E-mail:{' '}
          <Text style={styles.bold}>
            kontakt@appoint.pl
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:'8%',
    paddingLeft:50
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
  },

  contactSection: {
    marginTop: 10,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },

  contactDetail: {
    fontSize: 15,
    color: '#333333',
    marginTop: 12,
  },

  bold: {
    fontWeight: 'bold',
    color: '#000000',
  },

  bottomSpace: {
    height: 40,
  },
});

export default ZglosUsterke;
