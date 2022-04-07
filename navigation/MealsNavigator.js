import React from "react";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MeakDetailScreen";
import {Platform ,Text} from "react-native";
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
        headerTitleStyle: {
            fontFamily:'open-sans-bold'
        },
        headerBackTitleStyle:{
            fontFamily:'open-sans'
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
                return (
                    <Ionicons
                        name='ios-restaurant'
                        size={25}
                        color={tabInfo.tintColor}
                    />
                )
            },
            tabBarColor: Colors.primaryColor,
            tabBarLabel: Platform.OS === 'android'? <Text style={{fontFamily:'open-sans'}}>Meals</Text>: 'Meals'

        }
    },
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            // tabBarLabel:'Favorites!!!!!!!!!!',
            tabBarIcon: tabInfo => {

                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.acceptColor,
            tabBarLabel: Platform.OS === 'android'? <Text style={{fontFamily:'open-sans'}}>Favorites</Text>: 'Favorites'
        }
    }
}

const MealsFavTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: 'white',
        shifting:true,
        barStyle: {
            backgroundColor: Colors.primaryColor
        }
    })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
             labelStyle:{
                 fontFamily:'open-sans'
             },
            activeTintColor: Colors.acceptColor
        }
    })


export default createAppContainer(MealsFavTabNavigator);