import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "@src/entities/product/product.slice";

export const rootReducer = combineReducers({
  products: productReducer,
});
