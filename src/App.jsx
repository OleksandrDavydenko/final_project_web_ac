/* eslint-disable no-sequences */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header';
import Shop from './components/shop';
import About from './routers/about';
import Contacts from './routers/contacts';
import Home from './routers/home';



function App() {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
  <Header/>
    <Route exact path='/' component={Home}/>
    <Route path='/shop' component={Shop}/>
    <Route path='/about' component={About}/>
    <Route path='/contact' component={Contacts}/>
  </div>
  </BrowserRouter>
  );
}

export default App;
