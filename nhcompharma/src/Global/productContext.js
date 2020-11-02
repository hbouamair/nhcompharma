import React, {createContext, useReducer} from "react"
import {ProductReducer} from "./productReducer"
import iphone from "../assets/iphone.jpg";
import headphones from "../assets/headphones.jpg"
import microphone from "../assets/microphone.jpg"
import rings from "../assets/rings.jpg"
import shoes from "../assets/shoes.jpg"
import watch from "../assets/of.png"
import perfum from "../assets/of1.png"
import dslr from "../assets/of2.png"
export const productContext = createContext();


const ProductContextProvider = (props) => {

    const [products] = useReducer(ProductReducer, [
        {id: 1, name: 'Universal Wipes', price: 40, image: dslr, productStatus: 'hot'},
        {id: 2, name: 'Antimicobial Wipes', price: 200, image: perfum,productStatus: 'new'},
        {id: 3, name: 'Body Care Wipes', price: 300, image: watch,productStatus: 'new'},
      
      ])
      
    return(
        <productContext.Provider value={{products}}>
           {props.children}
        </productContext.Provider>
    )

}

export default ProductContextProvider;