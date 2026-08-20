import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@react-navigation/elements';
import MonthCalendar from '../Komponenty/Rezerwacje/MonthCalendar.tsx';
import WeekCalendar from '../Komponenty/Rezerwacje/WeekCalendar.tsx';

import { useNavigation } from '@react-navigation/native';

export default Rezerwacje;
function Rezerwacje() {
  const navigation = useNavigation();
  return (
      <View style={styles.body}>
        <View style={styles.container}>
          <WeekCalendar />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FDFDF9',
  },

  container: {
    margin: 30,
    marginTop: 170
  },


});