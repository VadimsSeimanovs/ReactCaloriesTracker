import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Input, Button, Text } from 'react-native-elements'
import UserProvider from './Firebase'
import styles  from './styles/button'
import User from './User';

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
      if(UserProvider.checkUserLogedIn() == false){
        alert("Wrong Credentials!!")
      }else{
        this.props.navigation.navigate('Dashboard');
      }
    } else {
     alert('Enter email address and password');
    }
  }

  render(){
    const { navigation } = this.props
    return (
      <SafeAreaView>
      <View style={styles.container}>
          <Text style={styles.textInputLabel} h3>Email Address:</Text>
          <Input autoCorrect={true} autoCapitalize="none" style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Email Address'
            errorStyle={{ color: 'red' }}
            // errorMessage='Check the email address and try again'
            onChangeText={val=> this.onChangeText('email', val)}
          />

          <Text style={styles.textInputLabel} h3>{'\n'}Password:</Text>
          <Input secureTextEntry={true} autoCorrect={false} autoCapitalize="none" style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Password'
            errorStyle={{ color: 'red' }}
            // errorMessage='Check the password and try again'
            onChangeText={val=> this.onChangeText('password', val)}
          />

          <Button title='Login' raised 
          onPress = {() => this.checkUserInput()}
          //onPress = { 
            //() => navigation.navigate('Dashboard')} 
            buttonStyle={{backgroundColor: '#0F2080'}}
          />

          <View style={styles.spaceBetweenButtons}></View>

          <Button title='Forgot password' raised onPress = {
            () => navigation.navigate('ForgotPassword')}
            buttonStyle={{backgroundColor:'#0F2080'}}
          />

          <View style={{marginTop:20}}></View>

          <Button title='Dont have an account? Sign up' raised onPress = {
            () => navigation.navigate('NewAccount')}
            buttonStyle={{backgroundColor:'#0F2080'}}
          />
          <StatusBar style="auto" />
      </View>
      </SafeAreaView>
  );
}
}
