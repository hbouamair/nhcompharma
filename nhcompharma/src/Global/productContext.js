import React, {createContext, useEffect , useState} from "react" ;
import SERVER_URL from "../components/variables/server_url";
export const productContext = createContext();


const ProductContextProvider = (props) => {
     
    const [products , setproducts ] = useState([]); 
    const [isloading , setisloading ] = useState(true);
   

 useEffect(()=> {    

 fetch(SERVER_URL+"products", {  
 
   method : 'GET'
 })
   .then(res => res.json().then( data => { 

    if (res.status >= 200 && res.status <= 299) {
    setproducts(data); 
    setisloading(false); 
    }else{ 
        setisloading(false);
    }

   }))
  

},[]) 

    return(
        <productContext.Provider value={{products,isloading}}>
           {props.children}
        </productContext.Provider>
    )

}

export default ProductContextProvider;