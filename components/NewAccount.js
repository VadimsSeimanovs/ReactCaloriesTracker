import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

export const NewAccount = ({ navigation }) => (
  <View>
    <Text h3>Enter age:</Text>
    <Input
      placeholder='Age'
      errorStyle={{ color: 'red' }}
      errorMessage='Check the age and try again'
    />

    <Text h3>Enter weight:</Text>
    <Input
      placeholder='Weight'
      errorStyle={{ color: 'red' }}
      errorMessage='Check the weight and try again'
    />

    <Text h3>Enter height:</Text>
    <Input
      placeholder='Height'
      errorStyle={{ color: 'red' }}
      errorMessage='Check the height and try again'
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
        onChangeItem={item => this.setState({
            gender: item.value
        })}
    />

    <Button title='Continue' raised onPress= {
      () => {navigation.navigate('AuthStackScreen', { screen: 'SetGoal'});}
    }/>
  </View>
);
