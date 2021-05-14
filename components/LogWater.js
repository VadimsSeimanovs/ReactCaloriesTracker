import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { Text, Image } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles/button';
import stylesSearchFood from './styles/searchFood'
var image = require('../assets/waterGlass.png')

export default class LogWater extends Component {
    render(){
        return (
            <SafeAreaView>
            <ScrollView>
            <View>
                <Text h3 style={{alignSelf:'center'}}>Log water</Text>
                <View style={styles.spaceBetweenButtons}></View>

                <Image source= {image}
                    style={stylesSearchFood.imageStyleWater}></Image>
                <Text h4 style={{alignSelf:'center'}}>250 ml</Text>

                <View style={styles.spaceBetweenButtons}></View>

                <Image source= {image}
                    style={stylesSearchFood.imageStyleWater}></Image>
                <Text h4 style={{alignSelf:'center'}}>250 ml</Text>

                <View style={styles.spaceBetweenButtons}></View>

                <Image source= {image}
                    style={stylesSearchFood.imageStyleWater}></Image>
                <Text h4 style={{alignSelf:'center'}}>250 ml</Text>

                <View style={styles.spaceBetweenButtons}></View>

                <Image source= {image}
                    style={stylesSearchFood.imageStyleWater}></Image>
                <Text h4 style={{alignSelf:'center'}}>250 ml</Text>

                <View style={styles.spaceBetweenButtons}></View>

                <Image source= {image}
                    style={stylesSearchFood.imageStyleWater}></Image>
                <Text h4 style={{alignSelf:'center'}}>250 ml</Text>

                <View style={styles.spaceBetweenButtons}></View>

                <Image source= {image}
                    style={stylesSearchFood.imageStyleWater}></Image>
                <Text h4 style={{alignSelf:'center'}}>250 ml</Text>

                <View style={styles.spaceBetweenButtons}></View>

                <Image source= {image}
                    style={stylesSearchFood.imageStyleWater}></Image>
                <Text h4 style={{alignSelf:'center'}}>250 ml</Text>

                <View style={styles.spaceBetweenButtons}></View>

                <Image source= {image}
                    style={stylesSearchFood.imageStyleWater}></Image>
                <Text h4 style={{alignSelf:'center'}}>250 ml</Text>
            </View>
            </ScrollView>
            </SafeAreaView>
    );
    }
}