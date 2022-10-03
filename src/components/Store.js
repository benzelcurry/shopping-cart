// Component that displays everything available in the store

import React, { useState } from 'react';
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

const Store = ({ cart, setCart, total, setTotal }) => {
  const [amount, setAmount] = useState({
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

  const changeAmt = (e, item) => {
    setAmount({ ...amount, [item]: Number(e.target.value)})
  }

  const addToCart = (item) => {
    let itemTotal = total[item];
    itemTotal += amount[item];

    setCart(cart + amount[item]);

    setTotal({ ...total, [item]: itemTotal });
  }

  // Prevent user from adding amount that would equate to more than 99 lbs?
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
          <div className="purchase-container">
            <input className='quantity' type='number' placeholder='0' min='0' max='99' onChange={(e) => changeAmt(e, 'cauliflower')} />
            <button className='add' onClick={() => addToCart('cauliflower')}>Add To Cart</button>
          </div>
        </div>

        <div className='card'>
          <div className="item-frame">
            <img src={Beet} alt='Beets' className='produce' />
          </div>
          <div className='name'>Beets</div>
          <div className='price'>$0.99/lb</div>
          <div className="purchase-container">
            <input className='quantity' type='number' placeholder='0' min='0' max='99' onChange={(e) => changeAmt(e, 'beets')} />
            <button className='add' onClick={() => addToCart('beets')}>Add To Cart</button>
          </div>
        </div>

        <div className='card'>
          <div className="item-frame">
            <img src={Corn} alt='Corn' className='produce' />
          </div>
          <div className='name'>Corn</div>
          <div className='price'>$0.49/lb</div>
          <div className="purchase-container">
            <input className='quantity' type='number' placeholder='0' min='0' max='99' onChange={(e) => changeAmt(e, 'corn')} />
            <button className='add' onClick={() => addToCart('corn')}>Add To Cart</button>
          </div>
        </div>

        <div className='card'>
          <div className="item-frame">
            <img src={Eggplant} alt='Eggplant' className='produce' />
          </div>
          <div className='name'>Eggplant</div>
          <div className='price'>$1.79/lb</div>
          <div className="purchase-container">
            <input className='quantity' type='number' placeholder='0' min='0' max='99' onChange={(e) => changeAmt(e, 'eggplant')} />
            <button className='add' onClick={() => addToCart('eggplant')}>Add To Cart</button>
          </div>
        </div>

        <div className='card'>
          <div className="item-frame">
            <img src={Garlic} alt='Garlic' className='produce' />
          </div>
          <div className='name'>Garlic</div>
          <div className='price'>$0.39/lb</div>
          <div className="purchase-container">
            <input className='quantity' type='number' placeholder='0' min='0' max='99' onChange={(e) => changeAmt(e, 'garlic')} />
            <button className='add' onClick={() => addToCart('garlic')}>Add To Cart</button>
          </div>
        </div>

        <div className='card'>
          <div className="item-frame">
            <img src={GreenBean} alt='Green beans' className='produce' />
          </div>
          <div className='name'>Green Beans</div>
          <div className='price'>$0.79/lb</div>
          <div className="purchase-container">
            <input className='quantity' type='number' placeholder='0' min='0' max='99' onChange={(e) => changeAmt(e, 'greenBeans')} />
            <button className='add' onClick={() => addToCart('greenBeans')}>Add To Cart</button>
          </div>
        </div>

        <div className='card'>
          <div className="item-frame">
            <img src={Kale} alt='Kale' className='produce' />
          </div>
          <div className='name'>Kale</div>
          <div className='price'>$2.99/lb</div>
          <div className="purchase-container">
            <input className='quantity' type='number' placeholder='0' min='0' max='99' onChange={(e) => changeAmt(e, 'kale')} />
            <button className='add' onClick={() => addToCart('kale')}>Add To Cart</button>
          </div>
        </div>

        <div className='card'>
          <div className="item-frame">
            <img src={Melon} alt='Melons' className='produce' />
          </div>
          <div className='name'>Melons</div>
          <div className='price'>$0.59/lb</div>
          <div className="purchase-container">
            <input className='quantity' type='number' placeholder='0' min='0' max='99' onChange={(e) => changeAmt(e, 'melons')} />
            <button className='add' onClick={() => addToCart('melons')}>Add To Cart</button>
          </div>
        </div>

        <div className='card'>
          <div className="item-frame">
            <img src={Potato} alt='Potatoes' className='produce' />
          </div>
          <div className='name'>Potatoes</div>
          <div className='price'>$0.29/lb</div>
          <div className="purchase-container">
            <input className='quantity' type='number' placeholder='0' min='0' max='99' onChange={(e) => changeAmt(e, 'potatoes')} />
            <button className='add' onClick={() => addToCart('potatoes')}>Add To Cart</button>
          </div>
        </div>

        <div className='card'>
          <div className="item-frame">
            <img src={Pumpkin} alt='Pumpkins' className='produce' />
          </div>
          <div className='name'>Pumpkins</div>
          <div className='price'>$0.49/lb</div>
          <div className="purchase-container">
            <input className='quantity' type='number' placeholder='0' min='0' max='99' onChange={(e) => changeAmt(e, 'pumpkins')} />
            <button className='add' onClick={() => addToCart('pumpkins')}>Add To Cart</button>
          </div>
        </div>

        <div className='card'>
          <div className="item-frame">
            <img src={Starfruit} alt='Starfruit' className='produce' />
          </div>
          <div className='name'>Starfruit</div>
          <div className='price'>$5.99/lb</div>
          <div className="purchase-container">
            <input className='quantity' type='number' placeholder='0' min='0' max='99' onChange={(e) => changeAmt(e, 'starfruit')} />
            <button className='add' onClick={() => addToCart('starfruit')}>Add To Cart</button>
          </div>
        </div>

        <div className='card'>
          <div className="item-frame">
            <img src={Strawberry} alt='Strawberries' className='produce' />
          </div>
          <div className='name'>Strawberries</div>
          <div className='price'>$2.99/lb</div>
          <div className="purchase-container">
            <input className='quantity' type='number' placeholder='0' min='0' max='99' onChange={(e) => changeAmt(e, 'strawberries')} />
            <button className='add' onClick={() => addToCart('strawberries')}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;