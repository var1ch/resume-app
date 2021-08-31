import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../view/screens';
import { SkillsScreen } from '../view/screens';
import { ContactsScreen } from '../view/screens';
import { Icon } from '../view/components';

const Tab = createBottomTabNavigator();

const RootNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            return (
              <Icon
                iconName={
                  route.name === 'Home'
                    ? 'home'
                    : route.name === 'Skills'
                    ? 'skills'
                    : 'person'
                }
                size={28}
                color={color}
              />
            );
          },
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'blue',
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Skills" component={SkillsScreen} />
        <Tab.Screen name="Contacts" component={ContactsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigationContainer;
