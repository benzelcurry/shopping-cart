// Component for user's cart display

import React from 'react';
import Nav from './Nav';
import '../stylesheets/Cart.css'

const Cart = ({ cart, setCart, total, setTotal }) => {
  // Write function to hide items from display if user doesn't have any in their cart
  return (
    <div>
      <Nav cart={cart} setCart={setCart}/>
      <div className="cart-container">
        <div className="item">Cauliflower: {total.cauliflower}</div>
        <div className="item">Beets: {total.beets}</div>
        <div className="item">Corn: {total.corn}</div>
        <div className="item">Eggplant: {total.eggplant}</div>
        <div className="item">Garlic: {total.garlic}</div>
        <div className="item">Green beans: {total.greenBeans}</div>
        <div className="item">Kale: {total.kale}</div>
        <div className="item">Melons: {total.melons}</div>
        <div className="item">Potatoes: {total.potatoes}</div>
        <div className="item">Pumpkins: {total.pumpkins}</div>
        <div className="item">Starfruit: {total.starfruit}</div>
        <div className="item">Strawberries: {total.strawberries}</div>
      </div>
    </div>
  );
};

export default Cart;