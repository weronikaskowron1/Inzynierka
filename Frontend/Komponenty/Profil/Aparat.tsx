import { StyleSheet, View, Pressable } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Colors } from '../../Themes/colors';

export default function Aparat()
{
    return (
        <View style={styles.tloaparatu}>
        <Pressable style={styles.aparat} onPress={() => {navigation.navigate('Logowanie')}} >
            <SimpleLineIcons name="camera" size={16} color={Colors.green2}/>
          </Pressable>
        </View>
        );
    }


const styles = StyleSheet.create({
    tloaparatu:
    {
        width: '100%',
        aspectRatio: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
      },
    aparat:
    {
         position: 'absolute',
         bottom: '-5%',
         right: '-9%',
         width: '35%',
         aspectRatio: 1,
         borderRadius: 999,
         backgroundColor: Colors.white,
         alignItems: 'center',
         justifyContent: 'center',
         borderWidth:1,
         borderColor:Colors.green2
       },
})