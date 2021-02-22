import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, SafeAreaView, ScrollView } from 'react-native';
import { Button, Input, Text, Image } from 'react-native-elements'
import stylesSearchFood  from './styles/searchFood'
import styles  from './styles/button'
import { useNavigation } from '@react-navigation/native'
import FoodInformation from './FoodInformation';

const SearchFood = () => {

const [recipe, setRecipe] = useState('')
const [isLoading, setLoading]= useState(true)
const [data, setData]= useState([])
const navigation = useNavigation()

const renderItem = (item) => {
    console.log("item has: " + JSON.stringify(item))
    return(
        <ScrollView contentContainerStyle={stylesSearchFood.viewStyles}>
            <Image source={{uri: item.strMealThumb}}
                style={stylesSearchFood.imageStyles}
                onPress={() => navigation.navigate('FoodInformation', { 
                    recipeName: item.strMeal,
                    recipeImage: item.strMealThumb,
                    recipeIngredients: item.strMeasure1 + " " + item.strIngredient1 + ", "
                                    + item.strMeasure2 + " " + item.strIngredient2 + ", "
                                    + item.strMeasure3 + " " + item.strIngredient3 + ", "
                                    + item.strMeasure4 + " " + item.strIngredient4 + ", "
                                    + item.strMeasure5 + " " + item.strIngredient5 + ", "
                                    + item.strMeasure4 + " " + item.strIngredient6 + ", "
                                    + item.strMeasure7 + " " + item.strIngredient7 + ", "
                                    + item.strMeasure8 + " " + item.strIngredient8 + ", "
                                    + item.strMeasure9 + " " + item.strIngredient9 + ", "
                                    + item.strMeasure10 + " " + item.strIngredient10 + ", "
                                    + item.strMeasure11 + " " + item.strIngredient11 + ", "
                                    + item.strMeasure12 + " " + item.strIngredient12 + ", " 
                                    + item.strMeasure13 + " " + item.strIngredient13 + ", "
                                    + item.strMeasure14 + " " + item.strIngredient14 + ", "
                                    + item.strMeasure15 + " " + item.strIngredient15 + ", "
                                    + item.strMeasure16 + " " + item.strIngredient16 + ", "
                                    + item.strMeasure17 + " " + item.strIngredient17 + ", "
                                    + item.strMeasure18 + " " + item.strIngredient18 + ", "
                                    + item.strMeasure19 + " " + item.strIngredient19 + ", "
                                    + item.strMeasure20 + " " + item.strIngredient20,
                    recipeInstructions: item.strInstructions
                })}
            />
             <Text style={stylesSearchFood.textInput}>{item.strMeal}</Text>
      </ScrollView>
    )
}

const fetchApiCall = () => {
    fetch("https://themealdb.p.rapidapi.com/search.php?s=" + recipe, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "aa3fdecf10mshf0e65a6116e5830p124dfbjsna6616e047fe1",
            "x-rapidapi-host": "themealdb.p.rapidapi.com"
        }
    })
    .then((response) => response.json())
    .then((json) => setData(json.meals))
    .catch(function(error) {
    console.log('There has been a problem with your fetch operation: ' + error.message);
        // ADD THIS THROW error
        return    })
    .finally(setLoading(false))
    }

    return (
      <SafeAreaView>
          <View>
            <Input style={styles.textInput}
                placeholderTextColor='#707070'
                placeholder='Homemade recipe'
                onChangeText={recipe => setRecipe(recipe)}
                defaultValue={recipe}
            />
            
          </View>

        {isLoading ? (<ActivityIndicator />) :  (
        <FlatList 
            data={data}
            keyExtractor={(item, index) => item.idMeal}
            renderItem={({item}) => renderItem(item)}
        /> 
        )}
        
        <View>
            <Button title="Search" raised onPress={fetchApiCall}/>
      </View>
      </SafeAreaView>
  );
}

export default SearchFood;