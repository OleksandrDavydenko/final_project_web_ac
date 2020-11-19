/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import windowimg from '../images/window.webp'
import { NavLink } from 'react-router-dom';
import sliderImg1 from '../images/slider1_1.webp';
import sliderImg2 from '../images/slider1_2.webp';

class FreshPosters extends React.Component {
        constructor() {
          super();
          this.state = {
            someValue: 0
          }
        }
        
        componentDidMount() {
          setInterval(() => {
            this.setState((state) => ({...state, someValue: state.someValue + 1}))
          }, 3000)
        }

        render() {
            const slide2 = [this.state.someValue % 2 === 0 ? 'slide2': 'slide2 act'];
            const slide1 = [this.state.someValue % 2 === 0 ? 'slide1': 'slide1 act'];

    return (
       <div className='fresh_home_posters page-content'>
           <div className='fresh_posters-wrapper'>
               <div className="fresh_title_wrapper">
                   <h2 className='fresh_title'>FRESH</h2>
                   <h2 className='fresh_title'>POSTERS</h2>
                   <span className='fresh_italic_title'>This Summer</span>
                   <p className="fresh_paragraph">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text”.</p>               
               </div>
              <NavLink to='/shop'>
               <div className="window_slide_wrapper">
               <img className='window_img' src={windowimg} alt=""/>
                <div className="window_slide">
                    <div className="slides">
                <img className={slide1} src={sliderImg1} alt=""/>
                <img className={slide2}  src={sliderImg2} alt=""/>
                    </div>
               </div>
               </div>
               </NavLink>
           </div>
       </div> 
    )
    
    }
}
export default FreshPosters