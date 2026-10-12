import {View, Pressable, Animated} from 'react-native';
import { Colors } from '../../Themes/colors';

import React, { useState, useRef, useEffect } from 'react';


export default function Przelacznik() {
  const [enabled, setEnabled] = useState(false);
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: enabled ? 21 : 0,
      useNativeDriver: true,
      stiffness: 180,
      damping: 18,
      mass: 0.7,
    }).start();
  }, [enabled]);

  return (
    <Pressable  activeOpacity={1} onPress={() => setEnabled(!enabled)} style={{right:'3%', position: 'absolute',marginTop:'2%',width:'14%',height:'50%'}}>
        <View style={{borderRadius: 16, padding: 4, backgroundColor: enabled ? Colors.green2 : Colors.gray,justifyContent: 'center',}}>
            <Animated.View style={{ width: '50%', height: '100%', borderRadius: 12, backgroundColor: Colors.white, transform: [{ translateX }],}}/>
        </View>
    </Pressable>
  );
}