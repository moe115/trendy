import React from 'react';
import './App.css';
import Header from './Header';
import Checkout from './Checkout';
import Login from './Login';
import Home from './Home';
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
  </Routes>
</div> 
</BrowserRouter>
);
}

export default App;
