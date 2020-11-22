import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";
import AddShoppingCartSharpIcon from "@material-ui/icons/AddShoppingCartSharp";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import SupervisorAccountTwoToneIcon from "@material-ui/icons/SupervisorAccountTwoTone";
import { NavLink } from "react-router-dom";
import './Dash.css'
const MobileNavMenu = () => {
    const [menuOpen, toggleMenuOpen] = useState(false);

    return ( 
        <MenuBar >
        
        <MenuIconContainer >

        <MenuIcon menuOpen = { menuOpen }
        onClick = {
            () => toggleMenuOpen(!menuOpen) } >
    
            <div/>
        
        <div/>
        
        <div/>
        </MenuIcon>{" "} 
        </MenuIconContainer>{" "} 
        <MenuLinks  className="sidenav" menuOpen = { menuOpen } >
        
        <ul className = "menulink" >
        
        <li className = "list-menu" >
        
        <Link className="lien" to = "/dashboard" >
        <i className="nc-icon">  <LocalMallOutlinedIcon  style={{ fontSize: 40 ,
          padding :2 ,
         }}/></i>
         Produits {" "} 
        </Link>{" "} 
        </li>{" "} 
        <li className = "list-menu">
        
        <Link className="lien" to = "/commandes" >
        <i className="nc-icon">  <AddShoppingCartSharpIcon style={{ fontSize: 40 ,
          padding :2 ,
         }}/></i>
         Commandes 
        </Link>{" "} 
        </li>{" "} 
        <li  className = "list-menu">
        
        <Link  className="lien" to = "/profile" >
        <i className="nc-icon">  <AccountCircleOutlinedIcon style={{ fontSize: 40 ,
          padding :2 ,
         }}/></i>
        
         Profile {" "} 
        </Link>{" "} 
        </li>{" "} 
        </ul>{" "} 
        </MenuLinks>{" "} 
        </MenuBar>
    );
};

export default MobileNavMenu;

const MenuBar = styled.div `
  @media ${breakpoints.lg} {
    display: none;
  }
  height: 4rem;
  color: #f4f4f4;
  padding: 10px;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuIconContainer = styled.div `
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MenuIcon = styled.button `
  cursor: pointer;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2rem;
  outline: thin-dotted;
  z-index: 1;
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ menuOpen }) => (menuOpen ? "red" : "black")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: opacity 300ms, transform 300ms;
    :first-child {
      transform: ${({ menuOpen }) =>
        menuOpen ? "rotate(45deg)" : "rotate(0)"};
    }
    :nth-child(2) {
      opacity: ${({ menuOpen }) => (menuOpen ? "0" : "1")};
      transform: ${({ menuOpen }) =>
        menuOpen ? "translateX(-20px)" : "translateX(0)"};
    }
    :nth-child(3) {
      transform: ${({ menuOpen }) =>
        menuOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`;

const MenuLinks = styled.nav `

padding :90px 0 0 0;
  flex-direction: column;
  justify-content: top center;
  align-items: center;
  display: flex;
  background: #fafafa;
  position: fixed;
  z-index: 5;
  top: 0;
  right: 0;
  height: 100vh;
  width: 55%;
  transition: transform 250ms;
  transform: ${({ menuOpen }) =>
    menuOpen ? "translateX(0)" : "translateX(100%)"};
  ul {
    width: 100%;
    margin: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    a{
    
    },
  }
  `;