import { createSlice } from "@reduxjs/toolkit";

const initialBun = {
  _id: "643d69a5c3f7b9001cfa093d",
  name: "Флюоресцентная булка R2-D3",
  type: "bun",
  proteins: 44,
  fat: 26,
  carbohydrates: 85,
  calories: 643,
  price: 988,
  image: "https://code.s3.yandex.net/react/code/bun-01.png",
  image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
  __v: 0,
};

const initialState = {
  innerIngedient: { bun: initialBun, ingredients: [] },
};

export const BurgerConstructorSlice = createSlice({
  name: "burgerconstr",
  initialState,
  reducers: {
    addIngredient(state, action) {
      let newIngredient = action.payload;
      newIngredient.type === "bun"
        ? (state.innerIngedient.bun = newIngredient)
        : state.innerIngedient.ingredients.push(newIngredient);
    },
    removeIngredient(state, action) {
      const id = action.payload;
      state.innerIngedient.ingredients =
        state.innerIngedient.ingredients.filter((ing) => ing.id !== id);
    },
    reorderIngredients(state, action) {
      state.innerIngedient.ingredients = [...action.payload];
    },
  },
});

export const selectAllIngredients = (state) =>
  state.burgerconstr.innerIngedient.ingredients;
export const selectBun = (state) => state.burgerconstr.innerIngedient.bun;
export const { addIngredient, removeIngredient, reorderIngredients } =
  BurgerConstructorSlice.actions;
export default BurgerConstructorSlice.reducer;
