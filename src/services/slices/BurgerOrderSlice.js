import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";
import uuid from "react-uuid";

const initialState = {
  orderDetails: {}, // order.number | order.name
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const sendIngredients = createAsyncThunk(
  "burgerorder/sendIngredients",
  async (data) => {
    const response = await api.postIngredients(data);
    return response.data;
  }
);

export const BurgerOrderSlice = createSlice({
  name: "burgerorder",
  initialState,
  reducers: {
    emptyInner(state, action) {
      state.error = state.error === "Вы забыли наполнить свой бургер! Мы не делаем бургер из двух булок :)"
  ? "Мы не делаем бургер из двух булок :) Вы забыли наполнить свой бургер!"
  : "Вы забыли наполнить свой бургер! Мы не делаем бургер из двух булок :)";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendIngredients.pending, (state) => {
        state.error = null;
        state.status = 'loading';
      })
      .addCase(sendIngredients.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.orderDetails = action.payload; 
      })
      .addCase(sendIngredients.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export const { emptyInner } = BurgerOrderSlice.actions;
export const selectOrderDetails = (state) => state.burgerorder.orderDetails;
export const getOrderStatus = (state) => state.burgerorder.status;
export const getOrderError = (state) => state.burgerorder.error;
export default BurgerOrderSlice.reducer;
