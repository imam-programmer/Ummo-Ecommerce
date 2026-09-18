import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    Products: []
 
 }

export const AllProductSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    Allitem: (state,action) => {
      state.Products=action.payload
    },
  

  },
})

export const { Allitem } = AllProductSlice.actions

export default AllProductSlice.reducer