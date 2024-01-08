import { createSelector } from 'reselect';

const selectCartReducer = (state) => state.cart;

//memoization
export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

//memoization
export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

//memoization
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);

//memoization
export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);