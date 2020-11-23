import React , { useState , useEffect }from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link, Redirect} from "react-router-dom"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box'; 
import { Input } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'; 
import  SERVER_URL from '../variables/server_url';   
import { Alert } from '@material-ui/lab'; 
import Collapse from '@material-ui/core/Collapse'; 
import { useForm } from "react-hook-form";  
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import './login.css' ;   





const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  card: {
    
    borderRadius:'25px' ,
    marginTop: theme.spacing(8),
    border: '1px solid  #A5D297' ,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 3px 5px 2px  #A5D297',
   

  },
  link:{
    color:'#343838',
  },
}));

export default function SignIn() {
  const classes = useStyles();  

  const [state,setState] = useState( 
    {
    username : "",
    password : "" , 
    isChecked : false 
   } 
  )  



  const [open , setOpen ] =useState(false);  
  const { handleSubmit, register, errors } = useForm(); 
  const [disabled , setDisabled] = useState(false);   

  const [username,setUsername] = useState(""); 
  const [password ,setPassword] = useState(""); 
  const [isChecked ,setChecked] = useState(false);  

  const [isOnline, setNetwork] = useState(window.navigator.onLine); 

  const handlechange = (e) => { 
    const { id , value } = e.target ;   
   
    setState(prevstate => ({...prevstate ,[id] : value }));   
  }     


  const handlecheck = (e) => {  
    const { id , checked } = e.target ;   

    setState(prevstate => ({...prevstate ,[id] : checked })); 
  } 

 
     useEffect(() => {      

      if(localStorage.username !== "" && localStorage.password !== "" )  {

        setUsername(localStorage.username);
        setPassword(localStorage.password );  
        setChecked(localStorage.isChecked);

        
      }     


     },[]);     
     
     

     const getCurrentUser = () => {  
      const jwt = sessionStorage.getItem("jwt");
      fetch(SERVER_URL+ "currentuser", {
          method: 'GET' , 
          headers : {'Authorization' : jwt  , 
          'Content-Type' : 'application/json'
        }  ,

     })
      .then(res => res.json().then ( data => {  
        if (res.status >= 200 && res.status <= 299) {
         sessionStorage.setItem("currentuser",JSON.stringify(data));  
         window.location.href="/";  
        }

      }))
      .catch(err => console.error(err))

       

     }



   const login = () => {  

     const user = { "username" : username , "password" : password } 
     fetch(SERVER_URL+ "login", {
      method: 'POST',
      body: JSON.stringify(user)
     })
      .then(res => {
          const jwtToken = res.headers.get('Authorization');
          if (jwtToken !== null) {     
          
              sessionStorage.setItem('jwt', jwtToken);  
              getCurrentUser();  
              
              console.log("authenticated successfully") ;  
              if(isChecked){
              localStorage.setItem('username',  username ) ; 
              localStorage.setItem('password',  password ) ;    
              localStorage.setItem('isChecked', isChecked ) ;  
              
         /*     setTimeout(() => {  
                
                  window.location.href="/";  
 
               },1000)  */

             

            
              }
              setDisabled(false);  

            
          }
          else{
              setOpen(true); 
              setDisabled(false)
          }
      })
      .catch(err => console.error(err))
   }  

    const onSubmit = () => { 
          console.log("username : "+ username +" password : "+password);   
          setDisabled(true);
          login();
     }; 
     


  return (
    <Container className={classes.card} component="main" maxWidth="xs"> 
      <ToastContainer />
      <CssBaseline /> 
      <Collapse in={open} style={{ width:'100%',}}>  
           <Alert severity="error" onClose ={ () => { setOpen(false)}  }>Utilisateur non trouvé !</Alert>
         </Collapse>
      <div className={classes.paper}>   
        <h2 component="h1" className="title-head"  variant="h5"> Bienvenue  </h2>
        <form className={classes.form}  onSubmit={ handleSubmit(onSubmit)}>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Nom d'utilisateur"
            name="username"
            autoComplete="username" 
            autoFocus 
            onChange={(e) => {  setUsername(e.target.value);  }}     
            value={username}  
          />      
      
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Mot de passe"
            name="password"
            type="password"
            id="password" 
            autoComplete="current-password" 
            onChange={(e) => {  setPassword(e.target.value); }}  
            value={password}
          
          />   

          <FormControlLabel
            control={<Checkbox id="isChecked"   checked={isChecked} onChange={(e) => { setChecked(e.target.checked); console.log(isChecked)}}    color="primary" />}
            label="Remember me"
          /> 

         
          <Button 
            disabled={disabled}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}   
         
            type="submit"
             
          >
          S'identifier
          </Button>
          <Grid container>
            <Grid item xs>
             
            </Grid>
            <Grid item>
              <Link to="/register" className={classes.link} variant="body">
                {"Vous n'avez pas de compte ? Inscrivez-vous"}
              </Link>
            </Grid>
          </Grid>
  </form> 
 
      </div>
      <Box mt={8}>
        
      </Box>
    </Container>
  );
}