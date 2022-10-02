// Component for user's cart display

import React from 'react';
import Nav from './Nav';
import '../stylesheets/Cart.css'

// Need to calculate what total cost will be and then display it
const Cart = ({ cart, setCart, total }) => {
  const isCartEmpty = () => {
    let cartTotal = 0;

    for (const val in total) {
      cartTotal += total[val]
    }

    return cartTotal;
  }

  return (
    <div>
      <Nav cart={cart} setCart={setCart}/>
      <div className="cart-container">
        { isCartEmpty() === 0 &&
          <div className="item">Your cart is empty!</div>
        }
        { total.cauliflower > 0 &&
          <div className="item">Cauliflower: {total.cauliflower}</div>
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
        
      </div>
    </div>
  );
};

export default Cart;