import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Text, Image } from 'react-native-elements'
import styles from './styles/button';
import stylesFoodInformation  from './styles/foodInformation'

const FoodInformation = ({route}) => {

const { recipeName } = route.params;
const { recipeImage } = route.params;
const { recipeIngredients } = route.params;
const { recipeInstructions } = route.params;

    return (
      <SafeAreaView contentContainerStyle={stylesFoodInformation.container}>
        <ScrollView contentContainerStyle={stylesFoodInformation.scrollView}>
          <Text style={stylesFoodInformation.textWithImage}>{"Recipe name: " + recipeName}

            <Image source={{uri: recipeImage}}
                style={stylesFoodInformation.imageStyles}
            />
          </Text>

          <Text style={stylesFoodInformation.text}>
            <Text style={{fontWeight:'bold'}}>{"Ingredients: "}</Text>
            <Text>{recipeIngredients}</Text>
          </Text>

          <Text style={stylesFoodInformation.text}>
           <Text style={{fontWeight:'bold'}}>{"Instructions: "}</Text>
            <Text>{recipeInstructions}</Text>
          </Text>
        </ScrollView>
      </SafeAreaView>
  );
}

export default FoodInformation;