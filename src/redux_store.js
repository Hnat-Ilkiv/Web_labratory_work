import { configureStore } from "@reduxjs/toolkit";
import waifusInCartReducer from "./kuns_in_cart";

export default configureStore({
	reducer: { waifusInCart: waifusInCartReducer }
});