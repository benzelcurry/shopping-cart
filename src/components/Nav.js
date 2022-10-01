import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Nav.css';

const Nav = () => {
  return (
    <div className='nav-container'>
      <div className="left-nav">
        <Link to={'/'} className="home-btn">Home</Link>
        <Link to={'/Store'} className='store-btn'>Store</Link>
      </div>
      <Link to={'/Cart'} className="cart-btn">Cart</Link>
    </div>
  );
};

export default Nav;