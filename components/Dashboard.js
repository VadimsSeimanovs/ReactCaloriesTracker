import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements'
import { ProgressChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import styles  from './styles/button'
import { SafeAreaView } from 'react-native';

export default class Dashboard extends React.Component {
    render(){

      const data = {
        labels: ["Calories Intake", "Calories Left"], // optional
        data: [0, 2000]
      };
      //data: [0.4, 0.25]
      const windowWidth = Dimensions.get('window').width;
      const chartConfig = {
        backgroundGradientFrom: "#85C0F9",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "#85C0F9",
        backgroundGradientToOpacity: 1,
        color: (opacity = 1) => `rgba(245, 105, 58, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.4,
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
                style={{alignSelf:'flex-end'}}
                data={data}
                width={windowWidth}
                height={220}
                strokeWidth={20}
                radius={50}
                chartConfig={chartConfig}
                hideLegend={false}
              />
            </View>
            </SafeAreaView>
        );
    }
  }