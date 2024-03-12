import React from 'react';
import logo12 from './images/logo12.png'
import './Header.css';
import { auth } from "./firebase";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider" ;
import {  signOut} from "firebase/auth";
import { useState, useEffect } from 'react';

function Header() {
  const [ {basket  }, dispatch] = useStateValue();
  // const user = auth.currentUser;




  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(newUser => {
      setUser(newUser);
    });

    return () => unsubscribe();
  }, []);



  
  const [user, setUser] = useState(null);
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }
  // const handleAuthenticaton = async () => {
  //  if(user){ try {
  //     await signOut(auth);
  //   } catch (err) {
  //     console.error(err);
  //   }}
  // };


  return (
    <div className="header">
      <Link to="/">
      <img className="header__logo" src={logo12} />
      </Link>

 
                <div className='header__search'>

<input className="header__searchInput" type="text" />
<SearchIcon className="header__searchIcon" />
                </div>
    
    
                
   <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
         
                {/* <div className="header__option">
<span className='header__optionLineOne'>return</span>
<span className='header__optionLineTwo'>orders</span>
                </div> */}
{/* 
                <div className="header__option">
<span className='header__optionLineOne'>your</span> 
<span className='header__optionLineTwo'>prime</span>   
                </div> */}

                
                <Link style={{  textDecoration: 'none'}} to= "/checkout">
<div className="header__OptionBasket">
    <ShoppingCart /> 
    <span className='header__optionLineOne header__BasketCount'>
      {basket?.length}
      
      </span>
</div>
</Link>
                </div>
    
    
    
    </div>
  )
}

export default Header
