import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ingredientData: [],
  };

export const BurgerIngredientDetailsSlice = createSlice({
    name: 'ingredientdetails',
    initialState,
    reducers: {}
})

export default BurgerIngredientDetailsSlice.reducer;