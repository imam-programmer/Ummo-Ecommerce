import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  wishProduct:localStorage.getItem("wishList")?JSON.parse(localStorage.getItem("wishList")) :[],
}

export const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {

    addWishList: (state, action) => {
      state.wishProduct.push(action.payload)
      localStorage.setItem("wishList",JSON.stringify(state.wishProduct))
    },
  },
})

// Action creators are generated for each case reducer function
export const { addWishList } = wishListSlice.actions

export default wishListSlice.reducer