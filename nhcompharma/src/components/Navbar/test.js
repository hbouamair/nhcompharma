import React from 'react' ; 
import {useContext} from "react"
import { MenuItems } from "./MenuItems"
import { but } from "./Button"
import './Navbar.css'
import {Link} from "react-router-dom"
import logo from '../../assets/nh.png'
import Navi from '../Navbar'
import Connect from "./ConNav"

function test() {  
    
    [clicked , setClicked] = React.useState(false);

    handleClick = () => {
       setClicked(!clicked);
    } 

    return (
         
        <nav className="NavbarItems fixed-top ">
        <h1 className="navbar-logo"><Link to="/"><img  className="logo" src={logo} />
        </Link></h1>
        <div className="menu-icon" onClick={handleClick}>
            <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div> 
        
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
            {     
        
            MenuItems.map((item, index) => {  
    

                return (
                    <li key={index}> 
                     <Link to ={item.url}>
                        <a  
                        className={item.cName}  
                        onClick={handleClick} 
                        >
                        {item.title} 
                        </a> 
                     </Link>          
                    </li>

                )
            })
             
            } 
             
        </ul>
    {  
      sessionStorage.getItem("jwt") ? <div></div> : <Link to="/login"> <but className="btno">S'identifier</but></Link> 
    }   
      {' '}
      <Connect/>
      <Navi/>
      
    </nav>
    )
}

export default test
