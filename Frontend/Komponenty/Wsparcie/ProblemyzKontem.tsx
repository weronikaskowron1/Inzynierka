import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

const ProblemyzKontem = () => {
  return (
    <View
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.leadText}>
        Masz problem z logowaniem, zmianą danych lub dostępem do
        swojego konta? Poniżej znajdziesz najczęstsze rozwiązania.
      </Text>

      <View style={styles.section}>
        <Text style={styles.heading}>
          Nie mogę się zalogować
        </Text>

        <Text style={styles.paragraph}>
          Sprawdź, czy wpisujesz prawidłowy adres e-mail oraz hasło.
          Upewnij się również, że masz aktywne połączenie z
          internetem. Jeśli nadal nie możesz się zalogować, skorzystaj
          z opcji resetowania hasła.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>
          Nie pamiętam hasła
        </Text>

        <Text style={styles.paragraph}>
          Na ekranie logowania wybierz opcję „Nie pamiętam hasła” i
          postępuj zgodnie z instrukcjami. Na podany adres e-mail
          otrzymasz wiadomość umożliwiającą ustawienie nowego hasła.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>
          Chcę zmienić swoje dane
        </Text>

        <Text style={styles.paragraph}>
          Dane swojego konta możesz zmienić w ustawieniach profilu.
          Możesz tam między innymi zaktualizować swoje imię, numer
          telefonu lub inne dostępne informacje.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>
          Nie otrzymuję wiadomości e-mail
        </Text>

        <Text style={styles.paragraph}>
          Sprawdź folder spam lub inne foldery poczty. Upewnij się
          również, że adres e-mail przypisany do konta jest poprawny.
          Jeśli wiadomość nadal nie dociera, spróbuj ponownie po
          kilku minutach.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>
          Chcę usunąć swoje konto
        </Text>

        <Text style={styles.paragraph}>
          Jeśli chcesz usunąć swoje konto, wejdź w ustawienia profilu i kliknij
          przycisk usuń konto. Przed usunięciem konta upewnij się, że nie
          potrzebujesz już zapisanych informacji dotyczących swoich
          rezerwacji.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>
          Podejrzewam nieautoryzowany dostęp
        </Text>

        <Text style={styles.paragraph}>
          Jeśli podejrzewasz, że ktoś uzyskał dostęp do Twojego
          konta, jak najszybciej zmień hasło. Jeżeli zauważyłeś
          nietypową aktywność lub zmiany, których nie dokonywałeś,
          skontaktuj się z nami.
        </Text>
      </View>
       {/*
      <View style={styles.contactSection}>
        <Text style={styles.heading}>
          Nadal potrzebujesz pomocy?
        </Text>

        <Text style={styles.paragraph}>
          Jeśli problem z Twoim kontem nadal występuje, skontaktuj
          się z naszym zespołem. Postaramy się pomóc tak szybko, jak
          to możliwe.
        </Text>

        <Text style={styles.contactDetail}>
          📧 E-mail:{' '}
          <Text style={styles.bold}>
            kontakt@twojaaplikacja.pl
          </Text>
        </Text>

        <Text style={styles.contactDetail}>
          📞 Telefon:{' '}
          <Text style={styles.bold}>
            +48 000 000 000
          </Text>
        </Text>
      </View>
      */}
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
    marginTop: 8,
  },

  bold: {
    fontWeight: 'bold',
    color: '#000000',
  },

  bottomSpace: {
    height: 40,
  },
});

export default ProblemyzKontem;
