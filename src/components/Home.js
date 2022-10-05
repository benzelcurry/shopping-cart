// Home page for website

import React from 'react';
import Nav from './Nav';
import Github from '../images/github.svg';
import '../stylesheets/Home.css';

const Home = ({ cart, setCart }) => {
  return (
    <div className='home-page'>
      <Nav cart={cart} setCart={setCart} />
      <div className='about'>
        <p>Welcome to Storedew Valley!</p>
        <p className='creator'>This is a fan-made site created by BenzelCurry &nbsp;
          <a href='https://github.com/benzelcurry'><img src={Github} alt='Github logo' className='github' /></a>
        </p>
        <p>
          Within this website, you'll find produce items from the popular farming sim
          game, Stardew Valley, for "sale." Prices have been modified to reflect rough estimates of
          what they'd go for in the average grocery store in real life using USD.
        </p>
        <p>
          The purpose of this site is to demonstrate routing skills using
          react-router-dom that were taught in The Odin Project's ReactJS
          curriculum.
        </p>
        <p>
          Special thanks to u/Cowsplay from Reddit for creating the font used
          in the navbar, and to ConcernedApe for developing Stardew Valley and
          creating the sprites and background image used in this website.
        </p>
      </div>
    </div>
  );
};

export default Home;