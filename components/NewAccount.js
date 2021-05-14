import React, { Component, useState } from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import RadioForm from 'react-native-simple-radio-button';
import UserProvider from './Firebase';
import User from './User';
import CaloriesCalculator from './CaloriesCalculator';

var weight_props = [
  {label: 'Kg', value: 'Kg' },
  {label: 'Oz', value: 'Oz' }
];

var height_props = [
  {label: 'Meters', value: 'Meters'},
  {label: 'Foot', value: 'Foot' }
];

export default class NewAccount extends Component{

  state = {
    age: '',
    weight: '',
    weightType: 'Kg',
    height: '',
    heightType: 'Meters',
    gender: 'female',
    exerciseLevel: 'No Exercise'
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  checkUserInput = () => {
    if(this.state.age != '' && this.state.weight != '' && this.state.height != ''){
      UserProvider.init();
        User.init();
        User.setAge(this.state.age);
        User.setWeight(this.state.weight);
        User.setWeightType(this.state.weightType);
        User.setHeight(this.state.height);
        User.setHeightType(this.state.heightType);
        User.setGender(this.state.gender);

        var pounds
        var inches
        
        if(this.state.weightType == 'Kg'){
          pounds = CaloriesCalculator.kgToPoundConversion(this.state.weight)
        }
        if(this.state.heightType == 'Meters'){
          inches = CaloriesCalculator.cmToInchesConversion(this.state.height)
        }
        if(this.state.heightType == 'Foot'){
          inches = CaloriesCalculator.cmToInchesConversion(this.state.height)
        }

        if(this.state.gender == "Female"){
          bmr = CaloriesCalculator.calculateFemaleBmr(pounds, inches, this.state.age)
          totalCalories = CaloriesCalculator.formulaToMaintainHealhtMale(this.state.exerciseLevel, bmr)
          User.setBMR(bmr)
          User.setTotalCalories(totalCalories)

        }else{
          bmr = CaloriesCalculator.calculateMaleBmr(pounds, inches, this.state.age)
          totalCalories = CaloriesCalculator.formulaToMaintainHealhtMale(this.state.exerciseLevel, bmr)
          User.setBMR(bmr)
          User.setTotalCalories(totalCalories)
        }

        console.log("Pounds: " + pounds + "inches: " + inches)
        // if(this.state.gender == 'female'){
        //   CaloriesCalculator.
        // }
        // }else{

        // }
        this.props.navigation.navigate('Summary', {name: 'Dashboard'});
    }
  }

  render(){
    return(
    <View>
      <Text h3>Enter age:</Text>
      <Input
        placeholder='Age'
        errorStyle={{ color: 'red' }}
        onChangeText={val => this.onChangeText('age', val)}
      />

      <Text h3>Enter weight:</Text>
      <Input
        placeholder='Weight'
        errorStyle={{ color: 'red' }}
        //errorMessage='Check the weight and try again'
        onChangeText={val => this.onChangeText('weight', val)}
      />
      
      <RadioForm
        radio_props={weight_props}
        initial={0}
        onPress={(value) => {this.setState({weightType:value})}}
      />

      <Text h3>Enter height:</Text>
      <Input
        placeholder='Height'
        errorStyle={{ color: 'red' }}
        //errorMessage='Check the height and try again'
        onChangeText={val => this.onChangeText('height', val)}
      />

      <RadioForm
        radio_props={height_props}
        initial={0}
        onPress={(value) => {this.setState({heightType:value})}}
      />

      <Text h3>Exercise Level:</Text> 
      <DropDownPicker
          items={[
              {label: 'No Exercise', value: 'No Exercise'},
              {label: '3-5 days', value: '3-5 days'},
              {label: '6-7 days', value: '6-7 days'},
              {label: 'Extra', value: 'Extra'},
          ]}
          defaultValue={this.state.exerciseLevel}
          containerStyle={{height: 40}}
          style={{backgroundColor: '#fafafa'}}
          itemStyle={{
              justifyContent: 'flex-start'
          }}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          onChangeItem={(value) => {this.setState({exerciseLevel:value.value})}}
      />

      <Text h3>Enter gender:</Text> 
      <DropDownPicker
          items={[
              {label: 'Female', value: 'female', icon: () => <Icon name="female" size={18} color="#900" />},
              {label: 'Male', value: 'male', icon: () => <Icon name="male" size={18} color="#900" />},
          ]}
          defaultValue={this.state.gender}
          containerStyle={{height: 40}}
          style={{backgroundColor: '#fafafa'}}
          itemStyle={{
              justifyContent: 'flex-start'
          }}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          onChangeItem={(value) => {this.setState({gender:value.value})}}
      />

      <Button title='Continue' raised onPress= {
        () => {this.checkUserInput()}
      }/>
    </View>
    )
  }
}