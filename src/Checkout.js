import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal';

function Checkout() {
  return ( <div className='checkout'>
 
<div className='checkout__left'>

<img className='checkout__ad' src='https://i.ibb.co/Nt4DQk9/Screenshot-2023-01-06-230850.png' />
<div>
    <h2 className='checkout__title'>your shopping basket</h2>
    {/* BasketItem */}
    {/* BasketItem */}
    {/* BasketItem */}
    {/* BasketItem */}
</div>
</div>

<div className='checkout__right'>
    <Subtotal />
</div>
</div>
);
}

export default Checkout

