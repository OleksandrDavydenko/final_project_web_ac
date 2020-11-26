/* eslint-disable no-sequences */
import React from 'react';
import HomePosters from '../components/home_posters';
import MiddlePostersHome from '../components/middle_posters_home';
import FreshPosters from '../components/fresh_posters_home';
import BigPosters from '../components/big_posters_home'
import BigSlider from '../components/big_slide_home'


function Home() {
  return (
  
  <div className="app-content-wrapper">
   <HomePosters/>
   <MiddlePostersHome/>
   <FreshPosters/>
   <BigPosters/>
   <BigSlider/>
  </div>

  );
}

export default Home;