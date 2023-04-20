import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData: [],
  };

export const BurgerConstructorSlice = createSlice({
    name: 'burgerconstr',
    initialState,
    reducers: {}
})

export const selectAllIngredients = (state) => state.burgerconstr.productData;
export default BurgerConstructorSlice.reducer;