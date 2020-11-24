import React , {useState , useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Grid, Paper } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'; 
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'; 
import {cartContext} from "../../Global/cartContext" ; 
import { productContext } from "../../Global/productContext" ;


const useStyles = makeStyles({
  root: {
    maxWidth: '100%' ,
    
    padding:'50px',
    
   
    

    
  },
  media: {
    backgroundSize: 'contain',
   
    height: 400,
    width: 'center ', 
    maxWidth:'100%',
    
    
  

  },
  card:{
    borderRadius:'25px' ,
    maxWidth: '100%' ,
    padding:'30px',
    marginBottom:'30px',
    border: '4px solid  #00A7C8',

  }
  
  
});


export default function MediaCard(props) {
  const classes = useStyles();  

  const [open, setOpen] =  useState(false);


  const  greeting = ()=> {
    setOpen(true);
    
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };  

  const {dispatch} = useContext(cartContext); 
  const {products} = useContext(productContext);

   const Displayproducts = () => {  

    if(products.length == 0 ) { 
      return  <p>Aucun produit n'est disponible pour le moment</p>
        }else { 
            
          return (    
     
        products.map((produit) => {  
               
           return(  
            <Card  className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={"data:image/jpg;base64,"+produit.photo}
                id="img-prod"
              /> 
              
              <CardContent>
                <h3 className="title-product" gutterBottom variant="h5" component="h2">
                {produit.nom} <Chip
                variant="contained"
                size="small"
                color="primary"
                avatar={<Avatar>S</Avatar>}
                label={produit.stock == 0 ? "En rupture de stock" : "Disponible"}
              />
                </h3>
                <p className="desc">
                {produit.description}
                </p>
              </CardContent>

            </CardActionArea>
            <CardActions>
              <Button   
              variant="contained"  
              disableRipple size="small"  
              color="primary" 
              disabled = {produit.stock == 0} 
              onClick={ () =>{ dispatch({type: 'ADD_TO_CART', id: produit.id, products});
              handleClickOpen(); 
             
            } } 
              > 
              <ShoppingCartIcon />
              {' '}
               Ajouter Au panier 
              </Button>
             
            </CardActions>
          </Card> 
          ); 
       }) 
   )  
  }

   }

  return (
      <Grid 
      container className={classes.root} spacing={2}
    >
    
      <Displayproducts /> 
      
      <Dialog  open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="form-dialog-title">Produit Ajoutée  </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Votre produit a été ajouté à votre panier          
        </DialogContentText>
        
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={event =>  window.location.href='/cart'} color="primary">
        <ShoppingCartIcon /> {' '} Aller au panier 
        </Button>
        <Button onClick={handleClose} variant="contained" color="secondary">
          Annuler 
        </Button>
      </DialogActions>
    </Dialog>
      
       
    
         
    
    </Grid>
  );
}