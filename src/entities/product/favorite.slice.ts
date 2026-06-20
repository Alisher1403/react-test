import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@src/app/store";

const initialState: number[] = [];

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    favoriteToggled: (state, action: PayloadAction<number>) => {
      const productIndex = state.indexOf(action.payload);

      if (productIndex >= 0) {
        state.splice(productIndex, 1);
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { favoriteToggled } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
export const selectFavoriteProductIds = (state: RootState) => state.favorites;
