import React from "react";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MeakDetailScreen";
import {Platform} from "react-native";
import Colors from "../constants/Colors";
import {createBottomTabNavigator} from 'react-navigation-tabs'
import FavoritesScreen from "../screens/FavoritesScreen";
import {Ionicons} from "@expo/vector-icons";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";


const MealsNavigator = createStackNavigator({
    Categories: {
        'screen': CategoriesScreen,
    },
    CategoryMeals: {
        'screen': CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
}, {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ?
                Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ?
            'white' : Colors.primaryColor
    }
})

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                console.log(tabInfo)
                return (
                    <Ionicons
                        name='ios-restaurant'
                        size={25}
                        color={tabInfo.tintColor}
                    />
                )
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            // tabBarLabel:'Favorites!!!!!!!!!!',
            tabBarIcon: tabInfo => {

                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.acceptColor
        }
    }
}

const MealsFavTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: Colors.acceptColor,
        shifting:true
    })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: Colors.acceptColor
        }
    })


export default createAppContainer(MealsFavTabNavigator);