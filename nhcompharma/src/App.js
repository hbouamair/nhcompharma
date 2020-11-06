import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Products from "./components/Products"
import Cart from "./components/Cart"
import ProductContextProvider from "./Global/productContext"
import CartContextProvider from "./Global/cartContext"
import login from "./components/Auth/Login";
import register from "./components/Auth/register/Register";
import Home from "./components/Home/index"

function App() {

  return (
    <div>
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
