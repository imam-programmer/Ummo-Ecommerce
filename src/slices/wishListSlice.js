import { createSlice } from '@reduxjs/toolkit'
// localStorage.clear()

const initialState = {
  wishProduct:localStorage.getItem("wishList")?JSON.parse(localStorage.getItem("wishList")) :[],
  boolean:null
}
localStorage.clear()
export const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {

    addWishList: (state, action) => {
        state.wishProduct.push(action.payload)
        localStorage.setItem("wishList",JSON.stringify(state.wishProduct)) 
    },
    deleteWishEndevisual:(state,action)=>{
      const filterEndevisual=state.wishProduct.filter(item=>item.id!==action.payload.id);
      state.wishProduct=filterEndevisual
      localStorage.setItem("wishList",JSON.stringify(state.wishProduct)) 
    },
    deletebydoubleckick:(state,action)=>{
    state.boolean=action.payload
    
    }
 
  },
})

// Action creators are generated for each case reducer function
export const { addWishList,deleteWishEndevisual,deletebydoubleckick } = wishListSlice.actions

export default wishListSlice.reducer