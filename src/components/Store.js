// Component that displays everything available in the store

import React from 'react';
import Nav from './Nav';
import Cauliflower from '../images/cauliflower.png';
import Beet from '../images/beet.png';
import Corn from '../images/corn.png';
import Eggplant from '../images/eggplant.png';
import Garlic from '../images/garlic.png';
import GreenBean from '../images/green-bean.png';
import Kale from '../images/kale.png';
import Melon from '../images/melon.png';
import Potato from '../images/potato.png';
import Pumpkin from '../images/pumpkin.png';
import Starfruit from '../images/starfruit.png';
import Strawberry from '../images/strawberry.png';
import '../stylesheets/Store.css';

// Going to need to add option to select how many pounds
// and accordingly implement a state declaration in RouteSwitch.js
// to handle this. Will need to make everything work in Cart.js
// as well.

const Store = ({ cart, setCart }) => {
  return (
    <div>
      <Nav cart={cart} setCart={setCart}/>
      <div className='store-container'>
        <div className='card'>
          <div className="item-frame">
            <img src={Cauliflower} alt='Cauliflower' className='produce' />
          </div>
          <div className='name'>Cauliflower</div>
          <div className='price'>$1.49/lb</div>
          <button className='add'>Add To Cart</button>
        </div>

        <div className='card'>
          <div className="item-frame">
            <img src={Beet} alt='Beets' className='produce' />
          </div>
          <div className='name'>Beets</div>
          <div className='price'>$0.99/lb</div>
          <button className='add'>Add To Cart</button>
        </div>

        <div className='card'>
          <div className="item-frame">
            <img src={Corn} alt='Corn' className='produce' />
          </div>
          <div className='name'>Corn</div>
          <div className='price'>$0.49/lb</div>
          <button className='add'>Add To Cart</button>
        </div>

        <div className='card'>
          <div className="item-frame">
            <img src={Eggplant} alt='Eggplant' className='produce' />
          </div>
          <div className='name'>Eggplant</div>
          <div className='price'>$1.79/lb</div>
          <button className='add'>Add To Cart</button>
        </div>

        <div className='card'>
          <div className="item-frame">
            <img src={Garlic} alt='Garlic' className='produce' />
          </div>
          <div className='name'>Garlic</div>
          <div className='price'>$0.39/lb</div>
          <button className='add'>Add To Cart</button>
        </div>

        <div className='card'>
          <div className="item-frame">
            <img src={GreenBean} alt='Green beans' className='produce' />
          </div>
          <div className='name'>Green Beans</div>
          <div className='price'>$0.79/lb</div>
          <button className='add'>Add To Cart</button>
        </div>

        <div className='card'>
          <div className="item-frame">
            <img src={Kale} alt='Kale' className='produce' />
          </div>
          <div className='name'>Kale</div>
          <div className='price'>$2.99/lb</div>
          <button className='add'>Add To Cart</button>
        </div>

        <div className='card'>
          <div className="item-frame">
            <img src={Melon} alt='Melons' className='produce' />
          </div>
          <div className='name'>Melons</div>
          <div className='price'>$0.59/lb</div>
          <button className='add'>Add To Cart</button>
        </div>

        <div className='card'>
          <div className="item-frame">
            <img src={Potato} alt='Potatoes' className='produce' />
          </div>
          <div className='name'>Potatoes</div>
          <div className='price'>$0.29/lb</div>
          <button className='add'>Add To Cart</button>
        </div>

        <div className='card'>
          <div className="item-frame">
            <img src={Pumpkin} alt='Pumpkins' className='produce' />
          </div>
          <div className='name'>Pumpkins</div>
          <div className='price'>$0.49/lb</div>
          <button className='add'>Add To Cart</button>
        </div>

        <div className='card'>
          <div className="item-frame">
            <img src={Starfruit} alt='Starfruit' className='produce' />
          </div>
          <div className='name'>Starfruit</div>
          <div className='price'>$5.99/lb</div>
          <button className='add'>Add To Cart</button>
        </div>

        <div className='card'>
          <div className="item-frame">
            <img src={Strawberry} alt='Strawberries' className='produce' />
          </div>
          <div className='name'>Strawberries</div>
          <div className='price'>$2.99/lb</div>
          <button className='add'>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Store;