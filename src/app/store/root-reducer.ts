import { combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "@src/entities/product/cart.slice";
import { favoriteReducer } from "@src/entities/product/favorite.slice";
import { productReducer } from "@src/entities/product/product.slice";

export const rootReducer = combineReducers({
  products: productReducer,
  favorites: favoriteReducer,
  cart: cartReducer,
});
