import { configureStore } from '@reduxjs/toolkit'
import counterSlice  from '../slices/productSlice'

export const store = configureStore({
  reducer: {
    Products:counterSlice
  },
})