import { Text, View, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import { pressed_styles } from '../../Themes/buton_pressed.tsx'
import { Colors } from '../../Themes/colors.ts';
const NextVisitCard = ({ service = '', day = '', time = '', company = '' }) => {
  return (
    <LinearGradient
      colors={[Colors.green2, Colors.green1]}
      locations={[0, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.visit_container}>
      <View style={styles.container}>
        <View style={styles.info_container}>
          <Text style={styles.service_type_text}>{service}</Text>
          <View style={styles.detail_container}>
            <Text style={styles.day_text}>{`${day} \u00B7 `}</Text>
            <Text style={styles.time_text}>{`${time} \u00B7 `}</Text>
            <Text style={styles.company_text}>{company}</Text>
          </View>
        </View>
        <Pressable
          style={({ pressed }) => [
            styles.arrow_button,
            pressed && pressed_styles.button_pressed,
          ]}>
          <Feather
            name="chevron-right"
            size={25}
            color="white"
          />
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  visit_container: {
    height: 80,
    width: '100%',
    backgroundColor: 'red',
    borderRadius: 22,
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    paddingHorizontal: 20,
  },

  arrow_button: {
    backgroundColor: '#607A40',
    height: 50,
    width: 50,
    borderRadius: 25,

    alignItems: 'center',
    justifyContent: 'center',
  },

  info_container: {},

  service_type_text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },

  detail_container: {
    flexDirection: 'row',
  },

  day_text: {
    color: '#CADF9C',
    fontSize: 16,
  },

  time_text: {
    color: '#CADF9C',
    fontSize: 16,
  },

  company_text: {
    color: '#CADF9C',
    fontSize: 16,
  },
});

export default NextVisitCard;
