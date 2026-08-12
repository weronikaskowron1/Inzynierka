import { Text, View, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import { pressed_styles } from '../../Themes/buton_pressed.tsx'

const NextVisitCard = ({ service = '', day = '', time = '', company = '' }) => {
  return (
    <LinearGradient
      colors={['#69A129', '#3A5916']}
      start={{ x: 1, y: -1 }}
      end={{ x: 2, y: 2 }}
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
            size={20}
            color="white"
          />
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  visit_container: {
    height: 65,
    width: '100%',
    backgroundColor: 'red',
    borderRadius: 18,
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
    height: 40,
    width: 40,
    borderRadius: 20,

    alignItems: 'center',
    justifyContent: 'center',
  },

  info_container: {},

  service_type_text: {
    color: 'white',
    fontWeight: '700',
  },

  detail_container: {
    flexDirection: 'row',
  },

  day_text: {
    color: '#CADF9C',
    fontSize: 13,
  },

  time_text: {
    color: '#CADF9C',
    fontSize: 13,
  },

  company_text: {
    color: '#CADF9C',
    fontSize: 13,
  },
});

export default NextVisitCard;
