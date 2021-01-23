import React, { useContext } from 'react';
import { Context } from '../context/RecipesContext';
import RecipeForm from '../components/RecipeForm';

const RecipeEditScreen = ({ navigation }) => {   
    console.log(navigation)
    const { state, editRecipe } = useContext(Context);
    const id = navigation.getParam('id')
    const recipe = state.find(recipe => recipe.id === id);
    const labels = {
        title: 'Edit Title',
        content: 'Edit Content',
        button: 'Save Changes'
    }

    return (
        <RecipeForm
            labels={labels}
            initialValues={{ title: recipe.title, content: recipe.content }}
            onSubmit={(title, content) => editRecipe( id, title, content, () => navigation.pop())}
        />
    )
}

export default RecipeEditScreen;
