import createDataContext from './createDataContext';

const recipeReducer = (state, action) => {
    switch (action.type) {
        case 'add_recipe':
            return [
                ...state, 
                {
                    id: `R${Math.floor(Math.random() * 999999)}`,
                    title: action.payload.title,
                    content: action.payload.content
                }
            ];
        case 'delete_recipe':
            return state.filter((recipe) => recipe.id !== action.payload );
        default:
            return state;
    }
};

const addRecipe = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: 'add_recipe', payload: { title, content } });
        callback();
    };  
};

const deleteRecipe = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_recipe', payload: id });
    };  
};

export const { Context, Provider } = createDataContext(
    recipeReducer,
    { addRecipe, deleteRecipe },
    []
);