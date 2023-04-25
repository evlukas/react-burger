import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

export const fetchIngredients = createAsyncThunk(
  "ingredients/fetchIngredients",
  async () => {
    const responce = await api.getIngredients();
    return responce.data;
  }
);

const initialState = {
  productData: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const BurgeringredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {
    incrementItem(state, action) {
      const targetId = action.payload;
      const targetItem = state.productData.find((ingr) => ingr._id === targetId);
      if (targetItem) {
        targetItem.__v = targetItem.type === "bun" ? 1 : targetItem.__v + 1;
        if (targetItem.type === "bun") {
          const anotherBunItem = state.productData.find(
            (item) => item.type === "bun" && item._id !== targetId
          );
          if (anotherBunItem) anotherBunItem.__v = 0;
        }
      }
    },
    decrementItem(state, action) {
      const targetId = action.payload;
      const foundItem = state.productData.find((ingr) => ingr._id === targetId);
      if (foundItem) {
        foundItem.__v--;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.productData = action.payload;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { incrementItem, decrementItem } = BurgeringredientsSlice.actions;
export const selectAllIngredients = (state) => state.ingredients.productData;
export default BurgeringredientsSlice.reducer;
