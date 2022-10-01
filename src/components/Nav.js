import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Nav.css';

const Nav = ({ cart, setCart }) => {
  return (
    <div className='nav-container'>
      <div className="left-nav">
        <Link to={'/'} className="home-btn">Home</Link>
        <Link to={'/Store'} className='store-btn'>Store</Link>
      </div>
      <div className="title">Storedew Valley</div>
      <div className="right-nav">
        <div className="total-items">{cart}</div>
        <Link to={'/Cart'} className="cart-btn">Cart</Link>
      </div>
    </div>
  );
};

export default Nav;