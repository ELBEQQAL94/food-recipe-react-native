// Libs
import React, {useState, useEffect, useRef} from 'react';

// React Native Components
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';

// Constants
import {COLORS, FONTS, icons, SIZES} from '../../constants';

// Core components
import {Viewers} from '../../components';

const HEADER_HEIGHT = 350;

const Recipe = ({navigation, route}) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    let {recipe} = route.params;
    setSelectedRecipe(recipe);
  }, []);

  const RecipeCreatorCardDetails = ({selectedRecipe}) => {
    return (
      <View style={styles.recipeCreatorDetailsContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={selectedRecipe?.author?.profilePic}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.label}>
          <Text style={{color: COLORS.lightGray2, ...FONTS.body4}}>
            Recipe by:
          </Text>
          <Text style={{color: COLORS.white, ...FONTS.h3}}>
            {selectedRecipe?.author?.name}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('View Profile')}>
          <Image source={icons.rightArrow} style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>
    );
  };

  const RecipeCreatorCardInfo = ({selectedRecipe}) => {
    return (
      <View style={styles.recipeCreatorInfoContainer}>
        <RecipeCreatorCardDetails selectedRecipe={selectedRecipe} />
      </View>
    );
  };

  const renderRecipeCardHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Animated.Image
          source={selectedRecipe?.image}
          resizeMode="contain"
          style={[
            styles.imageHeader,
            {
              transform: [
                {
                  translateY: scrollY.interpolate({
                    inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                    outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
                  }),
                },
                {
                  scale: scrollY.interpolate({
                    inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                    outputRange: [2, 1, 0.75],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
          ]}
        />
        <Animated.View
          style={[
            styles.headerCard,
            {
              transform: [
                {
                  translateY: scrollY.interpolate({
                    inputRange: [0, 170, 250],
                    outputRange: [0, 0, 200],
                  }),
                },
              ],
            },
          ]}>
          <RecipeCreatorCardInfo selectedRecipe={selectedRecipe} />
        </Animated.View>
      </View>
    );
  };

  const renderHeaderBar = () => {
    return (
      <View style={styles.headerBarContainer}>
        <Animated.View
          style={[
            styles.overlay,
            {
              opacity: scrollY.interpolate({
                inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 70],
                outputRange: [0, 1],
              }),
            },
          ]}
        />
        <Animated.View
          style={[
            styles.headerBarTitle,
            {
              opacity: scrollY.interpolate({
                inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
                outputRange: [0, 1],
              }),
              transform: [
                {
                  translateY: scrollY.interpolate({
                    inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
                    outputRange: [50, 0],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
          ]}>
          <Text style={{color: COLORS.lightGray2, ...FONTS.body4}}>
            Recipe by:
          </Text>
          <Text style={{color: COLORS.white, ...FONTS.h3}}>
            {selectedRecipe?.author?.name}
          </Text>
        </Animated.View>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => navigation.goBack()}>
          <Image source={icons.back} style={styles.backIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookmark}>
          <Image
            source={
              selectedRecipe?.isBookmark ? icons.bookmarkFilled : icons.bookmark
            }
            style={styles.bookmarkIcon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderRecipeInfo = () => {
    return (
      <View style={styles.recipeInfoContainer}>
        <View style={styles.recipeInfo}>
          <Text style={{...FONTS.h2}}>{selectedRecipe?.name}</Text>
          <Text
            style={{marginTop: 5, color: COLORS.lightGray2, ...FONTS.body4}}>
            {selectedRecipe?.duration} |{selectedRecipe?.serving} Serving
          </Text>
        </View>
        <View style={styles.recipeInfoViewers}>
          <Viewers viewersList={selectedRecipe?.viewers} />
        </View>
      </View>
    );
  };

  const renderIngredientHeader = () => {
    return (
      <View style={styles.ingredientHeaderContainer}>
        <Text style={{flex: 1, ...FONTS.h3}}>Ingredients</Text>
        <Text style={{color: COLORS.lightGray2, ...FONTS.body4}}>
          {selectedRecipe?.ingredients?.length} items
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={selectedRecipe?.ingredients}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {renderRecipeCardHeader()}
            {renderRecipeInfo()}
            {renderIngredientHeader()}
          </View>
        }
        renderItem={({item}) => {
          return (
            <View>
              <View style={styles.itemContainer}>
                <View style={styles.iconContainer}>
                  <Image source={item.icon} style={{width: 40, height: 40}} />
                </View>
                <View style={styles.descriptionContainer}>
                  <Text style={{...FONTS.body3}}>{item.description}</Text>
                </View>
                <View style={styles.quantityContainer}>
                  <Text style={{...FONTS.body3}}>{item.quantity}</Text>
                </View>
              </View>
            </View>
          );
        }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        ListFooterComponent={<View style={{marginBottom: 100}} />}
      />
      {renderHeaderBar()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    marginVertical: 5,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    borderRadius: 5,
    backgroundColor: COLORS.lightGray,
  },
  descriptionContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  quantityContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    overflow: 'hidden',
  },
  imageHeader: {
    height: HEADER_HEIGHT,
    width: '200%',
  },
  headerCard: {
    position: 'absolute',
    bottom: 10,
    left: 30,
    right: 30,
    height: 80,
  },
  recipeCreatorInfoContainer: {
    flex: 1,
    backgroundColor: COLORS.transparentGray,
    borderRadius: SIZES.radius,
  },
  recipeCreatorDetailsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileContainer: {
    width: 40,
    height: '100%',
    marginLeft: 20,
    justifyContent: 'center',
  },
  label: {
    flex: 1,
    marginHorizontal: 20,
  },
  button: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.lightGreen1,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  arrowIcon: {
    width: 15,
    height: 15,
    tintColor: COLORS.white,
  },
  headerBarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 90,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding,
    paddingBottom: 10,
  },
  buttonBack: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 35,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    backgroundColor: COLORS.transparentBlack5,
  },
  backIcon: {
    width: 15,
    height: 15,
    tintColor: COLORS.lightGray,
  },
  bookmark: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 35,
  },
  bookmarkIcon: {
    width: 30,
    height: 30,
    tintColor: COLORS.darkGreen,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: COLORS.black,
  },
  headerBarTitle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  recipeInfoContainer: {
    flexDirection: 'row',
    height: 130,
    width: SIZES.width,
    paddingHorizontal: 30,
    paddingVertical: 20,
    alignItems: 'center',
  },
  recipeInfo: {
    flex: 1.5,
    justifyContent: 'center',
  },
  recipeInfoViewers: {
    flex: 1,
    justifyContent: 'center',
  },
  ingredientHeaderContainer: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    marginTop: SIZES.radius,
    marginBottom: SIZES.padding,
  },
});

export default Recipe;
