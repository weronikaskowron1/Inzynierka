import { Text, View, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SimpleLineIcons, FontAwesome } from '@expo/vector-icons';

import { pressed_styles } from '../../Themes/buton_pressed.tsx'


const ServiceCard = ({ service_name, rating, distance }) => {
  let image_uploaded = false;
  return (
    <Pressable
      style={({ pressed }) => [
        styles.service_container,
        pressed && pressed_styles.button_pressed,
      ]}>
      {!image_uploaded && (
        <LinearGradient
          colors={['#EDF3DF', '#CADF9C']}
          start={{ x: 1, y: -1 }}
          end={{ x: 2, y: 2 }}
          style={styles.image_container}>
          <SimpleLineIcons name="picture" size={25} color="#A4A4A4" />
        </LinearGradient>
      )}

      {image_uploaded && <View style={styles.image_container} />}

      <View style={styles.service_info}>
        <Text style={styles.service_name}>{service_name}</Text>
        <View style={styles.info_container}>
          <FontAwesome name="star" size={12} color="#E9BB5A" />
          <Text style={styles.rating}>{rating}</Text>
          <Text style={styles.distance}>{`\u00B7 ${distance}`}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  service_container: {
    height: 135,
    width: 135,

    borderWidth: 0,
    borderRadius: 10,
    borderColor: 'white',
    shadowColor: '#A4A4A4',
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  image_container: {
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

    backgroundColor: 'red', //tymczasowe
  },

  service_info: {
    padding: 7,
    paddingLeft: 14,
    justifyContent: 'center',
  },

  service_name: {
    fontWeight: '700',
    color: '#4B4B4B',
  },

  info_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },

  rating: {
    fontWeight: '500',
    color: '#4B4B4B',
  },

  distance: {
    color: '#A4A4A4',
    fontWeight: '400',
  },
});
export default ServiceCard;
