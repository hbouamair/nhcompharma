import React, {useContext} from "react"
import StripeCheckout from "react-stripe-checkout"
import axios from "axios"
import {cartContext} from "../Global/cartContext"
import Paper from '@material-ui/core/Paper';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "@material-ui/core";
toast.configure();
const Cart = (props) => {
   
    const {dispatch, shoppingCart, totalPrice, qty} = useContext(cartContext);
         console.log("total qty: ",qty);

   
   
    return(
       <div className="container">
       <Paper>
       <div className="cartDetails">
           {shoppingCart.length ? shoppingCart.map(product => (
       <div className="cart" key={product.id}>
        <span className="cartProImage"><img src={product.image} alt=""/>
           <span className="imageCount">{product.qty}</span>
        </span>
        <span className="cartProductName">{product.name}</span>
         <span className="inc" onClick={() => dispatch({type: 'INC', id:product.id})}><i className="fas fa-plus"></i></span>
        <span className="productQuantity">{product.qty}</span>
        <span className="dec" onClick={() => dispatch({type: 'DEC', id: product.id})}><i className="fas fa-minus"></i></span>
        
        <button onClick={() => dispatch({type: 'DELETE_PRODUCT', id: product.id})} className="deleteCartPro"><i className="fas fa-trash-alt"></i></button>
           </div>  
        )) : 'Yourr Cart is currently empty!'}
        
        </div>
        {shoppingCart.length ? <div className="cartSummary">
            <div className="summary">
                <h3>Order Summary</h3>
                <div className="totalItems">
                    <div className="items">Total Items</div>
               <div className="itemsCount">{qty}.00</div>
                </div>
            
       <div className="stripSection">
       <Button variant="contained" color="primary" 
       >Commander  </Button>
       </div>
       </div></div>
        : ''}
      
       
        </Paper>   
</div>
    )
}

export default Cart;