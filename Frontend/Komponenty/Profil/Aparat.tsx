import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { Fontisto } from '@expo/vector-icons';
import { Colors } from '../../Themes/colors.ts'

export default function Aparat({ navigation }) { // Pamiętaj o przekazaniu navigation w propsach, jeśli stąd nawigujesz
    return (
        <View style={styles.tloaparatu}>
            <Pressable style={styles.aparat} onPress={() => { navigation.navigate('Logowanie') }}>
                <View style={styles.gradientIconContainer}>
                    <MaskedView
                        style={styles.maskedViewStyle}
                        maskElement={
                            <View style={styles.centerWrapper}>
                                <Fontisto name="camera" size={14} color="black" />
                            </View>
                        }>
                        <LinearGradient colors={[Colors.green3, Colors.green1]} locations={[0, 1]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ flex: 1 }}/>
                    </MaskedView>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    tloaparatu: {
        width: '100%',
        aspectRatio: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
    aparat: {
        position: 'absolute',
        bottom: '-5%',
        right: '-9%',
        width: '35%',
        aspectRatio: 1,
        borderRadius: 999,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0,
        borderColor: Colors.green3,
        shadowColor: "black",
        shadowOffset: {width:0, height:4},
        shadowOpacity: 0.25,
        shadowRadius:7,
        elevation:5,
    },
    gradientIconContainer: {
        width: 16,
        height: 16,
    },
    maskedViewStyle: {
        flex: 1,
        flexDirection: 'row',
    },
    centerWrapper: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
