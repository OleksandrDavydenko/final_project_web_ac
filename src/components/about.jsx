import React from 'react';
import {NavLink} from 'react-router-dom';


function AboutPage() {
    return (
       <div className='about page-content'>
           <div className='about_wrapper'>
               <div className="left_wrapper">
                   <img className='about_img' src="https://static.wixstatic.com/media/84770f_4c939220e15c4dfc99b8551fec57010e~mv2_d_4708_3268_s_4_2.jpg/v1/fill/w_950,h_938,al_c,q_85,usm_0.66_1.00_0.01/84770f_4c939220e15c4dfc99b8551fec57010e~mv2_d_4708_3268_s_4_2.webp" alt=""/>
               </div>
               <div className="right_wrapper">
                   <h6 className="about_title">Hello!</h6>
                   <h6 className="about_second_wrapper">MY NAME IS NORA</h6>
                   <p className="about_text">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                   <p className="about_text">This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.</p>
                   <NavLink className='about_btn' to='/shop'>View My Work</NavLink>
                   </div> 
               </div>
       </div> 
    )
    
}
export default AboutPage