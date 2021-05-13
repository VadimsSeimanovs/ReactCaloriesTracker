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
const [titles, setTitles]= useState([])
const navigation = useNavigation()

const renderItem = (item) => {
    console.log(JSON.stringify(item))
    return(
        <ScrollView contentContainerStyle={stylesSearchFood.viewStyles}>
            <Text style={stylesSearchFood.textInput}>{JSON.stringify(item.title).replace('{', '').replace('}', '').replace('"', '').replace('"', '').replace('"', '').replace('"', '')}</Text>
            {/* <Image source={{uri: item.strMealThumb}}
                style={stylesSearchFood.imageStyles}
                onPress={() => navigation.navigate('FoodInformation', { 
                    recipeName: item.strMeal,
                    recipeImage: item.strMealThumb,
                    recipeIngredients: item.strMeasure1 + " " + item.strIngredient1 + ", "
                                    + item.strMeasure2 + " " + item.strIngredient2 + ", "
                                    + item.strMeasure3 + " " + item.strIngredient3 + ", "
                    recipeInstructions: item.strInstructions
                })}
            />
             <Text style={stylesSearchFood.textInput}
             onPress={() => navigation.navigate('FoodInformation', { 
                recipeName: item.strMeal,
                recipeImage: item.strMealThumb,
                recipeIngredients: item.strMeasure1 + " " + item.strIngredient1 + ", "
                                + item.strMeasure2 + " " + item.strIngredient2 + ", "
                recipeInstructions: item.strInstructions
            })}>{item.strMeal}</Text> */}
      </ScrollView>
    )
}

const fetchApiCall = () => {
    fetch("http://192.168.1.124:8000/nutrients/?recipeName=" + recipe)
    .then((response) => response.json())
    .then((json) => setData(json.nutritions))
    .catch(function(error) {
    console.log('There has been a problem with your fetch operation: ' + error.message);
        return    })
    .finally(setLoading(false))
}

const fetchApiCallTitles = () => {
    fetch("http://192.168.1.124:8000/?recipeName=" + recipe)
    .then((response) => response.json())
    .then((json) => setTitles(json.allTitles))
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
            numColumns={1}
            data={titles}
            extraData={data}
            initialNumToRender={5}
            keyExtractor={item => item.id}
            renderItem={({item}) => renderItem(item)}
        /> 
        )}

        {/* {isLoading ? (<ActivityIndicator />) :  (
        <FlatList 
            data={titles}
            keyExtractor={(item, index) => item.title}
            renderItem={({item}) => renderItem(item)}
        /> 
        )} */}
        
        <View>
            <Button title="Search" raised onPress= {() => {fetchApiCall(); fetchApiCallTitles()}}/>
      </View>
      </SafeAreaView>
  );
}

export default SearchFood;