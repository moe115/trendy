import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Checkout from './Checkout';

import Payment from './Payment';
import Login from './Login';
import Home from './Home';
import SignUp from './SignUp';
import { BrowserRouter ,Routes ,Route } from "react-router-dom";
import { auth , } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements} from '@stripe/react-stripe-js';
 const promise = loadStripe ("pk_test_51OtbFlIAPWY3HFuZiFXsRlEcmkM1kgjwWHDW8ePUnOKOe8O99su03HMZKaKGIc6W0fhQwgmVmGZUrEBNx6RvG6Jp00wvVzP7ry");
  
function App() {
  
const[{},dispatch]=useStateValue();

     


  useEffect(
   ()=> {

    auth.onAuthStateChanged(authUser => {
             console.log("user is ====> " , authUser);


         if (authUser) {
        dispatch({
          type:'setUser',
          user:authUser
                                  })
      } else {
    
        dispatch({
          type:'setUser',
          user:null})

      }}
    );


    } , []
  )


  return ( 
    // bem 
<BrowserRouter>
<div className="app">
  <Routes>
        <Route path='/' element={<><Header /> <Home />  </>     }  /> 
        <Route path='/checkout' element={<><Header /> <Checkout />  </>}     />
        <Route path='/Login' element={<><Header /> <Login />  </>}     />
        <Route path='/SignUp' element={<><Header /> <SignUp />  </>}     />
      <Route path='/payment' element={<><Header /> <Elements stripe={promise} >< Payment />  </Elements>  </>}     />
  </Routes>
</div> 
</BrowserRouter>
);
}

export default App;
