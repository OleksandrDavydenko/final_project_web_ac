/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import palmPoster from '../images/poster1.webp';
import stickPoster from '../images/sticks.webp';
import { NavLink } from 'react-router-dom';

function MiddlePostersHome() {
    return (
       <div className='middle_posters page-content'>
            <div className='middle_posters_wrapper'>
                <div className="palm_poster">
                    <img src={palmPoster} alt="There sould be img"/>
                    <div className="palm_poster_wrapper">
                        <p className='palm_title'>Free</p>
                        <h6 className='palm_big_title'>SHIPPING</h6>
                        <h6 className='palm_big_title'>WORLDWIDE</h6>

                        <NavLink className='shop_link' to='/shop'>Shop Now</NavLink>
                    </div>
                </div>
                <div className="stiks_poster">
                <img src={stickPoster} alt="There sould be img"/>
                <img src={stickPoster} alt="There sould be img"/>
                <img src={stickPoster} alt="There sould be img"/>
                <img src={stickPoster} alt="There sould be img"/>
                <div className="palm_poster_wrapper">
                    <p className='palm_title'>Don't miss</p>
                    <h6 className='palm_big_title'><span className='txt'>40</span> % OFF YOUR</h6>
                    <h6 className='palm_big_title'>SECOND POSTER</h6>
                    <div className="btn-wrapper">
                    <NavLink className='shop_btn' to='/shop'>Order Now</NavLink>
                    </div>
                    </div>
                </div>
            </div>
       </div> 
    )
    
}
export default MiddlePostersHome