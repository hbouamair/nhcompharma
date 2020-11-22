import React, {useContext ,useState} from "react"
import {cartContext} from "../Global/cartContext"
import Paper from '@material-ui/core/Paper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "@material-ui/core";
import { Redirect } from "react-router";
import SERVER_URL from "./variables/server_url"; 
import LinearProgress from '@material-ui/core/LinearProgress' ;  
import { makeStyles } from '@material-ui/core/styles';

toast.configure(); 

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
const Cart = (props) => {
   
    const {dispatch, shoppingCart, qty} = useContext(cartContext);
         console.log("total qty: ",qty);  

    const classes = useStyles();     
    const [open,setopen] = useState(false) 


    const order = () => {  
        
        if(!sessionStorage.getItem("jwt")){ 
           window.location.href="/login"  
         }else{  
            setopen(true);
            const jwt = sessionStorage.getItem("jwt");  
            const user = JSON.parse(sessionStorage.getItem("currentuser"));
          const commande = {  
             "ligneCommandes" : shoppingCart.map(p => {  
                 const product = { "quantite" : p.qty , "produit" : { "id" : p.id } }
                   return product ; 
                 })  
          } 

        

          fetch(SERVER_URL+"addCommande/"+user.id ,{ 
            method : 'POST' ,  
            headers : {'Content-Type' : 'application/json' , 'Authorization' : jwt } , 
            body : JSON.stringify(commande)
            })  
             .then(r => r.json()
               .then(data =>  
                  {    
                    if (r.status >= 200 && r.status <= 299) {      
                       toast.success("Votre Commande a bien été Envoyé ! On vous contactera prochainement ");  
                       setopen(false);
                    } else {      
                       toast.error("Erreur");  
                       setopen(false);
                   }
                  
               }
          
             
             ))
             .catch((error) => {    
    
    
    
       }); 


         }

    }      

    const ShowProgress = () => { 
       return open ? <LinearProgress /> : "" ; 
    }

    return(
       <div className="container">
       <Paper>  
       <div className={classes.root}>
        <ShowProgress />
       </div>   
       <div className="cartDetails"> 

           {shoppingCart.length ? shoppingCart.map(product => (
       <div className="cart" key={product.id}>
        <span className="cartProImage"><img src={"data:image/jpg;base64,"+product.photo} alt=""/>
           <span className="imageCount">{product.qty}</span>
        </span>
        <span className="cartProductName">{product.nom}</span>
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
       <Button  
       variant="contained"  
       color="primary"  
       onClick={order} 
       disabled={open}
       >Terminer ma commande </Button>
       </div>
       </div></div>
        : ''}
      
       
        </Paper>   
</div>
    )
}

export default Cart;