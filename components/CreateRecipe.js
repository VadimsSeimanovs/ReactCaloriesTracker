import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Button, Text } from 'react-native-elements'
import styles  from './styles/button'

export default class CreateRecipe extends React.Component {
  render(){
    return (
        <SafeAreaView>
            <View style={styles.container}>
            <Text h2 style={styles.textInputLabel}>Add food</Text>
            <View style={styles.spaceBetweenButtons}></View>
            <Button title='Search item'
                style={{backgroundColor:'#C2DFFB'}}
                buttonStyle={{backgroundColor: '#0F2080'}}
                onPress= {
                () => {this.props.navigation.navigate("SearchFood")}} />
                
            <View style={styles.spaceBetweenButtons}></View>
            
            <Button title='Scan item'
                style={{backgroundColor:'#C2DFFB'}}
                buttonStyle={{backgroundColor: '#0F2080'}}
                onPress= {
                () => {this.props.navigation.navigate("BarcodeScanner")}} />

            <View style={styles.spaceBetweenButtons}></View>

            <Button title='Create recipe'
                style={{backgroundColor:'#C2DFFB'}}
                buttonStyle={{backgroundColor: '#0F2080'}}
            />
        </View>
      </SafeAreaView>
  );
}
}
