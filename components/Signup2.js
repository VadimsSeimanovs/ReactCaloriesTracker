import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Signup2 extends React.Component {
    render(){
        return (
            <View>
              <Text h3>Enter name:</Text>
              <Input
                placeholder='Name'
                errorStyle={{ color: 'red' }}
                errorMessage='Check the name and try again'
              />

              <Text h3>Enter email address:</Text>
              <Input
                placeholder='Email address'
                errorStyle={{ color: 'red' }}
                errorMessage='Check the email address and try again'
              />

              <Text h3>Enter password:</Text>
              <Input
                placeholder='Password'
                errorStyle={{ color: 'red' }}
                errorMessage='Check the password and try again'
              />

              <Button title='Create account' raised onPress= {
                () => {this.props.navigation.navigate('Dashboard')}
              }/>
            </View>
        );
    }
}
