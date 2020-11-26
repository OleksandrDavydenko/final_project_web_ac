/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';



function Contact () {
    return (
       <div className='contact page-content'>
           <div className='contact-wrapper'>
               <div className="contact_content_wrapper">
                   <h2 className="contact_title">CONTACT</h2>
                   <div className="contact_wrapper_inside">
                       <div className="contact_block">
                           <h6 className="adress_contact">500 Terry Francois Street <br/> San Francisco, CA 94158</h6>
                           <div className="stick_separation"></div>
                           <h6 className="adress_contact">Tel: 277-32-27<br/>
                            Email: info@mysite.com
                        </h6>
                       </div>
                       <div className="contact_block"><h6 className="adress_contact">Opening hours</h6>
                       <div className="stick_separation"></div>
                       <h6 className="adress_contact">Mon - Fri: 9am - 8pm<br/>
                       Saturday: 9am - 7pm <br/>
                       Sunday: 10am - 6pm 
                        </h6>
                       </div>
                       <div className="contact_block">
                           <form action="">
                           <input type="text" className='about_inp'placeholder='Name'/>
                           <input type="email" className='about_inp'placeholder='Email'/>
                            <input placeholder='Phone' type="tel" className='about_inp_s'/>
                            <textarea placeholder='Type your massage here' type="text" className='about_inp_massage'/>
                            <div className="submit_button_wrapper">
                            <input type="submit" className='submit_but' value="Submit"/>
                            </div>
                           
                           </form>
                       </div>
                       
                   </div>
               </div>
           </div>
       </div> 
    )
    
}
export default Contact