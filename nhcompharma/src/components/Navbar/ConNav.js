import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  
  menuButton: {
    
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl); 

  

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
       sessionStorage.removeItem("jwt");  
       sessionStorage.removeItem("currentuser");
       window.location.reload(false);
  };  

  const handleC = () => {}

  

  return (
    <div >
      
      
        <Toolbar>
         
         
          {sessionStorage.getItem("jwt") && (
            <div> 
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle  style={{ fontSize: '35px' , color: green[500] }}/>
            </IconButton> 
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                open={open} 
                onClick={() => { setAnchorEl(!anchorEl)}}
               
              > 
  
                <MenuItem onClick={event =>  window.location.href='/profile'}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Se déconnecter</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
     
    </div>
  );
}