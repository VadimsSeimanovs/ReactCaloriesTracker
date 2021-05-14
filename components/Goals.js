import React from 'react';
import { View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import styles from './styles/button';
import User from './User';
import styles  from './styles/button'
import { SafeAreaView } from 'react-native';

export default class Goals extends React.Component{
    render(){
    const windowWidth = Dimensions.get('window').width;
      const data2 = {
        labels: ["May"],
        datasets: [
          {
            data: [parseFloat(User.getWeight())]
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
      return(
        <SafeAreaView>
          <View style = {styles.container}>
          <Text>Weight Progress</Text>
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
      )
    }
}