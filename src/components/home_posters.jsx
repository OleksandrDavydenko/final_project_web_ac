/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import homePosterImg from '../images/homeImgLove.webp';
import { NavLink } from 'react-router-dom';

function HomePosters() {
    return (
       <div className='home_posters page-content'>
           <div className='posters-wrapper'>
               <div className="left_poster">
                   <img src={homePosterImg} alt="There should be poster"/>
               </div>
               <div className="right_poster">
                   <h5 className='posters_small_title'>New Collection</h5>
                   <h3 className='posters_big_title'>STYLE <br/>YOUR <br/>WALLS</h3>
                   <div className="shop_button_wrap">
                       <NavLink to="shop">Shop Now</NavLink>
                   </div>
               </div>
           </div>
       </div> 
    )
    
}
export default HomePosters