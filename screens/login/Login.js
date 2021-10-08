// Libs
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

// React Native Components
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

// Constants
import {images, COLORS, SIZES, FONTS} from '../../constants';

// Common Elements
import {Button} from '../../common';

const Login = ({navigation}) => {
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <ImageBackground
          source={images.loginBackground}
          style={styles.backgroundImageContainer}
          resizeMode="cover">
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={[COLORS.transparent, COLORS.black]}
            style={styles.linearGradientStyle}>
            <View style={styles.headerTitleContainer}>
              <Text style={styles.headerTitle}>Cooking a</Text>
              <Text style={styles.headerTitle}>Delicious Food</Text>
              <Text style={styles.headerTitle}>Easily</Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  };

  const renderDetails = () => {
    return (
      <View style={styles.renderDeatilsContainer}>
        {/* Description */}
        <Text style={styles.descriptionStyle}>
          Discover more than 1200 recipes in your hands and cooking it as
          easily!
        </Text>
        {/* Button */}
        <Button
          onPress={() => navigation.navigate('Home')}
          containerStyle={styles.loginButtonStyle}
          titleStyle={styles.buttonTitleStyle}
          title="Login"
        />
        <Button
          onPress={() => navigation.navigate('Home')}
          containerStyle={styles.signupButtonStyle}
          titleStyle={styles.buttonTitleStyle}
          title="Sign Up"
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      {renderHeader()}

      {/* Details */}
      {renderDetails()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  headerContainer: {
    height: SIZES.height > 700 ? '50%' : '60%',
  },
  backgroundImageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  linearGradientStyle: {
    height: 200,
    paddingHorizontal: SIZES.padding,
  },
  headerTitleContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  headerTitle: {
    color: COLORS.white,
    ...FONTS.largeTitle,
    lineHeight: 45,
    fontWeight: 'bold',
  },
  renderDeatilsContainer: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
  },
  descriptionStyle: {
    marginTop: SIZES.radius,
    width: '70%',
    color: COLORS.gray,
    ...FONTS.body3,
  },
  loginButtonStyle: {
    padding: SIZES.padding,
    marginTop: SIZES.padding,
    backgroundColor: COLORS.darkGreen,
    borderRadius: SIZES.padding,
  },
  signupButtonStyle: {
    padding: SIZES.padding,
    marginTop: SIZES.padding,
    borderRadius: SIZES.padding,
    borderWidth: 1,
    borderColor: COLORS.darkGreen,
  },
  buttonTitleStyle: {
    color: COLORS.white,
    ...FONTS.body3,
    textAlign: 'center',
  },
});

export default Login;
