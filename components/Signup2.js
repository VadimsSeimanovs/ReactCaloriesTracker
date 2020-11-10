import React from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import User from './User'
import FirebaseTest from './FirebaseTest'

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
    if(this.state.name != '' && this.state.email != '' && this.state.password != '' && this.state.confirmPassword != ''){
      User.setName(this.state.name);
      User.setEmail(this.state.email);
      User.setPassword(this.state);
      this.props.navigation.navigate('Dashboard');
      console.log(FirebaseTest.insertData(User.getWeight(), User.getWeightType(), User.getHeight(), User.getHeightType(), User.getAge(), User.getGender(), User.getName()));
    }
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
