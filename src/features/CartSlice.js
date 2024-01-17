import { createSlice } from "@reduxjs/toolkit";

// Load cart state from local storage
const loadCartState = () => {
  const cartState = localStorage.getItem("cartState");
  return cartState
    ? JSON.parse(cartState)
    : { products: [], totalItem: 0, totalPrice: 0 };
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartState(), // Initialize with local storage data
  reducers: {
    addItemToCart: (state, action) => {
        console.log(state)
      state.products.push(action.payload);
      state.totalItem = state.products.length;
      state.totalPrice = state.products.reduce(
        (total, course) => total + course.price,
        0
      );

      console.log(state)
      // Save the updated cart state to local storage
      localStorage.setItem("cartState", JSON.stringify(state));
    },
    updateItemInCart: (state, action) => {
      const updatedItem = action.payload;
      const itemIndex = state.products.findIndex(
        (item) => item._id === updatedItem._id
      );
      if (itemIndex !== -1) {
        state.products[itemIndex] = updatedItem;
        // Save the updated cart state to local storage
        localStorage.setItem("cartState", JSON.stringify(state));
      }
    },
    removeItemFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      state.products = state.products.filter(
        (item) => item._id !== itemIdToRemove
      );
      state.totalItem = state.products.length;
      state.totalPrice = state.products.reduce(
        (total, course) => total + course.price,
        0
      );
      // Save the updated cart state to local storage
      localStorage.setItem("cartState", JSON.stringify(state));
    },
    removeAll: (state, action) => {

      state.products = [];
      state.totalItem = 0;
      state.totalPrice = 0;
      // Save the updated cart state to local storage
      localStorage.setItem("cartState", JSON.stringify(state));
    },
  },
});

export const { addItemToCart, updateItemInCart, removeItemFromCart, removeAll } =
  cartSlice.actions;

export default cartSlice.reducer;
