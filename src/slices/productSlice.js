import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products:[],
 filter:[],
 AllCat:true
 
}

export const counterSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state,action) => {
      state.products = action.payload
    },
    filterProduct: (state,action) => {
      state.filter = action.payload
    },
    allCat: (state,action) => {
      state.AllCat = action.payload
    },

  },
})

export const { addProduct, filterProduct,allCat} = counterSlice.actions
export default counterSlice.reducer