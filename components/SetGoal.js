import React from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import RadioForm from 'react-native-simple-radio-button';
import User from './User';

var choice_props = [
  {label: 'Lose weight', value: 0 },
  {label: 'Gain weight', value: 1 }
];

var weight_props = [
  {label: 'Kg', value: 0 },
  {label: 'Oz', value: 1 }
];

export default class SetGoal extends React.Component {

  state = {
    goalWeight: '',
    goalType: ''
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
    //console.log({ [key]: val });
  }
  
  checkUserInput = () =>{
    this.props.navigation.navigate('Signup2');
  }
    render(){
        return (
            <View>
              <Text h3>What do you want to achieve?</Text>
              <RadioForm
                radio_props={choice_props}
                initial={0}
                onPress={(value) => {this.setState({value:value})}}
              />
      <Text h3>How much weight do you want to lose/gain?</Text>
      <Input
        placeholder='Weight'
        errorStyle={{ color: 'red' }}
        errorMessage='Check the weight and try again'
      />

      <Text h3>Type weight:</Text>
        <RadioForm
        radio_props={weight_props}
        initial={0}
        onPress={(value) => {this.setState({value:value})}}
      />

      <Button title='Continue' raised onPress= {
        () => {this.checkUserInput()}
      }/>
    </View>
  );
}
}
