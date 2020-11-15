import React, { useState } from 'react';
import {Link} from "react-router-dom"
import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>ÉLIMINER L'INFECTION</HeroH1>
          <HeroP>PROTÉGER CE QUI COMPTE</HeroP>
         <HeroBtn onClick={event =>  window.location.href='/products'}>Commandez</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
