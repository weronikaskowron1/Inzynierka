import { Text, View, StyleSheet, Pressable } from 'react-native';
import { pressed_styles } from '../../Themes/buton_pressed.tsx'

const WszystkieText = () => {
  return (
    <Pressable style={({ pressed }) => [pressed && pressed_styles.button_pressed]}>
      <Text style={styles.text}> Wszystkie </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#84BB31',
    fontWeight: '700',
    fontSize: 14,
  },
});

export default WszystkieText;
