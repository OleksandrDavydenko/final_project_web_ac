import React from 'react';
import imageLogo from '../images/logIn.png';
import basketImg from '../images/basket.png';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
       <header className='header page-content'>
           <div className='content-wrapper'>
               <NavLink exact to="/">
                   <h1 className='header_title'> <span className='lit_p' >P </span> <div className="stick"></div><span className='lit_o'>o</span>  STAR GAL</h1>
               </NavLink>
               <ul className='nav_wrapper'>
                   <li className="nav_item"> <NavLink className='nav_link' to="/">Home</NavLink></li>
                   <li className="nav_item"> <NavLink className='nav_link' to="/shop">Shop</NavLink></li>
                   <li className="nav_item"> <NavLink className='nav_link' to="/about">About</NavLink></li>
                   <li className="nav_item"> <NavLink className='nav_link' to="/contact">Contact</NavLink></li>   
                   <li className="nav_item"> <NavLink className='nav_link nav_color' to="login"> 
                   <img className='image_login' src={imageLogo} alt=""/> Log In</NavLink>
                   </li>
                   <li className="nav_item"><a className='nav_link' href="basket"><img className="basket_img" src={basketImg} alt="Css Template Preview" /><span className="number_basket">0</span></a></li>

               </ul>
           </div>
       </header> 
    )
    
}
export default Header