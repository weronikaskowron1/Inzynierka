import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { pressed_styles } from '../../Themes/buton_pressed.tsx'

const AlertIcon = () => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && pressed_styles.button_pressed,
      ]}>
      <Feather name="bell" size={20} color="#5C8A24" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDF3DF',
  },
});
export default AlertIcon;
