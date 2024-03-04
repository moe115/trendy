import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
    
    <div className="home__container">
       <img className="home__image" src="https://i.ibb.co/3S4BkPP/xx.png " alt="" />
   

<div className="home__row" >
     
     <Product
     id="6666666"
      title="jacket" 
      price={77.99} 
      image="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
      rating={5} />
     <Product
       id="676735753"
      title="jacket" 
      price={77.99} 
      image="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
      rating={3} />
     {/* pr */}
</div>


<div className="home__row" >
<Product
      id="534234"
      title="jacket" 
      price={77.99} 
      image="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
      rating={5} />
       <Product
      id="564646"
      title="jacket" 
      price={77.99} 
      image="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
      rating={5} />
       <Product
       id="345654"
      title="jacket" 
      price={77.99} 
      image="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
      rating={5} />
</div>


<div className="home__row" >
<Product
       id="456226"
      title="jacket" 
      price={77.99} 
      image="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
      rating={5} />
</div>


 </div></div>
  );
}

export default Home
