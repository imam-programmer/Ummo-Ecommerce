import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: localStorage.getItem("carts")
    ? JSON.parse(localStorage.getItem("carts"))
    : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let findunic = state.products.find(
        (fitem) => fitem.id === action.payload.id,
      );
      if (findunic) {
        findunic.quantity++;
        localStorage.setItem("carts", JSON.stringify(state.products));
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
        localStorage.setItem("carts", JSON.stringify(state.products));
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
