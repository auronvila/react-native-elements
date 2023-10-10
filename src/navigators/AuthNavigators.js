import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../constants';

export default function AuthNavigators() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName={ROUTES.SIGN_IN}>
      <Stack.Screen name={ROUTES.SIGN_IN} component={SigninScreen}/>
      <Stack.Screen name={ROUTES.SIGN_UP} component={SignupScreen}/>
    </Stack.Navigator>
  )
}