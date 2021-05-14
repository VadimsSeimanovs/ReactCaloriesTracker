import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView, ScrollView, } from 'react-native';
import { Input, Button, Text } from 'react-native-elements'
import styles  from './styles/button'
import UserProvider from './Firebase'

export default class AddItem extends React.Component {
    data = ''
    
    constructor(props){
        super(props)
       data = props.route.params.barcodeId
    }

    state = {
        barcode: '',
        name: '',
        energy: '',
        fat: '',
        carbs: '',
        sugar: '',
        fiber: '',
        protein: '',
        salt: ''
    }

    onChangeText = (key, val) => {
        this.setState({ [key]: val })
      }

  checkUserInput = () => {
    UserProvider.init()
    UserProvider.insertItem(data, this.state.name, this.state.energy, this.state.fat, this.state.carbs, this.state.sugar, this.state.fiber, this.state.protein, this.state.salt)
}

  render(){
    return (
        <SafeAreaView>
      <ScrollView>
          <Text h2 style={styles.textInputLabel}>Add Item</Text>
          <View style={styles.spaceBetweenButtons}></View>
        <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Item name'
            onChangeText={val=> this.onChangeText('name', val)}
            // value={this.state.itemName}
        />

        {/* <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Serving size'
        /> */}

        <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Calories'
            onChangeText={val=> this.onChangeText('energy', val)}
        />

        <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Fat'
            onChangeText={val=> this.onChangeText('fat', val)}
        />

        <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Sodium'
            onChangeText={val=> this.onChangeText('salt', val)}
        />

        <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Carbohydrates'
            onChangeText={val=> this.onChangeText('carbs', val)}
        />

        <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Fibre'
            onChangeText={val=> this.onChangeText('fiber', val)}
        />

        <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Sugar'
            onChangeText={val=> this.onChangeText('sugar', val)}
        />

        <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Protein'
            onChangeText={val=> this.onChangeText('protein', val)}
        />

        <Button title='Add' raised onPress = { 
            () => this.checkUserInput()}
            // () => this.props.navigation.navigate('Dashboard')} 
            buttonStyle={{backgroundColor: '#0F2080'}}
        />

        <View style={styles.spaceBetweenButtons}></View>

        <Button title='Cancel' raised onPress = { 
            () => this.props.navigation.navigate('BarcodeScanner')} 
            buttonStyle={{backgroundColor: '#0F2080'}}
        />
          <StatusBar style="auto" />
      </ScrollView>
      </SafeAreaView>
  );
}
}
