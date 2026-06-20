import { createEntityAdapter, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@src/app/store";
import type { Product } from "@src/shared/api/types/products";

type ProductAction = PayloadAction<{ id: number; changes: Partial<Product> }>;

const productAdapter = createEntityAdapter<Product>();

const productSlice = createSlice({
  name: "products",
  initialState: productAdapter.getInitialState(),
  reducers: {
    productsUpserted: productAdapter.upsertMany,

    productsUpdated: (state, action: ProductAction) => {
      productAdapter.updateOne(state, action.payload);
    },
  },
});

export const { productsUpserted, productsUpdated } = productSlice.actions;
export const productReducer = productSlice.reducer;
export const productSelectors = productAdapter.getSelectors((state: RootState) => state.products);
