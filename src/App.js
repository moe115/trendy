import React from 'react';
import './App.css';
import Header from './Header';
import Checkout from './Checkout';
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
  </Routes>
</div> 
</BrowserRouter>
);
}

export default App;
