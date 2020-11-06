import React , { useState , useEffect }from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from "react-router-dom"
import Grid from '@material-ui/core/Grid';
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
import './login.css'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

        console.log("updated"); 

      }     


     },[]);      



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
              console.log("authenticated successfully") ;  
              if(isChecked){
              localStorage.setItem('username',  username ) ; 
              localStorage.setItem('password',  password ) ;    
              localStorage.setItem('isChecked', isChecked ) ; 

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
    <Container component="main" maxWidth="xs">
      <CssBaseline /> 
      <Collapse in={open} style={{ width:'100%',}}>  
           <Alert severity="error" onClose ={ () => { setOpen(false)}  }>Utilisateur non trouvé !</Alert>
         </Collapse>
      <div className={classes.paper}>   
        <Typography component="h1" className="bienvenue" variant="h5"> Bienvenue sur NH COM PHARMA </Typography>
        <form className={classes.form}  onSubmit={ handleSubmit(onSubmit)}>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            placeholder="Username"
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
            placeholder="Password"
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
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
             
            </Grid>
            <Grid item>
              <Link to="/register" variant="body2">
                {"Don't have an account? Sign Up"}
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