import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { Context as RecipesContext} from '../context/RecipesContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {
    const { state, addRecipe } = useContext(RecipesContext);

    return (
        <View>
            <Text>Recipes</Text>
            <Button title="Add Recipe" onPress={addRecipe} />
            <FlatList
                data={state}
                keyExtractor={(recipe) => recipe.title}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Feather style={styles.icon} name="trash" />
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
