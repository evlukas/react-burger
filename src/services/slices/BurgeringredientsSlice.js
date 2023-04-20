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
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
}

export const BurgeringredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.productData = action.payload; 
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});



export const selectAllIngredients = (state) => state.ingredients.productData;
export default BurgeringredientsSlice.reducer;
