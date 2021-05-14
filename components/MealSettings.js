import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import styles from './styles/button';

export default class MealSettings extends Component {
    render(){
        return (
            <SafeAreaView>
            <View>
            <Text h2 style={styles.textInputLabel}>Meal Settings</Text>
        </View>
        </SafeAreaView>
    );
    }
}