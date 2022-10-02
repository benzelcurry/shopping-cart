import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Cart from './Cart';
import Store from './Store';

const RouteSwitch = () => {
  // Might need to implement something similar for Cart.js by
  // using `useState([])` so I can include multiple items
  const [cart, setCart] = useState(0);
  const [total, setTotal] = useState({
    cauliflower: 0,
    beets: 0,
    corn: 0,
    eggplant: 0,
    garlic: 0,
    greenBeans: 0,
    kale: 0,
    melons: 0,
    potatoes: 0,
    pumpkins: 0,
    starfruit: 0,
    strawberries: 0
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home cart={cart} setCart={setCart}/>} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} total={total} setTotal={setTotal}/>} />
        <Route path='/store' element={<Store cart={cart} setCart={setCart} total={total} setTotal={setTotal}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;