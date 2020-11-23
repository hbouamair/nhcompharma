import React, {useContext} from "react"
import {cartContext} from "../Global/cartContext"
import {Link} from "react-router-dom"
import logo from "../assets/nh.png"
import Navbar from 'react-bootstrap/Navbar'
import { Button } from "@material-ui/core"

const Navbare = ({cartToggle}) => {
   const {shoppingCart} = useContext(cartContext);
    return(

        
        <div>

        <ul className="dollor" >
    <li onClick={cartToggle}><Link to="/cart"><span className="dollor1">
    <i className="fas fa-cart-plus"></i></span>
    <span className="shoppingCartTotal">{shoppingCart ? shoppingCart.length : 0}</span></Link></li>

    
 </ul>
</div>
    )

}

export default Navbare;