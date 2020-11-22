import React , {useState , useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'; 
import { useForm } from "react-hook-form" ;  
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import SERVER_URL from '../../../variables/server_url';
import { FaGlassMartiniAlt } from 'react-icons/fa';
import HorizontalLabelPositionBelowStepper from '../Type/HorizontalLinearStepper';

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

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar : { 
    margin: theme.spacing(1) ,        
    
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Part() {
  const classes = useStyles();   
  
  const [ nom , setnom ] = useState("") ;   
  const [ prenom , setprenom ] = useState("") ;  
  const [ username , setusername ] = useState("") ;   
  const [ cin , setcin ] = useState("") ;  
  const [ telephone , settelephone ] = useState("") ;  
  const [ email , setemail ] = useState("") ;  
  const [ password , setpassword] = useState("") ;   

  const { handleSubmit, register, errors } = useForm();    

  const [ emailError , setemailError ] = useState("");  
  const [ passwordError , setpasswordError] = useState("");  

  
  const onSubmit = () => {  

     Login();    

    
   }; 

  const Login = () => { 

      const user = { "nom" : nom , "prenom" : prenom , "username" : username  , "cin" : cin , "telephone" : telephone , "email" : email , "password" : password , "role" :"USER" }
       

          fetch(SERVER_URL+"signup/particulier" ,{ 
          method : 'POST' ,  
          headers : {'Content-Type' : 'application/json' } , 
          body : JSON.stringify(user)
          })  
           .then(r => r.json()
             .then(data =>  
                {    
                  if (r.status >= 200 && r.status <= 299) {      
                     toast.success("Votre Compte a bien été créé"); 
                  } else {      
                     
                    toast.error(data.error);
                 }
                
             }
        
           
           ))
           .catch((error) => {    

  

     }); 
   
  }
  
  return (
    <Container component="main" maxWidth="xs">  
      <HorizontalLabelPositionBelowStepper activestep={1} />
       <ToastContainer />
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form}  onSubmit={ handleSubmit(onSubmit)} >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="nom"
                name="nom"
                variant="outlined"
                required={true}
                fullWidth
                id="nom"
                label="Nom"
                autoFocus    
                onChange={(e) => { setnom(e.target.value); }}       
              />    
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="prenom"
                label="Prénom"
                name="prenom"
                autoComplete="lname" 
                onChange={(e) => {  setprenom(e.target.value);  }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="login"
                label="Login"
                name="username" 
                onChange={(e) => {  setusername(e.target.value);  }}
                autoComplete="login" 
                
              />
            </Grid>
           {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="adresse"
                label="Adresse"
                name="adresse"
                autoComplete="adresse" 
                onChange={(e) => {  setadresse(e.target.value);  }} 
                </Grid>
            /> */}
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="cin"
                label="CIN" 
                name="cin"
                autoComplete="cin" 
                onChange={(e) => {  setcin(e.target.value);  }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                 required
                variant="outlined"
                fullWidth
                id="telephone"
                label="Téléphone"
                name="telephone"
                autoComplete="telephone"  
                onChange={(e) => {  settelephone(e.target.value);  }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email" 
                onChange={(e) => {  setemail(e.target.value);  }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth 
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password" 
                onChange={(e) => {  setpassword(e.target.value);  }}
              />
            </Grid>
            
          </Grid> 

    
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
           className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
     
    </Container>
  );
}