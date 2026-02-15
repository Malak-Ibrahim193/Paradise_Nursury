import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      } else {
        existingItem.quantity += 1;
      }
      state.totalQuantity += 1;
      state.totalAmount += action.payload.price;
    },
    removeItem: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalAmount -= item.price * item.quantity;
        state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalAmount += item.price;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= item.price;
      }
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
