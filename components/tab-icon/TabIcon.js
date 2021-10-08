// Libs
import React from 'react';

// React Native Components
import {View, Image, StyleSheet} from 'react-native';

// Constants
import {COLORS} from '../../constants';

const TabIcon = ({focused, icon}) => {
  return (
    <View style={styles.container}>
      <Image
        source={icon}
        style={[
          styles.icon,
          {tintColor: focused ? COLORS.darkGreen : COLORS.lightLime},
        ]}
      />
      {focused && <View style={styles.borderBottom} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 50,
  },
  icon: {
    width: 25,
    height: 25,
  },
  borderBottom: {
    position: 'absolute',
    width: '100%',
    left: 0,
    right: 0,
    height: 5,
    bottom: 0,
    backgroundColor: COLORS.darkGreen,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});

export default TabIcon;
