import React from 'react';


function Footer() {
    return (
       <div className='footer page-content'>
           <div className='footer_wrapper'>
               <span className="footer_title">Subscribe and stay on top of our latest news and promotions</span>
               <form className="form_wrapper">
               <input className="footer_inp" placeholder='Enter your email here' type="email"/>
               <button type='submit' className='footer_btn'>Subscribe</button>
               </form>
               <div className="social_wrapper">
                   <img src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_28,h_28,al_c,q_85,usm_0.66_1.00_0.01/0fdef751204647a3bbd7eaa2827ed4f9.webp" alt="There should be img"/>
                   <img src="https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_28,h_28,al_c,q_85,usm_0.66_1.00_0.01/c7d035ba85f6486680c2facedecdcf4d.webp" alt="There should be img"/>
                   <img src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_28,h_28,al_c,q_85,usm_0.66_1.00_0.01/01c3aff52f2a4dffa526d7a9843d46ea.webp" alt="There should be img"/>

               </div>
               <span className='footer_title'>© 2023 by Poster Gal. Proudly created by Oleksandr Davydenko</span>
            
  
               </div>
       </div> 
    )
    
}
export default Footer