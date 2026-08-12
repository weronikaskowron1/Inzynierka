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
          <SimpleLineIcons name="picture" size={30} color="#A4A4A4" />
        </LinearGradient>
      )}

      {image_uploaded && <View style={styles.image_container} />}

      <View style={styles.service_info}>
        <Text style={styles.service_name}>{service_name}</Text>
        <View style={styles.info_container}>
          <FontAwesome name="star" size={15} color="#E9BB5A" />
          <Text style={styles.rating}>{rating}</Text>
          <Text style={styles.distance}>{`\u00B7 ${distance}`}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  service_container: {
    height: 160,
    width: 160,

    borderWidth: 0,
    borderRadius: 15,
    borderColor: 'white',
    boxShadow: '3px 10px 5px rgba(164, 164, 164, 0.2)',
  },

  image_container: {
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',

    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,

    backgroundColor: 'red', //tymczasowe
  },

  service_info: {
    padding: 7,
    paddingLeft: 14,
    justifyContent: 'center',
  },

  service_name: {
    fontWeight: '700',
    fontSize: 17,
    color: '#4B4B4B',
  },

  info_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },

  rating: {
    fontWeight: '500',
    fontSize: 15,
    color: '#4B4B4B',
  },

  distance: {
    color: '#A4A4A4',
    fontWeight: '400',
    fontSize: 15,
  },
});
export default ServiceCard;
