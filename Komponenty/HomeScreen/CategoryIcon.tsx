import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Feather, Ionicons, Octicons } from '@expo/vector-icons';

import { pressed_styles } from '../../Themes/buton_pressed.tsx'
const iconLibraries = {
  Feather,
  Ionicons,
  Octicons,
};

const CategoryIcon = ({
  icon = 'leaf-outline',
  title = '',
  library = 'Ionicons',
}) => {
  const Icon = iconLibraries[library];

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.category,
          pressed && pressed_styles.button_pressed,
        ]}>
        <Icon name={icon} size={25} color="#5C8A24" style={styles.icon} />
      </Pressable>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  category: {
    height: 60,
    width: 60,
    backgroundColor: '#EDF3DF',

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 17,
  },

  text: {
    marginTop: 5,
    color: '#4B4B4B',
    fontWeight: 500,
    fontSize: 13,
  },
});

export default CategoryIcon;
