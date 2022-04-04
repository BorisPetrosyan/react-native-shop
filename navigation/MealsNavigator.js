import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MeakDetailScreen";
import {Platform} from "react-native";
import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator({
    'Categories': {
        screen:CategoriesScreen,
        navigationOptions:{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
        }
    },
    'CategoryMeals': {
        'screen': CategoryMealScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
        }
    },
    'MealDetail': MealDetailScreen
})

export default createAppContainer(MealsNavigator);