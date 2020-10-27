import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'

export default class ChangePassword extends React.Component {
    render(){
        return (
            <View>
                <Text h3>Enter new password:</Text>
                <Input
                  placeholder='Enter new password'
                  errorStyle={{ color: 'red' }}
                  errorMessage='Check the password and try again'
                />

              <Text h3>Confirm the password:</Text>
                <Input
                  placeholder='Confirm the password'
                  errorStyle={{ color: 'red' }}
                  errorMessage='Check the password and try again'
                />

                <Button title='Change password' raised onPress= {
                  () => {this.props.navigation.navigate('Dashboard')}
                }></Button>
            </View>
        );
    }
}
