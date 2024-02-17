import React from 'react';
import './App.css';
import Header from './Header';
import Checkout from './Checkout';
import Login from './Login';
import Home from './Home';
import SignUp from './SignUp';
import { BrowserRouter ,Routes ,Route } from "react-router-dom";

function App() {
  return ( 
    // bem 
<BrowserRouter>
<div className="app">
  <Routes>
        <Route path='/' element={<><Header /> <Home />  </>     }  /> 
        <Route path='/checkout' element={<><Header /> <Checkout />  </>}     />
        <Route path='/Login' element={<><Header /> <Login />  </>}     />
        <Route path='/SignUp' element={<><Header /> <SignUp />  </>}     />
  </Routes>
</div> 
</BrowserRouter>
);
}

export default App;
