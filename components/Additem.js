import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements'
import styles  from './styles/button'

export default class AddItem extends React.Component {

  checkUserInput = () => {
   
  }

  render(){
    return (
      <View style={styles.container}>
        <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Item name'
        />

        <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Brand'
        />

        <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Serving size'
        />

        <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Calories'
        />

        <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Fat'
        />

        <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Saturated fat'
        />

        <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Cholesterol'
        />

        <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Sodium'
        />

        <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Carbohydrates'
        />

        <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Fibre'
        />

        <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Sugar'
        />

        <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Protein'
        />

        <Button title='Add' raised onPress = { 
            () => this.props.navigation.navigate('Dashboard')} 
            buttonStyle={{backgroundColor: '#0F2080'}}
        />

        <View style={styles.spaceBetweenButtons}></View>

        <Button title='Cancel' raised onPress = { 
            () => this.props.navigation.navigate('Dashboard')} 
            buttonStyle={{backgroundColor: '#0F2080'}}
        />
          <StatusBar style="auto" />
      </View>
  );
}
}
