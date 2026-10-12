import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

const NajczestszeProblemy = () => {
  return (
    <View
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.leadText}>
        Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące
        korzystania z naszej aplikacji.
      </Text>

      <View style={styles.section}>
        <Text style={styles.heading}>
          Jak zarezerwować wizytę?
        </Text>

        <Text style={styles.paragraph}>
          Wybierz interesującą Cię usługę, znajdź odpowiedni salon
          lub specjalistę, wybierz dostępny termin, a następnie
          potwierdź rezerwację. Po jej dokonaniu otrzymasz
          potwierdzenie.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>
          Czy mogę odwołać wizytę?
        </Text>

        <Text style={styles.paragraph}>
          Tak. Swoje rezerwacje możesz sprawdzić w sekcji
          dotyczącej wizyt. Wybierz odpowiednią rezerwację i
          postępuj zgodnie z instrukcjami dotyczącymi jej
          anulowania.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>
          Czy mogę zmienić termin wizyty?
        </Text>

        <Text style={styles.paragraph}>
          Jeśli dana rezerwacja pozwala na zmianę terminu, możesz
          wybrać inną dostępną datę lub godzinę. W przypadku braku
          takiej możliwości skontaktuj się bezpośrednio z salonem.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>
          Gdzie znajdę moje rezerwacje?
        </Text>

        <Text style={styles.paragraph}>
          Wszystkie dokonane rezerwacje znajdziesz w swoim koncie,
          w sekcji dotyczącej wizyt. Znajdziesz tam informacje o
          terminie, godzinie, usłudze oraz miejscu wizyty.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>
          Czy mogę wystawić opinię?
        </Text>

        <Text style={styles.paragraph}>
          Tak. Po odbyciu wizyty możesz otrzymać możliwość
          wystawienia opinii dotyczącej usługi oraz salonu.
          Twoja opinia pomaga innym użytkownikom w wyborze
          odpowiedniego specjalisty.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>
          Co zrobić, jeśli nie mogę dokonać rezerwacji?
        </Text>

        <Text style={styles.paragraph}>
          Sprawdź swoje połączenie z internetem oraz dostępne
          terminy. Jeśli problem nadal występuje, spróbuj ponownie
          później lub skontaktuj się z naszym zespołem obsługi.
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

export default NajczestszeProblemy;
