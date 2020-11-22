import React , {useState,useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Products from "./components/Cards/index"
import Cart from "./components/Cart"
import ProductContextProvider from "./Global/productContext"
import CartContextProvider from "./Global/cartContext"
import login from "./components/Auth/Login";
import Form from "./components/Auth/register/Type/Index";
import Doctor from "./components/Auth/register/DocRegist/Formdoc";
import Pharmacie from "./components/Auth/register/PharmacieRegist/Formphar";
import Particulier from "./components/Auth/register/ParticulRegist/Formpart";
import Hospital from "./components/Auth/register/HospitalRegist/Formhop";
import Admin from "./components/Dashboard/index.js"
import Home from "./components/Home/index" ; 
import Profile from "./components/Profiles/DoctorProfile" 
import Toprofile from "./components/Auth/register/Toprofile" ; 


import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Profilebyuser from './components/Auth/register/Profilebyuser';
import SERVER_URL from './components/variables/server_url';

function App() {    


const notify = (message) => toast(message);    


const [produits,setproduits] = useState([]); 


   useEffect(()=> {    

    fetch(SERVER_URL+"products", {  
    
      method : 'GET'
    })
      .then(res => res.json())
      .then(
        (data) => {  
           setproduits(data); 
        },
        (error) => {
             
        }
      ) 

   },[]) 
  
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
          <Route path = "/register" exact component={Form}/>
          <Route path = "/Doctor" exact component={Doctor}/>
          <Route path = "/Pharmacie" exact component={Pharmacie}/>
          <Route path = "/Clinique" exact component={Hospital}/>
          <Route path = "/Particulier" exact component={Particulier}/>
          <Route path = "/Admin" exact component={Admin}/>
          <Route path = "/products" render={(props) => <Products {...props} produits={produits} />}/>  
          
          <Toprofile path = "/profile" exact component = {Profilebyuser}  />

        </Switch>
      </Router>
      </CartContextProvider>
      </ProductContextProvider>  
    </div>
  );
}

export default App;
