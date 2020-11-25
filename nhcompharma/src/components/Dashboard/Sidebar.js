import React, { Component } from 'react'
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import SupervisorAccountTwoToneIcon from '@material-ui/icons/SupervisorAccountTwoTone';
import { NavLink, Link } from 'react-router-dom'
import $ from 'jquery';
import SideNav from './RightNav';




class Sidebar extends Component {
  
  


  render() {
    return (
      <div>
      <SideNav/>
      
      <div className="sidebar" >
     
      
      
      
        <div className="sidebar-wrapper" >
          <div className="logo">
          
            <Link to='/' className="simple-text">
            <SupervisorAccountTwoToneIcon  style={{ fontSize: 30 
             }}/>
              Administration 
            </Link>
          </div>
          <ul className="nav   ">
            <li className="nav-item">
              <NavLink className="nav-link" to='/dashboard'>
              <i className="nc-icon">  <LocalMallOutlinedIcon  style={{ fontSize: 30 ,
                padding :2 ,
               }}/></i>
                <p>Produits</p>
              </NavLink>
            </li>
           
            <li className="nav-item">
            <NavLink className="nav-link" to='/commandes'>
            <i className="nc-icon">  <AddShoppingCartSharpIcon style={{ fontSize: 30 ,
                padding :2 ,
               }}/></i>
              <p>Commandes</p>
            </NavLink>
          </li>
           <li className="nav-item">
              <NavLink className="nav-link" to='/profile'>
              <i className="nc-icon">  <AccountCircleOutlinedIcon style={{ fontSize: 30 ,
                padding :2 ,
               }}/></i>
                <p>Profile</p>
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
      </div>

      
    
    )
  }
}

export default Sidebar