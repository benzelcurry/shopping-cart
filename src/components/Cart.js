import React from 'react';
import Nav from './Nav';

const Cart = ({ cart, setCart }) => {
  return (
    <div>
      <Nav cart={cart} setCart={setCart}/>
      You're in the cart
    </div>
  );
};

export default Cart;