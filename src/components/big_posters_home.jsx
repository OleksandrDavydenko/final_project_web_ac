/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import goodVibes from '../images/good_vibes_only.webp';
import {NavLink} from 'react-router-dom';


function BigPosters() {
    return (
       <div className='big_posters page-content'>
           <div className='big_posters_wrapper'>
             <div className="left_big_posters">
                 <div className="big_poster_wrapper">
                   <img src={goodVibes} alt=""/>
                   <h6 className='big_poster_title'>TROPICAL <br/> COLLECTION</h6>
                   <NavLink className='shop_link' to='/shop'>Shop Now</NavLink>
               </div>
                <div className="big_poster_wrapper_third">
                   <img src='https://static.wixstatic.com/media/f61af8_0c414bbb8f20476fb91e17eb6c9410a6~mv2_d_2433_2987_s_4_2.png/v1/fill/w_560,h_688,al_c,q_90,usm_0.66_1.00_0.01/f61af8_0c414bbb8f20476fb91e17eb6c9410a6~mv2_d_2433_2987_s_4_2.webp' alt=""/>
                   <h6 className='big_poster_title'>PRICKLY <br/> COLLECTION</h6>
                   <NavLink className='shop_link' to='/shop'>Shop Now</NavLink>
               </div>
               </div>
               <div className="big_poster_wrapper_second">
                   <img src='https://static.wixstatic.com/media/f61af8_977e45ca087c4874ad104b6b7709361b~mv2_d_2433_2987_s_4_2.png/v1/fill/w_560,h_689,al_c,q_90,usm_0.66_1.00_0.01/f61af8_977e45ca087c4874ad104b6b7709361b~mv2_d_2433_2987_s_4_2.webp' alt=""/>
                   <h6 className='big_poster_title'>FREEDOM <br/> COLLECTION</h6>
                   <NavLink className='shop_link' to='/shop'>Shop Now</NavLink>
               </div>
  
               </div>
       </div> 
    )
    
}
export default BigPosters