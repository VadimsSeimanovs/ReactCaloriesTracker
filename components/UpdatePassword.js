import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import styles from './styles/button';

export default class UpdatePassword extends React.Component {

  state = {
    password: '',
    confirmPassword: ''
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
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
          <SafeAreaView>
            <View>
              <View style={styles.spaceBetweenButtons}></View>
                <Text h3>Enter new password:</Text>
                <Input
                  placeholder='Enter new password'
                  errorStyle={{ color: 'red' }}
                  onChangeText={val => this.onChangeText('password', val)}
                />
                
                {this.state.isValid && <Text style={{color: 'red'}}>Check the password  and try again</Text>}

                <View style={styles.spaceBetweenButtons}></View>
                <Text h3>Confirm the password:</Text>
                <Input
                  placeholder='Confirm the password'
                  errorStyle={{ color: 'red' }}
                  onChangeText={val => this.onChangeText('confirmPassword', val)}
                />
                {this.state.isValid && <Text style={{color: 'red'}}>Check the password and try again</Text>}

                <View style={styles.spaceBetweenButtons}></View>

                <Button title='Change password' raised onPress= {
                  () => {{this.props.navigation.navigate('Dashboard')} {this.setPasswordErrorMessage()} {this.setPasswordConfirmErrorMessage}}}>
                </Button>
            </View>
            </SafeAreaView>
        );
    }
}
