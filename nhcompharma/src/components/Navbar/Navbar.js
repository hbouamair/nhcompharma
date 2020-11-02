import React, { Component } from 'react';
import {useContext} from "react"
import { MenuItems } from "./MenuItems"
import { Button } from "./Button"
import './Navbar.css'
import {Link} from "react-router-dom"
import logo from '../../assets/nh.png'
import Navi from '../Navbar'



class Navbar extends Component {
    
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems fixed-top ">
                <h1 className="navbar-logo"><img className="logo" src={logo} /></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                                
                            </li>
                            
                        )
                    })}
                </ul>
              <Link to="/login">   <Button className="btn"> Sign Up</Button></Link>
                <Navi/>
            </nav>
        )
    }
}

export default Navbar