// Libs
import React from 'react';

// React Native Components
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// Constants
import {FONTS, COLORS, SIZES, icons, images, dummyData} from '../../constants';

// Core Components
import {CategoryCard, TrendingCard} from '../../components';

const Home = ({navigation}) => {
  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Text
            style={{color: COLORS.darkGreen, fontWeight: 'bold', ...FONTS.h2}}>
            Hello Youssef,
          </Text>
          <Text style={{marginTop: 3, color: COLORS.gray, ...FONTS.body3}}>
            What you want to cook today?
          </Text>
        </View>
        <TouchableOpacity onPress={() => console.log('Profile')}>
          <Image source={images.profile} style={styles.imageProfile} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderSerchBar = () => {
    return (
      <View style={styles.renderSearchBarContainer}>
        <Image
          source={icons.search}
          style={{width: 20, height: 20, tintColor: COLORS.gray}}
        />
        <TextInput
          style={{
            marginLeft: SIZES.radius,
            ...FONTS.body3,
          }}
          placeholderTextColor={COLORS.gray}
          placeholder="Search Recipes"
        />
      </View>
    );
  };

  const renderSeeRecipeCard = () => {
    return (
      <View style={styles.seeRecipeCardContainer}>
        <View
          style={{
            width: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={images.recipe} style={{width: 80, height: 80}} />
        </View>
        <View style={{flex: 1, paddingVertical: SIZES.radius}}>
          <Text style={{width: '70%', ...FONTS.body4}}>
            You have 12 recipes that you haven't tried yet
          </Text>
          <TouchableOpacity
            style={{marginTop: 10}}
            onPress={() => console.log('see recipes')}>
            <Text
              style={{
                color: COLORS.darkGreen,
                textDecorationLine: 'underline',
                ...FONTS.h4,
              }}>
              See Recipes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderTrendingRecipes = () => {
    return (
      <View style={{marginTop: SIZES.padding}}>
        <Text style={{marginHorizontal: SIZES.padding, ...FONTS.h2}}>
          Trending Recipes
        </Text>
        <FlatList
          keyExtractor={item => item.id}
          data={dummyData.trendingRecipes}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <TrendingCard recipeItem={item} />;
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={dummyData.categories}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={16}
        ListHeaderComponent={
          <View>
            {renderHeader()}
            {renderSerchBar()}
            {renderSeeRecipeCard()}
            {renderTrendingRecipes()}
          </View>
        }
        renderItem={({item}) => {
          return (
            <CategoryCard
              categoryItem={item}
              containerStyle={{
                marginHorizontal: SIZES.padding,
              }}
              onPress={() => navigation.navigate('Recipe', {recipe: item})}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingBottom: 100
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: SIZES.padding,
    alignItems: 'center',
    height: 80,
  },
  headerTitle: {
    flex: 1,
  },
  imageProfile: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  renderSearchBarContainer: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    marginHorizontal: SIZES.padding,
    paddingHorizontal: SIZES.radius,
    borderRadius: 10,
    backgroundColor: COLORS.lightGray,
  },
  seeRecipeCardContainer: {
    flexDirection: 'row',
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding,
    borderRadius: 10,
    backgroundColor: COLORS.lightGreen,
  },
});

export default Home;
