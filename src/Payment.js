import './Payment.css'
import React from 'react'
import { useStateValue } from "./StateProvider" ;
import { auth } from "./firebase";
import { useState, useEffect } from 'react';
import CheckoutProduct from './CheckoutProduct';
import { CardElement , useStripe ,useElements } from '@stripe/react-stripe-js';
import { getBasketTotal } from "./reducer";
import { Link } from "react-router-dom";
import CurrencyFormat from 'react-currency-format';


function Payment() {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [user, setUser] = useState(null);
  const [ {basket  }, dispatch] = useStateValue();



  const handleChange = e => {
  setDisabled(e.empty);
  setError(e.error ? e.error.message : "") ;

  }

  const handleSubmit = e => {


  }



    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(newUser => {
          setUser(newUser);
        });
    
    return () => unsubscribe();
  }, []);

  return (
    <div className='payment'>
        <div className='payment__container'>

<h1>
checkout (< Link to="/checkout "> {basket?.length} item </Link>)
</h1>
          <div className='payment__section'>
            <div className='payment__title'> 
            <h3>delivery address</h3>
            </div> 
            <div className='payment__address'>
                  <p>   {user?.email}</p>
             </div>
           </div> 


         <div className='payment__section'>
         <div className='payment__title'> 
            <h3>review items</h3>
            </div> 
            <div className='payment__items'>

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
            
         <div className='payment__section'>
         <div className='payment__title'> 
            <h3>payment method</h3>
            </div> 
            <div className='payment__details'>
                <form onSubmit={handleSubmit}>

                  <CardElement  onChange={handleChange}/>
                  <div className='payment__priceContainer'>
                  <CurrencyFormat
        renderText={(value) => (
 
          <h3> Order Total : {value} </h3>
 
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}  
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
                  </div>
                </form>
            </div>
            </div>
      
      
      
      </div> 
    </div>
  )
}

export default Payment