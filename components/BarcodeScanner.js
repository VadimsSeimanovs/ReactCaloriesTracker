import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'
import { BarCodeScanner } from 'expo-barcode-scanner';
import UserProvider from './Firebase';
import styles  from './styles/button'

export default class BarcodeScanner extends React.Component{
  constructor(props) {
    super(props);

    this.scannedCode = null;

    this.state = {
      hasCameraPermission: null,
      isBarcodeScannerEnabled: true
    }

    this.onBarCodeRead = this.onBarCodeRead.bind(this);
  }

  
 async componentDidMount (){
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      this.setState({hasCameraPermission: status === 'granted'});
  }

  onBarCodeRead({type, data}){
    console.log(this.state.isBarcodeScannerEnabled)
    if(this.state.isBarcodeScannerEnabled){
      this.setState({scannedItem: {data,type}});
      UserProvider.init();
      var barcodeIdentifier = data;
      UserProvider.getItem(barcodeIdentifier)
      //alert(data)
      this.setState({
        isBarcodeScannerEnabled: false
      })
    }




    // this.setState({scannedItem: {data,type}});
    // UserProvider.init();
    // var barcodeIdentifier = this.state.scannedItem.data;
    // console.log("barcodeIdentifier: " + barcodeIdentifier)
    // UserProvider.getItem(barcodeIdentifier)
    // if(!UserProvider.getItem(barcodeIdentifier) === undefined ||  !UserProvider.getItem(barcodeIdentifier) === "" ||  !UserProvider.getItem(barcodeIdentifier) == null){
    //   //this.setState({scanned = true});
    //   alert(`Item found, please add the item to the database`);
    // }
    // else{
    //   alert('item not found!')
    // }
    // // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  }

  render(){
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }


    return (
      <View style={stylesH.container}>
        <View style={{ flex: 1 }}>
  
          <BarCodeScanner
            onBarCodeScanned={this.onBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
          <View style={styles.spaceBetweenButtons}></View>
          
          <Button title={'Add New Item'} clear 
            onPress = {() => {this.props.navigation.navigate("AddItem", {barcodeId: this.state.scannedItem.data})}}
          />

          <View style={styles.spaceBetweenButtons}></View>
          
          <Button title={'Scan Again'} clear 
            onPress = {() => {this.state.isBarcodeScannerEnabled = true}}
          />
        </View>
      </View>
      
    );
  }
}

const stylesH = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  scanScreenMessage: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

// export default function BarcodeScanner(navigation){
//     const [hasPermission, setHasPermission] = useState(null);
//     const [scanned, setScanned] = useState(false);
//     const [notExists , setExistance] = useState(false);

//     useEffect(() => {
//         (async () => {
//           const { status } = await BarCodeScanner.requestPermissionsAsync();
//           setHasPermission(status === 'granted');
//         })();
//       }, []);

//       const handleBarCodeScanned = ({ type, data }) => {
//         setScanned(true);
//         UserProvider.init();
//         if(UserProvider.getItem(data) == null){
//           setExistance(true);
//           alert(`Item not found, please add the item to the database`);
         
//         }
//         alert(`Bar code with type ${type} and data ${data} has been scanned!`);
//       };

//       if (hasPermission === null) {
//         return <Text>Requesting for camera permission</Text>;
//       }
//       if (hasPermission === false) {
//         return <Text>No access to camera</Text>;
//       }

//     return (
//     <View
//         style={{
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'flex-end',
//         }}>

//         <BarCodeScanner
//         onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
//         style={StyleSheet.absoluteFillObject}
//         />

//         {scanned && <Button title={'Tap to Scan Again'} clear onPress={() => setScanned(false)} />}
//         {scanned && <Button title={'Add new Item'} clear 
//         onPress = {() => {navigation.navigate("AddItems")}}/>}
//         {/* onPress={ () => setExistance(false)}  */}
//     </View>
//     );
// }
