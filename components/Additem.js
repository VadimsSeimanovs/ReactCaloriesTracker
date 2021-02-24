import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView, ScrollView, } from 'react-native';
import { Input, Button, Text } from 'react-native-elements'
import styles  from './styles/button'
import UserProvider from './Firebase'

export default class AddItem extends React.Component {
    state = {
        itemBarcode: '000',
        itemName: '',
        itemEnergy: '',
        itemFat: '',
        itemCarbs: '',
        itemSugar: '',
        itemFiber: '',
        itemProtein: '',
        itemSalt: ''
    }

    onChangeText = (key, val) => {
        this.setState({ [key]: val })
      }

  checkUserInput = () => {
    UserProvider.init()
    UserProvider.insertItem(this.state.itemBarcode, this.state.itemName, this.state.itemEnergy, this.state.itemFat, this.state.itemCarbs, this.state.itemSugar, this.state.itemProtein, this.state.itemSalt)
    UserProvider.getItem()
    console.log("state "+ state.itemName)  
}

  render(){
    return (
      <ScrollView>
          <Text h2 style={styles.textInputLabel}>Add Item</Text>
          <View style={styles.spaceBetweenButtons}></View>
        <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Item name'
            onChangeText={val=> this.onChangeText('itemName', val)}
            // value={this.state.itemName}
        />

        {/* <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Brand'
            value={this.state.bran}
        /> */}

        {/* <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Serving size'
        /> */}

        <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Calories'
            onChangeText={val=> this.onChangeText('itemEnergy', val)}
            // value={this.state.itemEnergy}
        />

        <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Fat'
            // onChangeText={val=> this.onChangeText('itemFat', val)}
            // value={this.state.itemFat}
        />

        {/* <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Saturated fat'
        /> */}

        {/* <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Cholesterol'
        /> */}

        <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Sodium'
            // onChangeText={val=> this.onChangeText('itemSalt', val)}
            // value={this.state.itemSalt}
        />

        <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Carbohydrates'
            // onChangeText={val=> this.onChangeText('itemCarbs', val)}
            // value={this.state.itemCarbs}
        />

        <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Fibre'
            // onChangeText={val=> this.onChangeText('itemFiber', val)}
            // value={this.state.itemFiber}
        />

        <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Sugar'
            // onChangeText={val=> this.onChangeText('itemSugar', val)}
            // value={this.state.itemSugar}
        />

        <Input style={styles.textInput}
            placeholderTextColor='#707070'
            placeholder='Protein'
            // onChangeText={val=> this.onChangeText('itemProtein', val)}
            // value={this.state.itemProtein}
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
  );
}
}
