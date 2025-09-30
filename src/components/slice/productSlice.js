import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    cartItem: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
  },
  reducers: {
    addToCart: (state, action) => {
      // console.log(action.payload);
      let findProduct = state.cartItem.findIndex((item) => item.id == action.payload.id)
      if (findProduct !== -1) {
        state.cartItem[findProduct].quantity += 1
        localStorage.setItem("cart", JSON.stringify(state.cartItem))
      } else {
        state.cartItem = [...state.cartItem, action.payload]
        localStorage.setItem("cart", JSON.stringify(state.cartItem))
      }
    },
    increment: (state, action) => {
      state.cartItem[action.payload].quantity += 1
      localStorage.setItem("cart", JSON.stringify(state.cartItem))
    },
    decrement: (state, action) => {
      if(state.cartItem[action.payload].quantity > 0){
        state.cartItem[action.payload].quantity -= 1
        localStorage.setItem("cart", JSON.stringify(state.cartItem))
      }
    },
    productRemove:(state, action) =>{
      state.cartItem.splice(action.payload, 1)
       localStorage.setItem("cart", JSON.stringify(state.cartItem))
    },
    cartDelete:(state, action) =>{
      state.cartItem.splice(action.payload, 1)
       localStorage.setItem("cart", JSON.stringify(state.cartItem))
    },
  }
})

export const { addToCart, increment, decrement, productRemove,cartDelete } = productSlice.actions

export default productSlice.reducer