import React from 'react';
import Nav from './Nav';

const Home = ({ cart, setCart }) => {
  return (
    <div>
      <Nav cart={cart} setCart={setCart} />
      <button onClick={() => setCart(cart + 1)}>Add To Cart</button>
      Home Page
    </div>
  );
};

export default Home;