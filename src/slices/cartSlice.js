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
    quentityIncrease:(state,action)=>{
     let f=state.products.find(item=>item.id==action.payload.id);
       if(f){
        f.quantity++
        localStorage.setItem("carts",JSON.stringify(state.products))
       }
    },
    quentityDecrease:(state,action)=>{
      let Dec=state.products.find(item=>item.id==action.payload.id)
      if(Dec){
        Dec.quantity--
        if(Dec.quantity<1){
           let FilterCart=state.products.filter(item=>item.id!=action.payload.id)
      state.products=FilterCart
      localStorage.setItem("carts",JSON.stringify(state.products))
        }
        localStorage.setItem("carts",JSON.stringify(state.products))
      }

    },
    RemoveItem:(state,action)=>{
      console.log(state)
      let FilterCart=state.products.filter(item=>item.id!=action.payload.id)
      state.products=FilterCart
      localStorage.setItem("carts",JSON.stringify(state.products))
    }
  },
});

// Action creators are generated for each case reducer function
export const { addToCart,quentityIncrease,quentityDecrease ,RemoveItem} = cartSlice.actions;

export default cartSlice.reducer;
