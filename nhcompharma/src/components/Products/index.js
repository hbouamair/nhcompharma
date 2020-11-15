import React, {useContext, useState} from "react"
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
} from './ProductsElements';
import Button from "@material-ui/core/Button";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { productContext } from "../../Global/productContext"
import {cartContext} from "../../Global/cartContext"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const Products = ({  data }) => {
  const [open, setOpen] = React.useState(false);


  const  greeting = ()=> {
    setOpen(true);
    
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  
  const {products} = useContext(productContext);
  const {dispatch} = useContext(cartContext);
  return (

    <div >
      <Dialog  open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="form-dialog-title">Produit Ajoutée  </DialogTitle>
      <DialogContent>
        <DialogContentText>
         Votre produit a été bien ajouter au panier   
         
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
   
    
    <ProductsContainer>
      <ProductsHeading>Nos Produits</ProductsHeading>
      <ProductWrapper>
      {products.map(product => (
          
            <ProductCard key={product.id}>
              <ProductImg src={product.image} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductButton onClick={ () =>{ dispatch({type: 'ADD_TO_CART', id: product.id, products});
                handleClickOpen();
              }}
               
               >  Ajouter au panier</ProductButton>
              </ProductInfo>
            </ProductCard>
          
      ))}
      </ProductWrapper>
    </ProductsContainer>
    </div>
  );
};

export default Products;
