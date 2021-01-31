import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements'
import { ProgressChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import styles  from './styles/button'

export default class Dashboard extends React.Component {
    render(){
      const data = {
        labels: ["Calories Intake", "Calories Left"], // optional
        data: [0.4, 0.6]
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
                () => this.props.navigation.navigate('Dashboard')} 
                style={{backgroundColor:'#C2DFFB'}}
                buttonStyle={{backgroundColor:'#0F2080'}, {width:150}, {alignSelf:'flex-end'}}
              />

              <View style={{marginTop:200}}/>

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

              <View style={{marginTop:100}}/>
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