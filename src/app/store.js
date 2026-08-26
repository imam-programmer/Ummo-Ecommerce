import { configureStore } from '@reduxjs/toolkit'
import counterSlice  from '../slices/productSlice'
import  cartSlice  from '../slices/cartSlice'

export const store = configureStore({
  reducer: {
    Products:counterSlice,
    cart : cartSlice
  },
})