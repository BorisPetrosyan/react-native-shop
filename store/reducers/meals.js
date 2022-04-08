import { MEALS} from "../../data/dummy-data";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMealsL: []
}


const mealsReducer = (state = initialState, action) => {

    return state;
}


export  default mealsReducer