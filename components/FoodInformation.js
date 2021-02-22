import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';
import { Text, Image } from 'react-native-elements'
import stylesSearchFood  from './styles/searchFood'

const FoodInformation = ({route}) => {

const { recipeName } = route.params;
const { recipeImage } = route.params;
const { recipeIngredients } = route.params;
const { recipeInstructions } = route.params;

    return (
      <ScrollView>
        <SafeAreaView contentContainerStyle={stylesSearchFood.viewStyles}>
            <Text style={stylesSearchFood.textInput}>{"Recipe name: " + recipeName}</Text>

            <Text style={stylesSearchFood.textInput}>{"Ingredients: " + recipeIngredients}</Text>

            <Text style={stylesSearchFood.textInput}>{"Instructions: " + recipeInstructions}</Text>

            <Image source={{uri: recipeImage}}
                style={stylesSearchFood.imageStyles}
            />
        </SafeAreaView>
      </ScrollView>
  );
}

export default FoodInformation;