import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const data = [
  {
    _id: "60666c42cc7b410027a1a9b1",
    name: "Краторная булка N-200i",
    type: "bun",
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: "https://code.s3.yandex.net/react/code/bun-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
    __v: 0,
    id: uuid()
  },
];

const initialState = {
  innerIngedient: data,
  ingredientCounter: 2,
};

export const BurgerConstructorSlice = createSlice({
  name: "burgerconstr",
  initialState,
  reducers: {
    addIngredient(state, action) {
      let newIngredient = action.payload;
      newIngredient = {...newIngredient, id: uuid()}

      if (newIngredient.type === "bun") {
        state.innerIngedient = state.innerIngedient.map((ingr) =>
          ingr.type === "bun" ? newIngredient : ingr
        );
      } else {
        state.innerIngedient.push(newIngredient);
        state.ingredientCounter += 1;
      }
    },
    removeIngredient(state, action) {
      const id = action.payload;
      state.innerIngedient = state.innerIngedient.filter((ing) => ing.id !== id);
      state.ingredientCounter -= 1;
    },
    reorderIngredients(state, action) {
      const bun = state.innerIngedient.find((ingr) => ingr.type === "bun")
      state.innerIngedient = [...action.payload, bun]
    }
  },
});

export const selectAllIngredients = (state) =>
  state.burgerconstr.innerIngedient;
export const { addIngredient, removeIngredient, reorderIngredients } = BurgerConstructorSlice.actions;
export default BurgerConstructorSlice.reducer;
