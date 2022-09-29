import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Nav.css';

const Nav = () => {
  return (
    <div className='nav-container'>
      <Link to={'/'} className="home-btn">Home</Link>
      <Link to={'/Cart'} className="cart-btn">Cart</Link>
    </div>
  );
};

export default Nav;