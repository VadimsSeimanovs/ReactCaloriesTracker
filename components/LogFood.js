import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements'
import styles  from './styles/button'

export default class LogFood extends React.Component {
  render(){
    console.log('in log food')
    return (
      <SafeAreaView>
      <View style={styles.container}>
        <Text h2 style={styles.textInputLabel}>Add food</Text>
        <View style={styles.spaceBetweenButtons}></View>
        <View style={styles.spaceBetweenButtons}></View>

        <Button title='Breakfast'
            style={{backgroundColor:'#C2DFFB'}}
            buttonStyle={{backgroundColor: '#0F2080'}}
            onPress= {
              () => {this.props.navigation.navigate("AddFood")}} />

        <View style={styles.spaceBetweenButtons}></View>
        <View style={styles.spaceBetweenButtons}></View>

        <Button title='Lunch'
            style={{backgroundColor:'#C2DFFB'}}
            buttonStyle={{backgroundColor: '#0F2080'}}
            onPress= {
              () => {this.props.navigation.navigate("AddFood")}}
        />

        <View style={styles.spaceBetweenButtons}></View>
        <View style={styles.spaceBetweenButtons}></View>

        <Button title='Dinner'
            style={{backgroundColor:'#C2DFFB'}}
            buttonStyle={{backgroundColor: '#0F2080'}}
            onPress= {
              () => {this.props.navigation.navigate("AddFood")}}
        />

        <View style={styles.spaceBetweenButtons}></View>
        <View style={styles.spaceBetweenButtons}></View>

        <Button title='Snacks'
            style={{backgroundColor:'#C2DFFB'}}
            buttonStyle={{backgroundColor: '#0F2080'}}
            onPress = {
              () => this.props.navigation.navigate("LogSnacks")}
        />

        <View style={styles.spaceBetweenButtons}></View>
        <View style={styles.spaceBetweenButtons}></View>

        <Button title='Water'
            style={{backgroundColor:'#C2DFFB'}}
            buttonStyle={{backgroundColor:'#0F2080'}}
            onPress = {
              () => this.props.navigation.navigate("LogWater")}
        />
          <StatusBar style="auto" />
      </View>
      </SafeAreaView>
  );
}
}
