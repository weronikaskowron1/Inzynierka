import { Text, View, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { pressed_styles } from '../../Themes/buton_pressed.tsx'

import { Colors } from '../../Themes/colors.ts';

import AvatarIcon from '../Buttons/AvatarIcon.tsx';

const Welcome = () => {
  const name: string = 'Weronika';
  return (
    <View style={styles.container}>
      <AvatarIcon />

      <View>
        <Text style={styles.greeting}>Cześć,</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#3A5616',
  },
  greeting: {
    fontSize: 16,
    color: Colors.lightgrayText,
    fontWeight: '500',
  },
  name: {
    fontSize: 19,
    fontWeight: '700',
  },
});

export default Welcome;
