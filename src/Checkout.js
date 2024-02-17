import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import checkoutimg from './images/checkoutimg.jpg'
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();


  return ( <div className='checkout'>
 
<div className='checkout__left'>
 
<img className='checkout__ad' src={checkoutimg} />
<div>
    <h2 className='checkout__title'>your shopping basket</h2>
    {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
</div>
</div>

<div className='checkout__right'>
    <Subtotal />
</div>
</div>
);
}

export default Checkout

