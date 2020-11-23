import React , {useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'; 
import { useForm } from "react-hook-form" ;  
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import SERVER_URL from '../../../variables/server_url';
import HorizontalLabelPositionBelowStepper from '../Type/HorizontalLinearStepper';
import '../register.css'



const useStyles = makeStyles((theme) => ({
   root:{
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(8),
    paddingBottom: '20px',
    boxShadow: '0 3px 5px 2px  #A5D297',
    borderRadius:'20px' ,
    border: '1px solid  #A5D297' ,

   },
  paper: {

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
   
  
   
  },
  
  avatar: {
    
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
})); 

  
  




export default function Pharma() {
  const classes = useStyles(); 


  const [ username , setusername ] = useState("");  
  const [ email , setemail ] = useState("");  
  const [ password , setpassword] = useState("");  
  const [ nom_pharmacie, setnom_pharmacie] = useState("");
  const [ phoneNumPharmacie , setphoneNumPharmacie] = useState(""); 
  const [ adressePharmacie , setadressePharmacie ] = useState("") ;  
  const [prenom_resp_pharmacie, setprenom_resp_pharmacie] = useState("") ;
  const [nom_resp_pharmacie, setnom_resp_pharmacie] = useState(""); 
  const [ice_pharmacie, setice_pharmacie] = useState("");    

  const { handleSubmit, register, errors } = useForm();    

 

  const onSubmit = () => {  

    Login();     

  };  

  const Login = () => { 

   const user = { 
    "username" : username ,  
    "email" : email ,  
    "password" : password , 
    "nom_pharmacie" : nom_pharmacie ,  
    "phoneNum_pharmacie" : phoneNumPharmacie ,  
    "adresse_pharmacie" : adressePharmacie , 
    "prenom_resp_pharmacie" : prenom_resp_pharmacie ,  
    "nom_resp_pharmacie" : nom_resp_pharmacie , 
    "ice_pharmacie" : ice_pharmacie , 
    "role" : "USER" 
   }

        fetch(SERVER_URL+"signup/pharmacie" ,{ 
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
    <Container component="main" maxWidth="xs" className={classes.root}>  
      <HorizontalLabelPositionBelowStepper activestep={1} />
      <ToastContainer />
      <CssBaseline />
      <div className={classes.paper}>
        
      <h2 className="sign-title">
      S'inscrire
      </h2>
        <form className={classes.form}  onSubmit={ handleSubmit(onSubmit)} >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="username"
                name="nom_resp_pharmacie"
                variant="outlined"
                required
                fullWidth
                id="firstName" 
                onChange={(e) => { setnom_resp_pharmacie(e.target.value);  }}
                label="Nom du responsable"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="prenom"
                label="Prénom du pharmacien"
                name="prenom_resp_pharmacie" 
                onChange={(e) => { setprenom_resp_pharmacie(e.target.value);}}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Login"
                name="username" 
                onChange={(e) => { setusername(e.target.value);}}
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="adresse"
                label="Adresse de la pharmacie" 
                onChange={(e) => { setadressePharmacie(e.target.value);}}
                name="adressePharmacie"
                autoComplete="adresse"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="ice"
                label="ICE"
                name="ice_pharmacie" 
                onChange={(e) => { setice_pharmacie(e.target.value);}}
                autoComplete="ice"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Téléphone / Fax"
                name="phoneNumPharmacie" 
                onChange={(e) => { setphoneNumPharmacie(e.target.value);}}
                autoComplete="phone"
              />
            </Grid> 
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="nom_pharmacie"
                label="Nom de la Pharmacie"
                name="nom_pharmacie" 
                onChange={(e) => { setnom_pharmacie(e.target.value);}}
                autoComplete="nom_pharmacie"
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
                onChange={(e) => { setemail(e.target.value);}}
                autoComplete="email"
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
                onChange={(e) => { setpassword(e.target.value);}}
                autoComplete="current-password"
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
            <Link to='/login' variant="body2">
            Vous avez déjà un compte ? Connectez-vous
            </Link>
            </Grid>
          </Grid>
        </form>
      </div>
     
    </Container>
  );
}