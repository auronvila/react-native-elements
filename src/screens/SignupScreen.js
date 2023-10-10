import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const SignupScreen = (props) => {
  return (
    <>
      <Text style={{fontSize: 48}}>SignupScreen</Text>
      <Button onPress={() => props.navigation.navigate('Signin')} title={'go to signin'}/>
      <Button onPress={() => props.navigation.navigate('mainFlow')} title={'go to mian flow'}/>
    </>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
