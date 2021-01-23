import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {Context} from '../context/RecipesContext';
import { EvilIcons } from '@expo/vector-icons';

const RecipeScreen = ({ navigation }) => {
    const { state } = useContext(Context);    

    const recipe = state.find((recipe) => recipe.id === navigation.getParam('id'));

    return (
        <View>
            <Text>{recipe.title}</Text>
            <Text>{recipe.content}</Text>
        </View>
    )
}

RecipeScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('RecipeEdit', { id: navigation.getParam('id')})}>
            <EvilIcons name="pencil" size={30} />
          </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({

});

export default RecipeScreen;
