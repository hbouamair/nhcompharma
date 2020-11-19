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
  avatar: {
    margin: theme.spacing(1),
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

export default function SignUp() {
  const classes = useStyles();     

  const [ username , setusername ] = useState("");  
  const [ email , setemail ] = useState("");  
  const [ password , setpassword] = useState("");    
  const [nom_clinique , setnomcli] = useState("");
  const [nom_resp_clinique, setnom_resp_clinique] = useState("");
  const [prenom_resp_clinique,setprenom_resp_clinique] = useState(""); 
  const [ice_clinique, setice_clinique] = useState("");
  const [adresse_clinique, setadresse_clinique] = useState("");
  const [phone_num_clinique, setphone_num_clinique] = useState(""); 

  
  const { handleSubmit, register, errors } = useForm();  

  
  

  const onSubmit = () => {   

      Login();  
   
  };  

  const Login = () => { 

  const user = {"username" : username , "email" : email , "password" : password , "nom_clinique" : nom_clinique , "nom_resp_clinique" : nom_resp_clinique , "prenom_resp_clinique" : prenom_resp_clinique , "ice_clinique" : ice_clinique , "adresse_clinique" : adresse_clinique , "phone_num_clinique" : phone_num_clinique , "role" :  "USER"  }
     

        fetch(SERVER_URL+"signup/clinique" ,{ 
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
       <ToastContainer />
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={ handleSubmit(onSubmit)} >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="nom_clinique"
                variant="outlined"
                required
                fullWidth
                id="Nom du Clinique"
                label="Nom du Clinique"
                autoFocus 
                onChange={(e) => { setnomcli(e.target.value);  }}
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
                onChange={(e) => { setemail(e.target.value);  }}
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
                autoComplete="username" 
                onChange={(e) => { setusername(e.target.value);  }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="ice"
                label="ICE"
                name="ice_clinique"
                autoComplete="ice" 
                onChange={(e) => { setice_clinique(e.target.value);  }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="tele"
                label="Téléphone / Fax"
                name="telephone"
                autoComplete="tele" 
                onChange={(e) => { setphone_num_clinique(e.target.value);  }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="nom_responsable"
                label="Nom du responsable"
                name="nom_resp_clinique"
                autoComplete="nom_resp_clinique" 
                onChange={(e) => { setnom_resp_clinique(e.target.value);  }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="prenom_resp_clinique"
                label="Prenom du responsable"
                type="text"
                id="prenom_resp_clinique"
                autoComplete="prenom_resp_clinique" 
                onChange={(e) => { setprenom_resp_clinique(e.target.value);  }} 
              /> 

            </Grid>  
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="adresse_clinique"
                label="Adresse du clinique"
                type="text"
                id="adresse_clinique"
                autoComplete="adresse_clinique"  
                onChange={(e) => { setadresse_clinique(e.target.value);  }}
              /> 

            </Grid> 
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="password"  
                onChange={(e) => { setpassword(e.target.value);  }}
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