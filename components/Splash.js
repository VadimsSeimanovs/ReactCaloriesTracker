import React from 'react';
import { SafeAreaView } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements'

export default class VerifyCode extends React.Component {
    render(){
        return (
          <SafeAreaView>
            <View style={styles.container}>
                <Text h3 style={styles.container}>Loading...</Text>
            </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
