import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { ProductType } from "../types";

// Define a type for the slice state
interface CartState {
  cart: ProductType[];
}

// Define the initial state using that type
const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      state.cart.push(action.payload);
    },
    updateProductCount: (state, action: PayloadAction<{ productId: string; count: number }>) => {
      const { productId, count } = action.payload;
      const product = state.cart.find((p) => p.id === productId);

      if (product) {
        product.count = count;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, updateProductCount, clearCart } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart.cart;

export default cartSlice.reducer;
