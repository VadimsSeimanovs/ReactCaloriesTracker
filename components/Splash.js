import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button} from 'react-native-elements'

export default class VerifyCode extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text h3 style={styles.container}>Loading...</Text>
            </View>
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
