import { Text, View, StyleSheet } from "react-native";
import { Colors } from "../../Themes/colors.ts";

import {useState} from 'react';
import WheelPicker from '@quidone/react-native-wheel-picker';

const HourWheelPicker = () => {
    const data = [...Array(100).keys()].map((index) => ({
      value: index,
      label: index.toString(),
    }))

  const [value, setValue] = useState(0);
    return (
      <WheelPicker
        data={data}
        value={value}
        onValueChanged={({item: {value}}) => setValue(value)}
        enableScrollByTapOnItem={true}
      />
    );
};

const styles = StyleSheet.create({

});
export default HourWheelPicker;
