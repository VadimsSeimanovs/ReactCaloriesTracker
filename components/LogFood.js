import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements'
import styles  from './styles/button'

export default class LogFood extends React.Component {

  render(){
    return (
      <View>
        <Text h2 style={styles.textInputLabel}>Add Item</Text>
        <View style={styles.spaceBetweenButtons}></View>
        
        <Button title='Breakfast' raised 
            buttonStyle={{backgroundColor: '#0F2080'}}
            onPress= {
              () => {this.props.navigation.navigate("SearchFood")}} />

        <Button title='Lunch' raised 
            buttonStyle={{backgroundColor: '#0F2080'}}
        />

        <Button title='Dinner' raised 
            buttonStyle={{backgroundColor: '#0F2080'}}
        />

        <Button title='Snacks' raised 
            buttonStyle={{backgroundColor: '#0F2080'}}
        />

        <Button title='Water' raised 
            buttonStyle={{backgroundColor: '#0F2080'}}
        />

       
          <StatusBar style="auto" />
      </View>
  );
}
}
