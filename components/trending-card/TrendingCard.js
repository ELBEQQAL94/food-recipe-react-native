// Libs
import React from 'react';

// React Native Components
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

// Constants
import {COLORS, FONTS, SIZES} from '../../constants';

const TrendingCard = ({onPress, recipeItem, containerStyle}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <Image
        source={recipeItem.image}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.category}>
        <Text style={{color: COLORS.white, ...FONTS.h4}}>
          {recipeItem.category}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: 250,
    marginTop: SIZES.radius,
    marginRight: 20,
    borderRadius: SIZES.radius,
  },
  image: {
    width: 250,
    height: 350,
    borderRadius: SIZES.radius,
  },
  category: {
    position: 'absolute',
    top: 20,
    left: 15,
    paddingHorizontal: SIZES.padding,
    paddingVertical: 5,
    backgroundColor: COLORS.transparentGray,
    borderRadius: SIZES.radius,
  },
});

export default TrendingCard;
