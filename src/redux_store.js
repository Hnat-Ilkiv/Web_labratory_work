import { configureStore } from "@reduxjs/toolkit";
import waifusInCartReducer from "./waifus_in_cart";

export default configureStore({
  reducer: { waifusInCart: waifusInCartReducer },
});