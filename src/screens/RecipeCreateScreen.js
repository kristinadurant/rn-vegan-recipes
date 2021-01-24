import React, { useContext } from 'react';
import { Context } from '../context/RecipesContext';
import RecipeForm from '../components/RecipeForm';

const RecipeCreateScreen = ({ navigation }) => {
    const { addRecipe } = useContext(Context);
    const labels = {
        title: 'Add Title',
        content: 'Add Content',
        button: 'Add Recipe'
    }

    return (
            <RecipeForm 
                labels={labels}
                onSubmit={(title, content) => {
                    addRecipe(title, content, () => navigation.navigate('Index'));
                }}
            />
    )
}

export default RecipeCreateScreen;
