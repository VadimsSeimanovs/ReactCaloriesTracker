import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import RadioForm from 'react-native-simple-radio-button';
import styles  from './styles/button'

export default class Nutrition extends Component {
    render(){
        return (
            <SafeAreaView>
            <View>
            <Text h2 style={styles.textInputLabel}>Nutrition</Text>
        </View>
        </SafeAreaView>
    );
    }
}