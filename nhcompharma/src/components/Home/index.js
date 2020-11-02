import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from '../../globalStyles';
import Hero from '../Hero';
import Products from '../Products/index';
import { Switch, Route } from 'react-router-dom';
import Banner from "../Banner"
import Footer from "../Footer/index"
import SideCarousel from "../SideCarousel/SideCarousel"



function Home() {
  return (
    
    <Router>
    
    
      <GlobalStyle />
      <Hero />
      <Banner/>

      <Products />
      <SideCarousel/>

      <Footer/>
  
    </Router>
  );
}

export default Home;