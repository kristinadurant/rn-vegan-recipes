import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const recipeReducer = (state, action) => {
    switch (action.type) {
        case 'get_recipe':
            return action.payload;
        case 'edit_recipe':
            return state.map((recipe) => {
                return recipe.id === action.payload.id
                    ?  action.payload
                    : recipe;
            });
        case 'delete_recipe':
            return state.filter((recipe) => recipe.id !== action.payload );
        default:
            return state;
    }
};

const getRecipe = dispatch => {
    return async () => {
        const response = await jsonServer.get('/recipe');
        dispatch({ type: 'get_recipe', payload: response.data});
    }
}

const addRecipe = () => {
    return async (title, content) => {
        await jsonServer.post('/recipe', {title, content});
    };  
};

const editRecipe = dispatch => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/recipe/${id}`, { title, content });
        dispatch({ type: 'edit_recipe', payload: { title, content} });
        callback();
    };  
};

const deleteRecipe = dispatch => {
    return async (id) => {
        await jsonServer.delete(`/recipe/${id}`);
        dispatch({ type: 'delete_recipe', payload: id });
    };  
};

export const { Context, Provider } = createDataContext(
    recipeReducer,
    { addRecipe, deleteRecipe, editRecipe, getRecipe },
    []
);