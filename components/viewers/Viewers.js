// Libs
import React from 'react';

// React Native Components
import {View, Text, StyleSheet, Image} from 'react-native';
import {COLORS, FONTS} from '../../constants';

const Viewers = ({viewersList}) => {
  if (viewersList?.length === 0) {
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: COLORS.lightGray2, ...FONTS.body4}}>
        Be the first to try this
      </Text>
    </View>;
  } else if (viewersList?.length <= 4) {
    return (
      <View>
        <View style={styles.profile}>
          {viewersList?.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  height: 50,
                  width: 50,
                  marginLeft: index === 0 ? 0 : -20,
                }}>
                <Image source={item.profilePic} style={styles.profileImage} />
              </View>
            );
          })}
        </View>

        <Text
          style={{
            color: COLORS.lightGray2,
            textAlign: 'right',
            ...FONTS.body4,
            lineHeight: 18,
          }}>
          {viewersList.length} people
        </Text>

        <Text
          style={{
            color: COLORS.lightGray2,
            textAlign: 'right',
            ...FONTS.body4,
            lineHeight: 18,
          }}>
          Already try this
        </Text>
      </View>
    );
  } else {
    return (
      <View style={styles.profile}>
        {viewersList?.map((item, index) => {
          if (index <= 2) {
            return (
              <View
                key={index}
                style={{
                  height: 50,
                  width: 50,
                  marginLeft: index === 0 ? 0 : -20,
                }}>
                <Image source={item.profilePic} style={styles.profileImage} />
              </View>
            );
          }
          if (index === 3) {
            return (
              <View
                key={index}
                style={{
                  height: 50,
                  width: 50,
                  marginLeft: -20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 25,
                  backgroundColor: COLORS.darkGreen,
                }}>
                <Text
                  style={{
                    color: COLORS.white,
                  }}>
                  {viewersList.length - 3}+
                </Text>
              </View>
            );
          }
        })}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});

export default Viewers;
