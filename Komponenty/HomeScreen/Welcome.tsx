import { Text, View, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { pressed_styles } from '../../Themes/buton_pressed.tsx'

const Welcome = () => {
  const name: string = 'Weronika';
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [pressed && pressed_styles.button_pressed]}>
        <LinearGradient
          colors={['#CADF9C', '#A6CB6A']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.avatar}>
          <Text style={styles.avatarText}>{name.charAt(0)}</Text>
        </LinearGradient>
      </Pressable>

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
    width: 45,
    height: 45,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3A5616',
  },
  greeting: {
    fontSize: 14,
    color: '#A4A4A4',
    fontWeight: '500',
  },
  name: {
    fontSize: 17,
    fontWeight: '700',
  },
});

export default Welcome;
