import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  wishProduct: [],
}

export const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {

    addWishList: (state, action) => {
      state.wishProduct.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addWishList } = wishListSlice.actions

export default wishListSlice.reducer