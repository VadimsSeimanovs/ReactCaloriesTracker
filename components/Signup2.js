import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import User from './User'
import UserProvider from './Firebase'

var userRegistered = false;
export default class Signup2 extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    isValid: false
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  checkUserInput = () => {
    if(this.state.name != '' && this.state.email != '' && this.state.password != '' && this.state.confirmPassword != ''){
      //Check if the email is valid
      //Check if the password matches with the confirm password. ()
      User.setName(this.state.name);
      User.setEmail(this.state.email);
      User.setPassword(this.state.password);
      UserProvider.registerUser(User.getEmail(), User.getPassword());
      UserProvider.authListener();
      UserProvider.insertData(User.getWeight(), User.getWeightType(), User.getHeight(), User.getHeightType(), User.getAge(), User.getGender(), User.getName(), User.getGoalWeight(), User.getGoalWeightType(), User.getGoal(), User.getEmail(), User.getPassword());
      this.props.navigation.navigate('Dashboard');
    }
  }

  setNameErrorMessage = () => {
    const { name } = this.state
    if({name}.length > 0){
      tempData.push({
        name, 
        todos: []
      })

      this.setState({name: ''})
      this.setState({isValid: false})
      this.props.closeModal()
    }else{
      ({name}.length = 0)
      this.setState({isValid: true})
      return
    }
  }

  setEmailErrorMessage = () => {
    const { email } = this.state
    if({email}.length > 0){
      tempData.push({
        email, 
        todos: []
      })

      this.setState({email: ''})
      this.setState({isValid: false})
      this.props.closeModal()
    }else{
      ({email}.length = 0)
      this.setState({isValid: true})
      return
    }
  }

  setPasswordErrorMessage = () => {
    const { password } = this.state
    if({password}.length > 0){
      tempData.push({
        password, 
        todos: []
      })

      this.setState({password: ''})
      this.setState({isValid: false})
      this.props.closeModal()
    }else{
      ({password}.length = 0)
      this.setState({isValid: true})
      return
    }
  }
  
  setPasswordConfirmErrorMessage = () => {
    const { confirmPassword } = this.state
    if({confirmPassword}.length > 0){
      tempData.push({
        confirmPassword, 
        todos: []
      })

      this.setState({confirmPassword: ''})
      this.setState({isValid: false})
      this.props.closeModal()
    }else{
      ({confirmPassword}.length = 0)
      this.setState({isValid: true})
      return
    }
  }

  render(){
      return (
          <View>
            <Text h3>Name:</Text>
            <Input
              placeholder='Name'
              errorStyle={{ color: 'red' }}
              //errorMessage='Check the name and try again'
              onChangeText={val => this.onChangeText('name', val)}
            />

            {this.state.isValid && <Text style={{color: 'red'}}>Check the name and try again</Text>}

            <Text h3>Email address:</Text>
            <Input
              placeholder='Email address'
              errorStyle={{ color: 'red' }}
              //errorMessage='Check the email address and try again'
              onChangeText={val => this.onChangeText('email', val)}
            />

            {this.state.isValid && <Text style={{color: 'red'}}>Check the email and try again</Text>}

            <Text h3>Password:</Text>
            <Input
              placeholder='Password'
              errorStyle={{ color: 'red' }}
              //errorMessage='Check the password and try again'
              onChangeText={val => this.onChangeText('password', val)}
            />

            {this.state.isValid && <Text style={{color: 'red'}}>Check the password and try again</Text>}

            <Text h3>Confirm Password:</Text>
            <Input
              placeholder='Password'
              errorStyle={{ color: 'red' }}
              //errorMessage='Check the password and try again'
              onChangeText={val =>this.onChangeText('confirmPassword', val)}
            />

            {this.state.isValid && <Text style={{color: 'red'}}>Check the password  and try again</Text>}

            <Button title='Create account' raised onPress= {
              () => {{this.checkUserInput()} {this.setNameErrorMessage()} {this.setEmailErrorMessage()} {this.setPasswordErrorMessage()} {this.setPasswordConfirmErrorMessage()}}
            }/>
          </View>
      );
  }
}
