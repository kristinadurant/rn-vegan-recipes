import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Context} from '../context/RecipesContext';

const RecipeScreen = ({ navigation }) => {
    const { state } = useContext(Context);    

    const recipe = state.find((recipe) => recipe.id === navigation.getParam('id'));

    return (
        <View>
            <Text>{recipe.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default RecipeScreen;
