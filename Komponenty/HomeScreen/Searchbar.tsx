import { TextInput, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const Searchbar = () => {
  const [text, searchText] = useState('');
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.search, focused && styles.focus]}
        placeholder="Czego dziś szukasz?"
        onChangeText={searchText}
        value={text}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <Ionicons
        name="search-outline"
        size={20}
        color="#A4A4A4"
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  search: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    shadowColor: '#A4A4A4',
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,

    height: 45,
    width: '100%',

    color: '#A4A4A4',
    fontWeight: '400',

    paddingLeft: 42,

    outlineStyle: 'none',
  },

  focus: {
    borderWidth: 1,
    borderColor: '#BCBCBC',
  },

  icon: {
    position: 'absolute',
    marginLeft: 13,
  },
});

export default Searchbar;
