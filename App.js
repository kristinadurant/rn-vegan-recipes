import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Provider as RecipesProvider } from './src/context/RecipesContext';
import IndexScreen from './src/screens/IndexScreen';
import RecipeScreen from './src/screens/RecipeScreen';
import RecipeCreateScreen from './src/screens/RecipeCreateScreen';
import RecipeEditScreen from './src/screens/RecipeEditScreen';

const navigator = createStackNavigator({
  Index: IndexScreen,
  Recipe: RecipeScreen,
  RecipeCreate: RecipeCreateScreen,
  RecipeEdit: RecipeEditScreen
  }, {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Vegan Recipes'
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <RecipesProvider>
      <App />
    </RecipesProvider>
  );
}