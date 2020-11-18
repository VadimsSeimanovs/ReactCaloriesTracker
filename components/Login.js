import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements'
import UserProvider from './FirebaseTest'

export default class Login extends React.Component {

  state = {
    email: '',
    password: ''
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  checkUserInput = () => {
    if(this.state.email != ''){
      if(this.state.password != '')
      UserProvider.init();
      UserProvider.signInUser(this.state.email, this.state.password);
        console.log(UserProvider.getUserExistance());
        if(UserProvider.getUserExistance() == true){
            this.props.navigation.navigate('Dashboard');
        }
    }else{
     alert('Enter email address and password');
    }
  }

  render(){
    return (
      <View>
          <Text h3>Email Address:</Text>
          <Input
            placeholder='Email Address'
            errorStyle={{ color: 'red' }}
            // errorMessage='Check the email address and try again'
            onChangeText={val=> this.onChangeText('email', val)}
          />

          <Text h3>{'\n'}Password:</Text>
          <Input
            placeholder='Password'
            errorStyle={{ color: 'red' }}
            // errorMessage='Check the password and try again'
            onChangeText={val=> this.onChangeText('password', val)}
          />

          <Button title='Login' raised onPress = { () => this.checkUserInput()}></Button>

          <Button title='Forgot password' type='clear' onPress = {
            () => {this.props.navigation.navigate('ForgotPassword')}
          }/>

          <Button title='Dont have an account? Sign up' type='clear' raised onPress = {
            () => {this.props.navigation.navigate('NewAccount')}
          }/>
          <StatusBar style="auto" />
      </View>
  );
}
}
