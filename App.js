// App.js

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SigninScreen from './src/screens/SigninScreen';
import BottomTabNavigator from './src/navigators/BottomTabNavigator';
import {ROUTES} from './src/constants';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signin">
        <Stack.Screen name={ROUTES.SIGN_IN} component={SigninScreen}/>
        <Stack.Screen options={{headerShown: false}} name={ROUTES.TAB_NAVIGATION} component={BottomTabNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
