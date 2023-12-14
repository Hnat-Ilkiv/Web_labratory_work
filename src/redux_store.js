import { configureStore } from "@reduxjs/toolkit";
import kunsInCartReducer from "./kuns_in_cart";

export default configureStore({
	reducer: { kunsInCart: kunsInCartReducer }
});