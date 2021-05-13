import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements'

export default class MyAccount extends React.Component {
    render(){
        return (
            <View>
                <Text h4>Name</Text>
                <Text h4>Gender, age, height</Text>

                <Button title='Update goal' raised onPress= {
                  () => {this.props.navigation.navigate('Dashboard')}}>
                </Button>

                <Button title='Update details' raised onPress= {
                  () => {this.props.navigation.navigate('UpdateDetails')}}>
                </Button>

                <Button title='Change password' raised onPress= {
                  () => {this.props.navigation.navigate('ChangePassword')}}>
                </Button>

                <Button title='Meal settings' raised onPress= {
                  () => {this.props.navigation.navigate('MealSettings')}}>
                </Button>

                <Button title='Nutrition' raised onPress= {
                  () => {this.props.navigation.navigate('Nutrition')}}>
                </Button>
            </View>
        );
    }
}