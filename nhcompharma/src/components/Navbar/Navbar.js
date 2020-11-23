import React from 'react' ; 
import {useContext} from "react"
import { MenuItems } from "./MenuItems"
import { but } from "./Button"
import './Navbar.css'
import {Link} from "react-router-dom"
import logo from '../../assets/nh.png'
import Navi from '../Navbar'
import Connect from "./ConNav"

function Navbar() {  
    
  const [clicked , setClicked] = React.useState(false);

   const handleClick = () => {
       setClicked(!clicked);
    }  

     const Updatenavbar = () => { 
       return <>  
        <li> 
        <Link to ="/">
           <a  
           className="nav-links"  
           onClick={handleClick} 
           >
           Accueil
           </a> 
        </Link>          
       </li>  
       <li> 
       <Link to ="/products">
          <a  
          className="nav-links"  
          onClick={handleClick} 
          >
          Produits
          </a> 
       </Link>    
       </li >  
  {      
    sessionStorage.getItem("currentuser") 
    ?( 
       JSON.parse(sessionStorage.getItem("currentuser")).role == "ADMIN" 
       && (
        <li> 
        <Link to ="/admin">
           <a  
           className="nav-links"  
           onClick={handleClick} 
           >
           Admin
           </a> 
        </Link>         
       </li> 
        
       )
      

    ) 
    :(<div></div>) 
         
      
    
  }

   {  sessionStorage.getItem('currentuser')  
      ? ( <div></div>  ) 
      : ( 
        <li> 
        <Link to ="/login">
            <a  
            className="nav-links-mobile"  
            onClick={handleClick} 
            >
            S'identifier
            </a> 
         </Link>  
        </li> 
      )
     

   }
      </>   
       

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
       
       <Updatenavbar />
       /*      {     
        
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
             
            } */} 

           
             
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

export default Navbar
