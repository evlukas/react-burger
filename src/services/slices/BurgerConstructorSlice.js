import { createSlice } from "@reduxjs/toolkit";

const data = [
  {
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
  },
];

const initialState = {
  innerIngedient: data,
};

export const BurgerConstructorSlice = createSlice({
  name: "burgerconstr",
  initialState,
  reducers: {
    addIngredient(state, action) {
      let newIngredient = action.payload;

      if (newIngredient.type === "bun") {
        state.innerIngedient = state.innerIngedient.map((ingr) =>
          ingr.type === "bun" ? newIngredient : ingr
        );
      } else {
        state.innerIngedient.push(newIngredient);
      }
    },
    removeIngredient(state, action) {
      const id = action.payload;
      state.innerIngedient = state.innerIngedient.filter(
        (ing) => ing.id !== id
      );
    },
    reorderIngredients(state, action) {
      const bun = state.innerIngedient.find((ingr) => ingr.type === "bun");
      state.innerIngedient = [...action.payload, bun];
    },
  },
});

export const selectAllIngredients = (state) =>
  state.burgerconstr.innerIngedient;
export const { addIngredient, removeIngredient, reorderIngredients } =
  BurgerConstructorSlice.actions;
export default BurgerConstructorSlice.reducer;
