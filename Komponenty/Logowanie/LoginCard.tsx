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
        <Text style={styles.service_type_text}>{service}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  visit_container: {
    height: 60,
    width: '100%',
    //backgroundColor: 'red',
    borderRadius: 22,
  },

  container: {
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    //padding: 12,
    paddingHorizontal: 20,
  },

  service_type_text: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
  },

});

export default NextVisitCard;
