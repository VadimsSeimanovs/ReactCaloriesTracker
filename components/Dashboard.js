import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { createMaterialBottomTabNavigator  } from '@react-navigation/material-bottom-tabs';
import SetGoals from './SetGoal';
import Login from './Login';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements'

export default class Dashboard extends React.Component {
    render(){
      const data = {
        labels: ["Calories Intake", "Calories Left"], // optional
        data: [0.4, 0.6]
      };
      const windowWidth = Dimensions.get('window').width;
      const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };
        return (
            <View>
                <ProgressChart
                  data={data}
                  width={windowWidth}
                  height={220}
                  strokeWidth={16}
                  radius={32}
                  chartConfig={chartConfig}
                  hideLegend={false}
                />
                <Button 
                title = "Go to Login"
                onPress={
                  () => { this.props.navigation.navigate('Login');}
                }/>
                {/* <BottomTab/> */}
            </View>
        );
    }
}



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });