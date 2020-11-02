import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "react-alice-carousel/lib/alice-carousel.css";
import { Fade } from "react-reveal";
import { makeStyles } from '@material-ui/core/styles';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './sideCarousel.css'
import img1 from '../../assets/img2.jpg'
import img2 from '../../assets/img5.jpeg'
import img3 from '../../assets/img3.jpeg'
import {Container,Col} from 'react-bootstrap'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display:'flex',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function SideCarousel() {
  const classes = useStyles();
  return ( 
<div className={classes.root}>
<Grid container spacing={2}>
     
<Grid item xs={6}>
    <Fade left duration={2000}>
    
    <h1 className="text-title"> Connaître nos produits désinfectants</h1>
    <div className="fonction">
    <ul className="d-none" >
    <li> <h3> <i className="fa li fa-check"/> {''} Pour les mains</h3> </li><br/>
    <li> <h3> <i className="fa li fa-check"/> {''} Pour les surfaces et les objets</h3> </li><br/>
    <li> <h3> <i className="fa li fa-heartbeat"/> {''} Emmenez-les partout avec vous</h3> </li><br/>
    </ul></div>
    
    </Fade>
    </Grid>

    <Grid item xs={6}>
        
     <Fade left duration={2000}>
           
     <Carousel className="carousel" autoPlay>
    <div>
      <img alt="" src={img2} />
      
    </div>
    <div>
      <img alt="" src={img1} />
      
    </div>
    
    
  </Carousel>
    </Fade>

   
    
    </Grid>
    
    </Grid>
    </div>

   
  );
}