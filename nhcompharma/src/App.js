import React , {useState,useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Products from "./components/Products"
import Cart from "./components/Cart"
import ProductContextProvider from "./Global/productContext"
import CartContextProvider from "./Global/cartContext"
import login from "./components/Auth/Login";
import register from "./components/Auth/register/Register";
import Home from "./components/Home/index" ; 
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {    


const notify = (message) => toast(message);  
  
useEffect(() => {
  window.addEventListener("offline", () => notify("vous êtes actuellement hors connexion") ) ;
  window.addEventListener("online", () => notify("Bon retour")); 


    return () => {
      window.removeEventListener("offline", () => notify("vous êtes actuellement hors connexion"));
      window.removeEventListener("online", () => notify("Bon retour !"));
   }; 

 }); 

  return (
    <div> 
      <ToastContainer />
      <ProductContextProvider>
      <CartContextProvider>
      <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path = "/login" exact component={login}/>
          <Route path = "/register" exact component={register}/>
        </Switch>
      </Router>
      </CartContextProvider>
      </ProductContextProvider>  
    </div>
  );
}

export default App;
