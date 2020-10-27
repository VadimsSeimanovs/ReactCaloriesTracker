import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements'

export default class Login extends React.Component {
  render(){
    return (
      <View>
          <Text h3>Email address:</Text>
          <Input
            placeholder='Email address'
            errorStyle={{ color: 'red' }}
            errorMessage='Check the email address and try again'
          />

          <Text h3>{'\n'}Password:</Text>
          <Input
            placeholder='Password'
            errorStyle={{ color: 'red' }}
            errorMessage='Check the password and try again'
          />

          <Button title='Login' raised></Button>

          <Button title='Forgot password' type='clear' onPress = {
            () => {this.props.navigation.navigate('ForgotPassword')}
          }/>

          <Button title='Dont have an account? Sign up' type='clear' onPress = {
            () => {this.props.navigation.navigate('NewAccount')}
          }/>
          <StatusBar style="auto" />
      </View>
    );
  }
}