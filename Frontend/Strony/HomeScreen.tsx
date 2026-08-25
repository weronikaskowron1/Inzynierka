import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Welcome from '../Komponenty/HomeScreen/Welcome.tsx';
import AlertIcon from '../Komponenty/Buttons/AlertIcon.tsx';
import CategoryIcon from '../Komponenty/HomeScreen/CategoryIcon.tsx';
import NextVisitCard from '../Komponenty/HomeScreen/NextVisitCard.tsx';
import Searchbar from '../Komponenty/HomeScreen/Searchbar.tsx';
import ServiceCard from '../Komponenty/HomeScreen/ServiceCard.tsx';
import WszystkieText from '../Komponenty/HomeScreen/WszystkieText.tsx';

import { useNavigation } from '@react-navigation/native';

import { Colors } from '../Themes/colors.ts';
import  { styles as GlobalStyles } from '../Themes/global_styles.tsx';

export default HomeScreen;
function HomeScreen() {
  const navigation = useNavigation();
  const categories_icons = [
    {
      title: 'Fryzjer',
      icon: 'scissors',
      library: 'Feather',
    },
    {
      title: 'Paznokcie',
      icon: 'sparkles-outline',
      library: 'Ionicons',
    },
    {
      title: 'Kosmetyka',
      icon: 'leaf-outline',
      library: 'Ionicons',
    },
    {
      title: 'Makijaż',
      icon: 'paintbrush',
      library: 'Octicons',
    },
  ];
  return (
//     <ScrollView>
      <View style={GlobalStyles.body}>
        <View style={GlobalStyles.container}>
          <View style={styles.header}>
            <Welcome />
            <AlertIcon name="bell"/>
          </View>
          <View style={styles.searcharbar}>
            <Searchbar />
          </View>
          <View style={styles.categories_container}>
            {categories_icons.map((item, index) => (
              <CategoryIcon
                key={index}
                title={item.title}
                icon={item.icon}
                library={item.library}
              />
            ))}
          </View>
          <View style={styles.recommended_container}>
            <Text style={styles.polecane_text}> Polecane salony </Text>
            <WszystkieText />
          </View>

          <View style={styles.service_container}>
            <ServiceCard
              service_name="Studio Glam"
              rating="5.0"
              distance="2 km"
            />
            <ServiceCard
              service_name="Hairlook"
              rating="4.9"
              distance="1.5 km"
            />
          </View>

          <Text style={styles.nastepna_wizyta_text}>NASTĘPNA WIZYTA</Text>
          <View style={styles.next_visits_container}>
          <NextVisitCard
            service="Manicure hybrydowy"
            day="Jutro"
            time="11:00"
            company="Nails&Co."
          />
          </View>
        </View>
      </View>
//     </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  searcharbar: {
    marginTop: 30,
  },

  categories_container: {
    marginTop: 40,
    gap: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  recommended_container: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  polecane_text: {
    fontWeight: '500',
    fontSize: 22,
  },

  service_container: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  nastepna_wizyta_text: {
    marginTop: 20,
    marginBottom: 10,
    color: '#A4A4A4',
    fontWeight: '700',
    fontSize: 15,
  },

  next_visits_container: {
    gap: 10,
  },
});