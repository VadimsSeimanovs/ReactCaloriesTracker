import React from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'

export default class VerifyCode extends React.Component {
    render(){
        return (
            <View>
                <Text h3>Enter code:</Text>
                <Input
                  placeholder='Enter code'
                  errorStyle={{ color: 'red' }}
                  errorMessage='Check the code and try again'
                />

                <Button title='Verify' raised onPress = {
                    () => {this.props.navigation.navigate('ChangePassword')}
                }/>
            </View>
        );
    }
}
