import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements'
import UserProvider from './Firebase'
import styles  from './styles/button'

export default class Login extends React.Component {

  state = {
    email: '',
    password: ''
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  checkUserInput = () => {
    if (this.state.email != '') {
      if(this.state.password != '')
      UserProvider.init();
      UserProvider.signInUser(this.state.email, this.state.password);
        console.log(UserProvider.getUserExistance());
        if(UserProvider.getUserExistance() == true){
            this.props.navigation.navigate('BarcodeScanner');
            //Here fill the user class with the user details, pass this information to the dashboard
        }
    } else {
     alert('Enter email address and password');
    }
  }

  render(){
    return (
      <View style={styles.container}>
          <Text style={styles.textInputLabel} h3>Email Address:</Text>
          <Input style={styles.textInput}
            placeholder='Email Address'
            errorStyle={{ color: 'red' }}
            // errorMessage='Check the email address and try again'
            onChangeText={val=> this.onChangeText('email', val)}
          />

          <Text style={styles.textInputLabel} h3>{'\n'}Password:</Text>
          <Input style={styles.textInput}
            placeholder='Password'
            errorStyle={{ color: 'red' }}
            // errorMessage='Check the password and try again'
            onChangeText={val=> this.onChangeText('password', val)}
          />

          <Button title='Login' raised onPress = { 
            () => this.props.navigation.navigate('BarcodeScanner')} 
            buttonStyle={{backgroundColor: '#0F2080'}}
          />

          <Button title='Forgot password' type='clear' onPress = {
            () => {this.props.navigation.navigate('ForgotPassword')}
          } />

          <Button title='Dont have an account? Sign up' type='clear' raised onPress = {
            () => {this.props.navigation.navigate('NewAccount')}
          } />
          <StatusBar style="auto" />
      </View>
  );
}
}
