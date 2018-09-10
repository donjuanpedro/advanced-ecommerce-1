import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import state from './state';

const {
  products,
  numberOfItemsInCart,
  } = state;

ReactDOM.render(
  <App 
  numberOfItemsInCart={state.numberOfItemsInCart}
  products={state.products}/>,
  document.getElementById('root')
);
