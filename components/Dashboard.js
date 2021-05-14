import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements'
import { ProgressChart, BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import styles  from './styles/button'
import User from './User'

export default class Dashboard extends React.Component {
    render(){
      const data = {
        labels: ["Calories Intake", "Calories Left"], // optional
        data: [200, User.getTotalCalories()]
      };
      const windowWidth = Dimensions.get('window').width;
      const chartConfig = {
        backgroundGradientFrom: "#85C0F9",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "#85C0F9",
        backgroundGradientToOpacity: 1,
        color: (opacity = 1) => `rgba(245, 105, 58, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      }; 
        return (
            <View style={styles.container}>
              <Button title='My Account' onPress = { 
                () => this.props.navigation.navigate('MyAccount')} 
                style={{backgroundColor:'#C2DFFB'}}
                buttonStyle={{backgroundColor:'#0F2080'}, {width:150}, {alignSelf:'flex-end'}}
              />

              <View style={{marginTop:10}}/>

              <ProgressChart
                style={{alignSelf:'center'}}
                data={data}
                width={windowWidth}
                height={200}
                strokeWidth={20}
                radius={40}
                chartConfig={chartConfig}
                hideLegend={false}
              />
            </View>
        );
    }
  }