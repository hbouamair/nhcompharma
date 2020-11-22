import React , {useState , useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from '../../globalStyles';
import Hero from '../Hero';
import Products from '../Products/index';
import { Switch, Route } from 'react-router-dom';
import Banner from "../Banner"
import Footer from "../Footer/index"
import SideCarousel from "../SideCarousel/SideCarousel"
import Chat from '../Chat'; 


function Home() { 

  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products/>
       <Banner />
      <Footer/> 
      <Chat />
    </Router>
  );
}

export default Home;