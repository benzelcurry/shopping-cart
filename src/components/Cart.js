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
          <div className="item">Your cart is empty!</div>
        }
        { total.cauliflower > 0 &&
          <div className="item">
            <img src={Cauliflower} alt='Cauliflower' className='checkout-img' />
            {/* Cauliflower: {total.cauliflower} */}
            <label for='cauliflower'>Cauliflower (lbs): </label>
            <input id='cauliflower' type='number' value={total.cauliflower} onChange={(e) => editQuantity(e, 'cauliflower')} onKeyDown={(e) => preventTyping(e)} min='0' max='99' />
          </div>
        }
        { total.beets > 0 &&
          <div className="item">Beets: {total.beets}</div>
        }
        { total.corn > 0 &&
          <div className="item">Corn: {total.corn}</div>
        }
        { total.eggplant > 0 &&
          <div className="item">Eggplant: {total.eggplant}</div>
        }
        { total.garlic > 0 &&
          <div className="item">Garlic: {total.garlic}</div>
        }
        { total.greenBeans > 0 && 
          <div className="item">Green beans: {total.greenBeans}</div>
        }
        { total.kale > 0 &&
          <div className="item">Kale: {total.kale}</div>
        }
        { total.melons > 0 &&
          <div className="item">Melons: {total.melons}</div>
        }
        { total.potatoes > 0 &&
          <div className="item">Potatoes: {total.potatoes}</div>
        }
        { total.pumpkins > 0 &&
          <div className="item">Pumpkins: {total.pumpkins}</div>
        }
        { total.starfruit > 0 &&
          <div className="item">Starfruit: {total.starfruit}</div>
        }
        { total.strawberries > 0 &&
          <div className="item">Strawberries: {total.strawberries}</div>
        }
        { (isCartEmpty() > 0 && calculateTotal() !== 0) &&
          <div className="item">Your total is: ${calculateTotal()}</div>
        }
        
      </div>
    </div>
  );
};

export default Cart;