import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements'
import { ProgressChart, BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import styles  from './styles/button'
import { SafeAreaView } from 'react-native';

export default class Dashboard extends React.Component {
    render(){
      const data = {
        labels: ["Calories Intake", "Calories Left"], // optional
        data: [200, 1807]
      };
      const percentage = 1807/507
      const windowWidth = Dimensions.get('window').width;
      const chartConfig = {
        backgroundGradientFrom: "#85C0F9",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "#85C0F9",
        backgroundGradientToOpacity: 1,
        color: (opacity = 1) => `rgba(245, 105, 58, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.25,
        useShadowColorFromDataset: false // optional
      };

      const data2 = {
        labels: ["May"],
        datasets: [
          {
            data: [parseFloat(70)]
          }
        ]
      };

      const barChartConfig = {
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
          <SafeAreaView>
            <View style={styles.container}>
              <Button title='My Account' onPress = { 
                () => this.props.navigation.navigate('MyAccount')} 
                style={{backgroundColor:'#C2DFFB'}}
                buttonStyle={{backgroundColor:'#0F2080'}, {width:150}, {alignSelf:'flex-end'}}
              />

              <View style={{marginTop:50}}/>

              <Text h2 style={{alignSelf:'center'}}>Calories progress</Text>
              <View style={{marginTop:20}}/>

              <Text style={{alignSelf:'center'}}>Total calories: 1800</Text>
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
              <View style={styles.spaceBetweenButtons}></View>
              <View style={styles.spaceBetweenButtons}></View>

              <Text h2 style={{alignSelf:'center'}}>Weight Progress</Text>
              <BarChart
                style={{alignSelf:'center'}}
                data={data2}
                width={windowWidth}
                height={220}
                fromZero={true}
                chartConfig={barChartConfig}
                verticalLabelRotation={30}
              />
            </View>
            </SafeAreaView>
        );
    }
  }