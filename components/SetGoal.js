import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import RadioForm from 'react-native-simple-radio-button';
import User from './User';

var choice_props = [
  {label: 'Lose weight', value: 'Lose weight' },
  {label: 'Gain weight', value: 'Gain weight' }
];

var weight_props = [
  {label: 'Kg', value: 'Kg' },
  {label: 'Oz', value: 'Oz' }
];

export default class SetGoal extends Component {

  state = {
    goalWeight: '',
    goalType: 'Lose weight',
    goalWeightType: 'Kg'
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
    //console.log({ [key]: val });
  }
  
  checkUserInput = () =>{
    if(this.state.goalWeight != ''){
      User.setGoalWeight(this.state.goalWeight);
      User.setGoalWeightType(this.state.goalWeightType);
      User.setGoal(this.state.goalType);
      this.props.navigation.navigate('Signup2');
    }
  }
    render(){
        return (
            <View>
              <Text h3>What do you want to achieve?</Text>
              <RadioForm
                radio_props={choice_props}
                initial={0}
                onPress={(value) => {this.setState({goalType:value})}}
              />

              <Text h3>How much weight do you want to lose/gain?</Text>
              <Input
                placeholder='Weight'
                errorStyle={{ color: 'red' }}
                errorMessage='Check the weight and try again'
                onChangeText={val => this.onChangeText('goalWeight', val)}
              />

              <Text h3>Type weight:</Text>
                <RadioForm
                radio_props={weight_props}
                initial={0}
                onPress={(value) => {this.setState({goalWeightType:value})}}
              />

              <Button title='Continue' raised onPress= {
                () => {this.checkUserInput()}
              }/>
    </View>
  );
}
}
