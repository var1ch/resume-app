import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../view/screens';
import { SkillsScreen } from '../view/screens';
import { ContactsScreen } from '../view/screens';

const Tab = createBottomTabNavigator();

const RootNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'black',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Skills" component={SkillsScreen} />
        <Tab.Screen name="Contacts" component={ContactsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigationContainer;
