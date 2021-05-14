import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Text, Button } from 'react-native-elements'
import styles  from './styles/button'
import User from './User'

export default class MyAccount extends React.Component {
    render(){
        return (
          <SafeAreaView>
            <View style={styles.container}>
                <Text h2 style={styles.textInputLabel}>My Account</Text>

                <View style={styles.spaceBetweenButtons}></View>
                <Text h4>{User.getName}</Text>
                <View style={styles.spaceBetweenButtons}></View>
                <Text h4>{User.getGender}, {User.getAge}, {User.getHeight}</Text>
                <View style={styles.spaceBetweenButtons}></View>

                <Button title='Update goal' raised onPress= {
                  () => {this.props.navigation.navigate('UpdateGoal')}}>
                </Button>

                <View style={styles.spaceBetweenButtons}></View>

                <Button title='Update details' raised onPress= {
                  () => {this.props.navigation.navigate('UpdateDetails')}}>
                </Button>

                <View style={styles.spaceBetweenButtons}></View>

                <Button title='Change password' raised onPress= {
                  () => {this.props.navigation.navigate('ChangePassword')}}>
                </Button>

                <View style={styles.spaceBetweenButtons}></View>

                <Button title='Meal settings' raised onPress= {
                  () => {this.props.navigation.navigate('MealSettings')}}>
                </Button>

                <View style={styles.spaceBetweenButtons}></View>

                <Button title='Nutrition' raised onPress= {
                  () => {this.props.navigation.navigate('Nutrition')}}>
                </Button>
            </View>
            </SafeAreaView>
        );
    }
}