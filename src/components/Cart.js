// Component for user's cart display

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
import '../stylesheets/Cart.css'

// Need to calculate what total cost will be and then display it
const Cart = ({ cart, setCart, total, setTotal }) => {
  const isCartEmpty = () => {
    let cartTotal = 0;

    for (const val in total) {
      cartTotal += total[val]
    }

    return cartTotal;
  }

  const editQuantity = (e, item) => {
    if (total[item] < e.target.value) {
      setCart(cart + 1);
    } else if (total[item] > e.target.value) {
      setCart(cart - 1);
    };

    setTotal({...total, [item]: e.target.value})
  }

  const preventTyping = (e) => {
    e.preventDefault();
  }

  const calculateTotal = () => {
    return (
      (total.cauliflower * 1.49) +
      (total.beets * 0.99) +
      (total.corn * 0.49) +
      (total.eggplant * 1.79) +
      (total.garlic * 0.39) +
      (total.greenBeans * 0.79) +
      (total.kale * 2.99) +
      (total.melons * 0.59) +
      (total.potatoes * 0.29) +
      (total.pumpkins * 0.49) +
      (total.starfruit * 5.99) +
      (total.strawberries * 2.99)
    )
  }

  return (
    <div>
      <Nav cart={cart} setCart={setCart}/>
      <div className="cart-container">
        { (isCartEmpty() === 0 || calculateTotal() === 0) &&
          <div className="msg">Your cart is empty!</div>
        }
        { total.cauliflower > 0 &&
          <div className="item">
            <img src={Cauliflower} alt='Cauliflower' className='checkout-img' />
            <label for='cauliflower'>Cauliflower (lbs):</label>
            <input id='cauliflower' type='number' value={total.cauliflower} onChange={(e) => editQuantity(e, 'cauliflower')} onKeyDown={(e) => preventTyping(e)} min='0' max='99' />
            <div className='individual-price'>${(total.cauliflower * 1.49).toFixed(2)}</div>
          </div>
        }
        { total.beets > 0 &&
          <div className="item">
            <img src={Beet} alt='Beets' className='checkout-img' />
            <label for='beets'>Beets (lbs):</label>
            <input id='beets' type='number' value={total.beets} onChange={(e) => editQuantity(e, 'beets')} onKeyDown={(e) => preventTyping(e)} min='0' max='99' />
            <div className='individual-price'>${(total.beets * 0.99).toFixed(2)}</div>
          </div>
        }
        { total.corn > 0 &&
          <div className="item">
            <img src={Corn} alt='Corn' className='checkout-img' />
            <label for='corn'>Corn (lbs):</label>
            <input id='corn' type='number' value={total.corn} onChange={(e) => editQuantity(e, 'corn')} onKeyDown={(e) => preventTyping(e)} min='0' max='99' />
            <div className='individual-price'>${(total.corn * 0.49).toFixed(2)}</div>
          </div>
        }
        { total.eggplant > 0 &&
          <div className="item">
            <img src={Eggplant} alt='Eggplant' className='checkout-img' />
            <label for='eggplant'>Eggplant (lbs):</label>
            <input id='eggplant' type='number' value={total.eggplant} onChange={(e) => editQuantity(e, 'eggplant')} onKeyDown={(e) => preventTyping(e)} min='0' max='99' />
            <div className='individual-price'>${(total.eggplant * 1.79).toFixed(2)}</div>
          </div>
        }
        { total.garlic > 0 &&
          <div className="item">
            <img src={Garlic} alt='Garlic' className='checkout-img' />
            <label for='garlic'>Garlic (lbs):</label>
            <input id='garlic' type='number' value={total.garlic} onChange={(e) => editQuantity(e, 'garlic')} onKeyDown={(e) => preventTyping(e)} min='0' max='99' />
            <div className='individual-price'>${(total.garlic * 0.39).toFixed(2)}</div>
          </div>
        }
        { total.greenBeans > 0 && 
          <div className="item">
            <img src={GreenBean} alt='Green beans' className='checkout-img' />
            <label for='greenBeans'>Green beans (lbs):</label>
            <input id='greenBeans' type='number' value={total.greenBeans} onChange={(e) => editQuantity(e, 'greenBeans')} onKeyDown={(e) => preventTyping(e)} min='0' max='99' />
            <div className='individual-price'>${(total.greenBeans * 0.79).toFixed(2)}</div>
          </div>
        }
        { total.kale > 0 &&
          <div className="item">
            <img src={Kale} alt='Kale' className='checkout-img' />
            <label for='kale'>Kale (lbs):</label>
            <input id='kale' type='number' value={total.kale} onChange={(e) => editQuantity(e, 'kale')} onKeyDown={(e) => preventTyping(e)} min='0' max='99' />
            <div className='individual-price'>${(total.kale * 2.99).toFixed(2)}</div>
          </div>
        }
        { total.melons > 0 &&
          <div className="item">
            <img src={Melon} alt='Melons' className='checkout-img' />
            <label for='melons'>Melons (lbs):</label>
            <input id='melons' type='number' value={total.melons} onChange={(e) => editQuantity(e, 'melons')} onKeyDown={(e) => preventTyping(e)} min='0' max='99' />
            <div className='individual-price'>${(total.melons * 0.59).toFixed(2)}</div>
          </div>
        }
        { total.potatoes > 0 &&
          <div className="item">
            <img src={Potato} alt='Potatoes' className='checkout-img' />
            <label for='potatoes'>Potatoes (lbs):</label>
            <input id='potatoes' type='number' value={total.potatoes} onChange={(e) => editQuantity(e, 'potatoes')} onKeyDown={(e) => preventTyping(e)} min='0' max='99' />
            <div className='individual-price'>${(total.potatoes * 0.29).toFixed(2)}</div>
          </div>
        }
        { total.pumpkins > 0 &&
          <div className="item">
            <img src={Pumpkin} alt='Pumpkins' className='checkout-img' />
            <label for='pumpkins'>Pumpkins (lbs):</label>
            <input id='pumpkins' type='number' value={total.pumpkins} onChange={(e) => editQuantity(e, 'pumpkins')} onKeyDown={(e) => preventTyping(e)} min='0' max='99' />
            <div className='individual-price'>${(total.pumpkins * 0.49).toFixed(2)}</div>
          </div>
        }
        { total.starfruit > 0 &&
          <div className="item">
            <img src={Starfruit} alt='Starfruit' className='checkout-img' />
            <label for='starfruit'>Starfruit (lbs):</label>
            <input id='starfruit' type='number' value={total.starfruit} onChange={(e) => editQuantity(e, 'starfruit')} onKeyDown={(e) => preventTyping(e)} min='0' max='99' />
            <div className='individual-price'>${(total.starfruit * 5.99).toFixed(2)}</div>
          </div>
        }
        { total.strawberries > 0 &&
          <div className="item">
            <img src={Strawberry} alt='Strawberries' className='checkout-img' />
            <label for='strawberries'>Strawberries (lbs):</label>
            <input id='strawberries' type='number' value={total.strawberries} onChange={(e) => editQuantity(e, 'strawberries')} onKeyDown={(e) => preventTyping(e)} min='0' max='99' />
            <div className='individual-price'>${(total.strawberries * 2.99).toFixed(2)}</div>
          </div>
        }  
        { (isCartEmpty() > 0 && calculateTotal() !== 0) &&
          <div className="error msg">Your total is: ${calculateTotal().toFixed(2)}</div>
        }
      </div>
    </div>
  );
};

export default Cart;