import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@src/app/store";

const initialState: number[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartProductAdded: (state, action: PayloadAction<number>) => {
      if (!state.includes(action.payload)) state.push(action.payload);
    },
    cartProductRemoved: (state, action: PayloadAction<number>) => {
      const productIndex = state.indexOf(action.payload);
      if (productIndex >= 0) state.splice(productIndex, 1);
    },
    cartCleared: () => initialState,
  },
});

export const { cartCleared, cartProductAdded, cartProductRemoved } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

export const selectCartProductIds = (state: RootState) => state.cart;
export const selectCartItemsCount = (state: RootState) =>
  state.cart.reduce((total, productId) => total + (state.products.entities[productId]?.cartCount ?? 0), 0);
export const selectCartTotal = (state: RootState) =>
  state.cart.reduce((total, productId) => {
    const product = state.products.entities[productId];
    return total + (product ? product.price * (product.cartCount ?? 0) : 0);
  }, 0);
