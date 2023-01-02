import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
    
    <div classNamer="home__container">
       <img className="home__image" src="https://imgs.search.brave.com/w-rESdGPmxLqt74yVYWh-tBGQLETcBbCSIa4JlpNJGM/rs:fit:1024:768:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC9DVlRrT0Nl/LmpwZw" alt="" />
   

<div className="home__row" >
     
     <Product
      title="jacket" 
      price={77.99} 
      image="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
      rating={5} />
     <Product
      title="jacket" 
      price={77.99} 
      image="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
      rating={3} />
     {/* pr */}
</div>


<div className="home__row" >
<Product
      title="jacket" 
      price={77.99} 
      image="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
      rating={5} />
       <Product
      title="jacket" 
      price={77.99} 
      image="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
      rating={5} />
       <Product
      title="jacket" 
      price={77.99} 
      image="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
      rating={5} />
</div>


<div className="home__row" >
<Product
      title="jacket" 
      price={77.99} 
      image="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
      rating={5} />
</div>


 </div></div>
  );
}

export default Home
