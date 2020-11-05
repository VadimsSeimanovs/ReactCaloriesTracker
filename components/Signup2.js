import React from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'

export default class Signup2 extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  checkUserInput = () => {
    this.props.navigation.navigate('Dashboard')
  } 

  registerUser = () => {

  }
  
  render(){
      return (
          <View>
            <Text h3>Name:</Text>
            <Input
              placeholder='Name'
              errorStyle={{ color: 'red' }}
              errorMessage='Check the name and try again'
              onChangeText={val => this.onChangeText('name', val)}
            />

            <Text h3>Email address:</Text>
            <Input
              placeholder='Email address'
              errorStyle={{ color: 'red' }}
              errorMessage='Check the email address and try again'
              onChangeText={val => this.onChangeText('email', val)}
            />

            <Text h3>Password:</Text>
            <Input
              placeholder='Password'
              errorStyle={{ color: 'red' }}
              errorMessage='Check the password and try again'
              onChangeText={val => this.onChangeText('password', val)}
            />

            <Text h3>Confirm Password:</Text>
            <Input
              placeholder='Password'
              errorStyle={{ color: 'red' }}
              errorMessage='Check the password and try again'
              onChangeText={val =>this.onChangeText('confirmPassword', val)}
            />

            <Button title='Create account' raised onPress= {
              () => {this.checkUserInput()}
            }/>
          </View>
      );
  }
}
