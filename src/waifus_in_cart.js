// waifusInCartSlice.js

import { createSlice } from "@reduxjs/toolkit";

export const waifusInCartSlice = createSlice({
  name: "waifusInCart",
  initialState: {
    waifus: [],
    loading: false,
  },
  reducers: {
    addToCart: (state, action) => {
      state.waifus.push(action.payload);
    },

    removeFromCart: (state, action) => {
      state.waifus = state.waifus.filter(
        (waifu) => waifu.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart, setWaifusInCart } =
  waifusInCartSlice.actions;

export default waifusInCartSlice.reducer;