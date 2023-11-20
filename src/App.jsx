import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Cart } from "./components/Cart";
import { Products } from "./components/Products";

import { cart } from './reducers/cart';
import { products } from './reducers/products';

// pull reducers together
const reducer = combineReducers({
  cart: cart.reducer,
  products: products.reducer
});

// create store by using combined reducer created above
const store = configureStore({ reducer }); 

export const App = () => (
  <>
    <Provider store={store} >
      <Cart />
      <Products />
    </Provider>
  </>
);
