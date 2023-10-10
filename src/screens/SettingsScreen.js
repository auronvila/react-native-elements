import {Text, View} from 'react-native';
import {Button} from '@rneui/themed';
import {COLORS, ROUTES} from '../constants';
import {LinearGradient} from 'expo-linear-gradient';
import React from 'react';

export default function SettingsScreen(props) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
      <Button
        raised
        onPress={() => props.navigation.navigate(ROUTES.SIGN_IN)}
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: [COLORS.primary, COLORS.bgColor],
          start: {x: 0, y: 0.5},
          end: {x: 1, y: 0.5},
        }}
      >Press to log Out
      </Button>
    </View>
  );
}