import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button, Input} from '@rneui/themed';
import {ROUTES} from '../constants';
import Feather from 'react-native-vector-icons/Feather';

const SigninScreen = (props) => {
  return (
    <View>
      <Text style={{fontSize: 48, marginVertical:30, alignSelf: 'center'}}>SigninScreen</Text>
      <View style={styles.inputContainer}>
      <Input
        disabledInputStyle={{background: '#ddd'}}
        inputContainerStyle={{}}
        label="Username"
        leftIcon={<Feather name="user" size={20}/>}
        placeholder="Enter Username"
      />
      <Input
        disabledInputStyle={{background: '#ddd'}}
        inputContainerStyle={{}}
        label="Password"
        leftIcon={<Feather name="user" size={20}/>}
        placeholder="Enter Password"
      />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          buttonStyle={styles.buttonStyle}
          onPress={() => props.navigation.navigate(ROUTES.TAB_NAVIGATION)}
          title="Sign up"
        />
        <Button
          buttonStyle={styles.buttonStyle}
          onPress={() => props.navigation.navigate(ROUTES.TAB_NAVIGATION)}
          title="Sign in"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  buttonStyle: {
    width: 150,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30,
    backgroundColor: 'rgba(111, 202, 186, 1)',
  },
  inputContainer:{
    padding:13
  }
});

export default SigninScreen;
