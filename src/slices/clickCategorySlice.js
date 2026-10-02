import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  categoryProduct: []
}

export const clickCategorySlice = createSlice({
  name: 'clickCategory',
  initialState,
  reducers: {
    Click: (state ,action)=> {

      state.categoryProduct = action.payload
    }

  }
})


export const { Click} = clickCategorySlice.actions



export default clickCategorySlice.reducer