import React, {createContext, useReducer , useEffect, useState} from "react"
import {CartReducer} from "./cartReducer"
export const cartContext = createContext();

const CartContextProvider = (props) => {    
    
  
    const [cart, dispatch] = useReducer(CartReducer,{shoppingCart: [], totalPrice: 0, message: '', qty: 0}); 

    useEffect(() => { 
        const cart1 = sessionStorage.getItem("cart");  
        if (cart1 == null) { 
              console.log("null");
        }else{     
               
            dispatch({type:'UPDATE' , playload : JSON.parse(cart1)});
                           
        }  

    },[]);  
    useEffect (() => { 
          sessionStorage.setItem("cart",JSON.stringify(cart));
    },[cart]);    

      
    return(
        <cartContext.Provider value={{...cart,dispatch}} >
           {props.children}
        </cartContext.Provider>
    )

}

export default CartContextProvider;