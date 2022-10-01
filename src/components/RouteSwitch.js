import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Cart from './Cart';
import Store from './Store';

const RouteSwitch = () => {
  // Might need to implement something similar for Cart.js by
  // using `useState([])` so I can include multiple items
  const [cart, setCart] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home cart={cart} setCart={setCart}/>} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>} />
        <Route path='/store' element={<Store cart={cart} setCart={setCart}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;