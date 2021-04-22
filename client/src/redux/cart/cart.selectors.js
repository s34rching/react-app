import { createSelector } from 'reselect';

export const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems,
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((count, item) => count + item.quantity, 1),
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((count, item) => count + item.quantity * item.price, 0),
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden,
);
