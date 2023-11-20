import { createSlice } from '@reduxjs/toolkit';

export const cart = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      // look for products already in cart with same id
      const existingProduct = state.items.find((item) => item.id === action.payload.id);

      if (existingProduct) {
        // if same product exists, increase qty by 1
        existingProduct.quantity += 1;
      } else {
        // if none, add payload to state, add new key quantity
        state.items.push({ ...action.payload, quantity: 1 }) 
      }
    },
    removeItem: (state, action) => {
      const existingProduct = state.items.find((item) => item.id === action.payload.id);

      if (existingProduct && existingProduct.quantity === 1) {
        // if product has only 1 quantity, filter out payload and remove item from state
        state.items = state.items.filter((item) => item.id !== action.payload.id)
      } else if (existingProduct) {
        existingProduct.quantity -= 1;
      }
    }
  }
});