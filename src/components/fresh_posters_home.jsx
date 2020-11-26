/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import windowimg from '../images/window.webp'
import { NavLink } from 'react-router-dom';
import sliderImg1 from '../images/slider1_1.webp';
import sliderImg2 from '../images/slider1_2.webp';
import sliderImg3 from '../images/slider1_3.webp';

const images = [
  {src: sliderImg1},
  {src: sliderImg2},
  {src: sliderImg3},
];


class FreshPosters extends React.Component {
        constructor() {
          super();
          this.state = {
            activeImageIndex: 0
          }
        }
        
        componentDidMount() {

          setInterval(() => {
            const maxActiveIndex = images.length - 1;
            const nextIndex = this.state.activeImageIndex < maxActiveIndex ?  this.state.activeImageIndex + 1 : 0;
            this.setState((state) => ({...state, activeImageIndex: nextIndex}))
          }, 3000)
        }

        render() {
          const containerOffset = 470 * this.state.activeImageIndex;
       return (
       <div className='fresh_home_posters page-content'>
           <div className='fresh_posters-wrapper'>
               <div className="fresh_title_wrapper">
                   <h2 className='fresh_title'>FRESH</h2>
                   <h2 style={{backgroundColor: 'white'}} className='fresh_title'>POSTERS</h2>
                   <span className='fresh_italic_title'>This Summer</span>
                   <p className="fresh_paragraph">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text”.</p>               
               </div>
              <NavLink to='/shop'>
               <div className="window_slide_wrapper">
               <img className='window_img' src={windowimg} alt=""/>
                <div className="window_slide">
                    <div className="slides" style={{left: `-${containerOffset}px`}}>
                      {images.map(image => (<img className='slider_image' src={image.src} alt=""/>)) }
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