import React from 'react';
import './Footer.css';
import {Button} from "../Navbar/Button";
import {Link} from "react-router-dom"
import logo from '../../assets/nh.png'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Inscrivez-vous à NhCom Pharma pour recevoir nos meilleures offres 
        </p>
     
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items1'>
            <h2>About Us</h2>
            <p> Nh com Pharma est une Société Marocaine située à Rabat, <br/>
            qui a pour activité : l’importation, la distribution, la vente directe et e-commerce. </p>
          </div>
          <div class='footer-link-items'>
            <h2>Menu </h2>
            <Link to="/">Home</Link>
            <Link to="/products">Nos Produits</Link>
            <Link to="/login">Se connecter</Link>
            <Link to="/register">S'inscrire </Link>
          </div>
        </div>
        
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img className="logo-footer" src={logo}/>
              
            </Link>
          </div>
          <small class='website-rights'>Nhcom Pharma © 2020</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
             href="https://www.facebook.com/nhcompharma"
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href="https://www.instagram.com/nhcompharma/"
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            
            
            <a
              class='social-icon-link twitter'
              href="https://www.linkedin.com/company/nh-com/"
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;