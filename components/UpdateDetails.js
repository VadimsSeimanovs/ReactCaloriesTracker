import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import styles  from './styles/button'

export default class UpdateDetails extends Component {
    render(){
        return (
            <SafeAreaView>
                <View>
                <Text h2 style={styles.textInputLabel}>Update details</Text>
             </View>
            </SafeAreaView>
        );
    }
}