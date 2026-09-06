import { configureStore } from '@reduxjs/toolkit'
import counterSlice  from '../slices/productSlice'
import  cartSlice  from '../slices/cartSlice'
import  wishListSlice  from '../slices/wishListSlice'

export const store = configureStore({
  reducer: {
    Products:counterSlice,
    cart : cartSlice,
    wishList:wishListSlice
  },
})