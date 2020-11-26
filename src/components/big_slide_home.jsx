/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import slider2Img1 from '../images/slider2/slider2_1.png';
import slider2Img2 from '../images/slider2/slider2_2.png';
import slider2Img3 from '../images/slider2/slider2_3.png';
import slider2Img4 from '../images/slider2/slider2_4.webp';
import slider2Img5 from '../images/slider2/slider2_5.jpg';


const images = [
  {src: slider2Img1},
  {src: slider2Img2},
  {src: slider2Img3},
  {src: slider2Img4},
  {src: slider2Img5},
];


class BigSlider extends React.Component {
        constructor() {
          super();
          this.state = {
            activeImageIndex: 0
          }
        }
        nextSlide () {
            const maxActiveIndex = images.length - 1;
            const nextIndex = this.state.activeImageIndex < maxActiveIndex ?  this.state.activeImageIndex + 1 : 0;
            this.setState((state) => ({...state, activeImageIndex: nextIndex}))
          }
        render() {
           const containerOffset = 470 * this.state.activeImageIndex;
          
       return (
               <div className="big_slider_wrapper">
                 <h6 className="big_slider_title">#POSTER_GAL</h6>
                 <div className="big_slider_content">
                   <div className="slides" style={{left: `-${containerOffset}px`}}>
                      {images.map(image => (<img className='slider_content' src={image.src} alt=""/>)) }
                      <div className="left_btn" onClick={this.nextSlide}> « </div>
                      <div className="right_btn"> » </div>
                    </div>
                 </div>        
               </div>
    )
    
    }
}
export default BigSlider