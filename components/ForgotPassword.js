import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'

export default class ForgotPassword extends React.Component {
    render(){
        return (
            <View>
                <Text h3>Email address:</Text>
                <Input
                  placeholder='Enter email address to reset your password'
                  errorStyle={{ color: 'red' }}
                  errorMessage='Check the email address and try again'
                />

                <Button title='Send email' raised onPress= {
                  () => {this.props.navigation.navigate('VerifyCode')}
                }></Button>
            </View>
        );
    }
}
