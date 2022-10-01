import React from 'react';
import Nav from './Nav';

const Store = ({ cart, setCart }) => {
  return (
    <div>
      <Nav cart={cart} setCart={setCart}/>
      Items for sale go here
    </div>
  );
};

export default Store;