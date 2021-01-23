import React, { useContext } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Context as RecipesContext} from '../context/RecipesContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const { state, addRecipe, deleteRecipe } = useContext(RecipesContext);

    return (
        <View>
            <Text>Recipes</Text>
            <Button title="Add Recipe" onPress={addRecipe} />
            <FlatList
                data={state}
                keyExtractor={(recipe) => recipe.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.row}>
                            <TouchableOpacity onPress={() => navigation.navigate('Recipe')}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => deleteRecipe(item.id)}>
                                <Feather style={styles.icon} name="trash" />
                            </TouchableOpacity>
                        </View>        
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;
