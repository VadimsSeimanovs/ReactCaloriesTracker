import React from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import RadioForm from 'react-native-simple-radio-button';
import FirebaseTest from './FirebaseTest';
import User from './User';

var weight_props = [
  {label: 'Kg', value: 0 },
  {label: 'Oz', value: 1 }
];

var height_props = [
  {label: 'Meters', value: 0},
  {label: 'Foot', value: 1}
];

export default class NewAccount extends React.Component{

  state = {
    age: '',
    weight: '',
    weightType: '',
    height: '',
    heightType: '',
    gender: ''
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
    //console.log({ [key]: val });
  }

  checkUserInput = () => {
    if(this.state.age != '' && this.state.weight != '' && this.state.height != ''){
        FirebaseTest.init();
        User.init();
        User.setAge(this.state.age);
        User.setWeight(this.state.weight);
        User.setWeightType(this.state.weightType);
        User.setHeight(this.state.height);
        User.setHeightType(this.state.heightType);
        User.setGender(this.state.gender);
        this.props.navigation.navigate('SetGoal', {name: 'Set Goal'});
    }
  }

  render(){
    return(
    <View>
      <Text h3>Enter age:</Text>
      <Input
        placeholder='Age'
        errorStyle={{ color: 'red' }}
        errorMessage='Check the age and try again'
        onChangeText={val => this.onChangeText('age', val)}
      />

      <Text h3>Enter weight:</Text>
      <Input
        placeholder='Weight'
        errorStyle={{ color: 'red' }}
        errorMessage='Check the weight and try again'
        onChangeText={val => this.onChangeText('weight', val)}
      />
      
      <RadioForm
        radio_props={weight_props}
        initial={0}
        onPress={(value) => {this.setState({value:value})}}
      />

      <Text h3>Enter height:</Text>
      <Input
        placeholder='Height'
        errorStyle={{ color: 'red' }}
        errorMessage='Check the height and try again'
        onChangeText={val => this.onChangeText('height', val)}
      />

      <RadioForm
        radio_props={height_props}
        initial={0}
        onPress={(value) => {this.setState({value:value})}}
      />

      <Text h3>Enter gender:</Text> 
      <DropDownPicker
          items={[
              {label: 'Female', value: 'female', icon: () => <Icon name="female" size={18} color="#900" />},
              {label: 'Male', value: 'male', icon: () => <Icon name="male" size={18} color="#900" />},
          ]}
          defaultValue='female'
          containerStyle={{height: 40}}
          style={{backgroundColor: '#fafafa'}}
          itemStyle={{
              justifyContent: 'flex-start'
          }}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          onChangeItem={(value) => {this.setState({value:value})}}
      />

      <Button title='Continue' raised onPress= {
        () => {this.checkUserInput()}
      }/>
    </View>
    )
  }
}
