import React, {createContext, useEffect , useState} from "react"
import watch from "../assets/of.png"
import perfum from "../assets/of1.png"
import dslr from "../assets/of2.png"
import SERVER_URL from "../components/variables/server_url";
export const productContext = createContext();


const ProductContextProvider = (props) => {
     
    const [products , setproducts ] = useState([]);
   

 useEffect(()=> {    

 fetch(SERVER_URL+"products", {  
 
   method : 'GET'
 })
   .then(res => res.json())
   .then(
     (data) => {  
       setproducts(data);
     },
     (error) => {
          
     }
   ) 

},[]) 

    return(
        <productContext.Provider value={{products}}>
           {props.children}
        </productContext.Provider>
    )

}

export default ProductContextProvider;