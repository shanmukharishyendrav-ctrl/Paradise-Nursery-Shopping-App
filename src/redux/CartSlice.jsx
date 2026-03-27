import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalAmount: 0,
  totalItems: 0,
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((p) => p.id === item.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.items.push({
          ...item,
          quantity: 1,
          totalPrice: item.price,
        });
      }
      
      state.totalItems += 1;
      state.totalAmount = state.items.reduce((acc, item) => acc + item.totalPrice, 0);
    },

    removeItem: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((p) => p.id === itemId);
      
      if (item) {
        state.totalItems -= item.quantity;
        state.items = state.items.filter((p) => p.id !== itemId);
      }
      
      state.totalAmount = state.items.reduce((acc, item) => acc + item.totalPrice, 0);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((p) => p.id === id);
      
      if (item) {
        const previousQuantity = item.quantity;
        item.quantity = quantity;
        item.totalPrice = quantity * item.price;
        
        state.totalItems = state.totalItems - previousQuantity + quantity;
      }
      
      state.totalAmount = state.items.reduce((acc, item) => acc + item.totalPrice, 0);
    },

    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
      state.totalItems = 0;
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
