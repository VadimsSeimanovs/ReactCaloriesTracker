import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'
import { BarCodeScanner } from 'expo-barcode-scanner';
import UserProvider from './Firebase';

export default function BarcodeScanner(){
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [notExists , setExistance] = useState(false);

    useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);

      const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        UserProvider.init();
        if(UserProvider.getItem(data) == null){
          setExistance(true);
          alert(`Item not found, please add the item to the database`);
         
        }
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      };

      if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }

    return (
    <View
        style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        }}>

        <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
        />

        {scanned && <Button title={'Tap to Scan Again'} clear onPress={() => setScanned(false)} />}
        {scanned && <Button title={'Add new Item'} clear 
        onPress = {() => {navigation.navigate("AddItems")}}/>}
        {/* onPress={ () => setExistance(false)}  */}
    </View>
    );
}
