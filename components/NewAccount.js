import React from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import RadioForm from 'react-native-simple-radio-button';
import UserProvider from './FirebaseTest';
import User from './User';

var weight_props = [
  {label: 'Kg', value: 'Kg' },
  {label: 'Oz', value: 'Oz' }
];

var height_props = [
  {label: 'Meters', value: 'Meters'},
  {label: 'Foot', value: 'Foot' }
];

export default class NewAccount extends React.Component{

  state = {
    age: '',
    weight: '',
    weightType: 'Kg',
    height: '',
    heightType: 'Meters',
    gender: 'female'
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
        onPress={(value) => {this.setState({weightType:value})}}
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
        onPress={(value) => {this.setState({heightType:value})}}
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