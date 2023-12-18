import { createSlice } from "@reduxjs/toolkit";

export const kunsInCartSlice = createSlice({
  name: "kunsInCart",
  initialState: {
    kuns: [],
    loading: false,
  },
  reducers: {
    addToCart: (state, action) => {
      state.kuns.push(action.payload);
    },

    removeFromCart: (state, action) => {
      state.kuns = state.kuns.filter(
        (kun) => kun.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart, setKunsInCart } =
  kunsInCartSlice.actions;

export default kunsInCartSlice.reducer;