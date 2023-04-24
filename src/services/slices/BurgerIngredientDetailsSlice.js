import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ingredientData: {},
  };

export const BurgerIngredientDetailsSlice = createSlice({
    name: 'ingredientdetails',
    initialState,
    reducers: {
      getVisibleIngredient(state, action) {
        state.ingredientData = action.payload;
      },
    }
})

export const { getVisibleIngredient } = BurgerIngredientDetailsSlice.actions;
export default BurgerIngredientDetailsSlice.reducer;