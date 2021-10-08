// Libs
import React from 'react';

// React Native Components
import {TouchableOpacity, Text} from 'react-native';

const Button = ({title, onPress, containerStyle, titleStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{...containerStyle}}>
      <Text style={{...titleStyle}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
