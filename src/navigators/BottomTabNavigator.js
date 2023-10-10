import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, ROUTES} from '../constants';
import {HomeScreen} from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default function BottomTabNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen options={{headerShown: false}} name={ROUTES.HOME} component={HomeScreen}/>
      <Tab.Screen options={{headerShown: false}} name={ROUTES.SETTINGS} component={SettingsScreen}/>
    </Tab.Navigator>
  );
}


