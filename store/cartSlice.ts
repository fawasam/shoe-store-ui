import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  attributes: any;
  selectedSize: number;
  quantity: number;
  oneQuantityPrice: number;
  key?: any;
  val?: any;
}

interface CartState {
  cartItems: Product[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //ADD TO CART
    addToCart: (state, action: PayloadAction<Product>) => {
      const item = state.cartItems.find((p: any) => p.id === action.payload.id);

      if (item) {
        item.quantity++;
        item.attributes.price = item.oneQuantityPrice * item.quantity;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },

    //UPDATE CART
    updateCart: (state, action) => {
      state.cartItems = state.cartItems.map((p) => {
        if (p.id === action.payload.id) {
          if (action.payload.key === "quantity") {
            p.attributes.price = p.oneQuantityPrice * action.payload.val;
          }
          return {
            ...p,
            [action.payload.key]: action.payload.val,
          };
        }
        return p;
      });
    },

    //REMOVE FROM  CART
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (p) => p.id !== action.payload.id
      );
    },
  },
});

export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
