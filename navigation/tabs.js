// Libs
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import {Home, Search, Settings, Bookmark} from '../screens';

// Constants
import {COLORS, icons} from '../constants';

// Core Components
import {TabIcon} from '../components';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 0,
            backgroundColor: COLORS.white,
            borderTopColor: 'transparent',
            height: 100,
          },
          null,
        ],
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={icons.home} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={icons.search} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={icons.bookmark} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={icons.settings} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
