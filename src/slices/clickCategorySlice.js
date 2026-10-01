import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: []
}

export const clickCategorySlice = createSlice({
  name: 'clickCategory',
  initialState,
  reducers: {
    Click: (state ,action)=> {

      state.value += action.payload
    }

  }
})


export const { Click} = clickCategorySlice.actions



export default clickCategorySlice.reducer