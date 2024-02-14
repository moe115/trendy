import React from 'react';
import './Header.css';import { auth } from "./firebase";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider" ;
function Header() {
  const [ {basket , user}, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <div className="header">
      <Link to="/">
      <img className="header__logo" src="https://i.ibb.co/k0Q7hbx/11.jpg" />
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

                
                <Link  to= "/checkout">
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
