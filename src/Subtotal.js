import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format'
function Subtotal() {
  return <div className="subtotal">
      <CurrencyFormat
      renderText={(value) => (
        <>
        <p>
        Subtotal(0  items):
        <strong>0</strong>
        </p>
        <small className='subtotal__gift'><input type="checkbox" />&nbsp;&nbsp;&nbsp;&nbsp;this order contans a gift</small>
        </> 
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"} 
        />

        
<div class="container">
      <a className='ss' href="#">
      <span className='sp'></span>
      <span className='sp'></span>
      <span className='sp'></span>
      <span className='sp'></span>
      checkout
    </a>
  </div>
  
    </div>;
}

export default Subtotal
