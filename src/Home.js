import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
    
    <div classNamer="home__container">
       <img className="home__image" src="https://imgs.search.brave.com/w-rESdGPmxLqt74yVYWh-tBGQLETcBbCSIa4JlpNJGM/rs:fit:1024:768:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC9DVlRrT0Nl/LmpwZw" alt="" />
   

<div className="home__row" >
     <Product />
     <Product /> <Product /> <Product />
     {/* pr */}
</div>


<div className="home__row" >
     {/* pr */}
     {/* pr */} <Product />
     {/* pr */} <Product />
</div>


<div className="home__row" >
    {/* pr */} <Product />
</div>


 </div>

    </div>
  );
}

export default Home
