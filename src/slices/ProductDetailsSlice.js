import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  Details: [],
}

export const ProductDetailsSlice = createSlice({
  name: 'ProductDetails',
  initialState,
  reducers: {
    productDetail: (state, action) => {
      state.Details = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { productDetail} = ProductDetailsSlice.actions

export default ProductDetailsSlice.reducer