import { configureStore } from "@reduxjs/toolkit";
import constructorReducer from "./slices/BurgerConstructorSlice"; 
import ingredientsReducer from "./slices/BurgeringredientsSlice"; 
import orderReducer from "./slices/BurgerOrderSlice"
import ingDetailsReducer from "./slices/BurgerIngredientDetailsSlice"

export const store = configureStore({
    reducer: {
        burgerconstr: constructorReducer, 
        ingredients: ingredientsReducer,
        burgerorder: orderReducer,
        ingdetails: ingDetailsReducer,
    }
})

