import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    product: [],
    quantity: 0,
    totale: 0,
  },
  reducers: {
    addProductToCart: (state, action) => {
      state.quantity += 1;
      state.product.push(action.payload);
      state.totale += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addProductToCart } = cartSlice.actions;
export default cartSlice.reducer;
