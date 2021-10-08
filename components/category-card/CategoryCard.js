// Libs
import React from 'react';

// React Native Components
import {Text, TouchableOpacity, Image, StyleSheet, View} from 'react-native';

// Constants
import {FONTS, SIZES, COLORS} from '../../constants';

const CategoryCard = ({containerStyle, categoryItem, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Image
        source={categoryItem.image}
        style={styles.imageStyle}
        resizeMode="cover"
      />
      <View style={styles.detailsStyle}>
        <Text style={styles.name}>{categoryItem.name}</Text>
        <Text style={styles.serving}>
          {categoryItem.duration} | {categoryItem.serving} Serving
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.gray2,
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: SIZES.radius,
  },
  detailsStyle: {
    width: '65%',
    paddingHorizontal: 20,
  },
  name: {
    flex: 1,
    color: COLORS.black,
    fontWeight: 'bold',
    ...FONTS.h2,
  },
  serving: {
    color: COLORS.gray,
    ...FONTS.body4,
  },
});

export default CategoryCard;
