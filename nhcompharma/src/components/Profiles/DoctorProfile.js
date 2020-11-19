import React , {useState , useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import SaveIcon from '@material-ui/icons/Save';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import { CenterFocusStrong } from '@material-ui/icons';
import './Profile.css' ; 
import SERVER_URL from '../variables/server_url'; 
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';  
import { useForm } from "react-hook-form" ; 


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },

button:{
    margin:10,

  },
  heroContent: {
    
 
    padding: theme.spacing(6, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    
    paddingBottom: theme.spacing(12),
  },
  card: {
    borderRadius:'23px' ,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function DoctorProfile() {
  const classes = useStyles();   

  const [ username , setusername ] = useState("");  
  const [ email , setemail ] = useState("");      
  const [ adresseCabinet, setadresseCabinet] = useState("");
  const [ nom_medcin, setnom_medcin] = useState(""); 
  const [ prenom_medcin, setprenom_medcin] = useState(""); 
  const [ phone_num_medcin, setphone_num_medcin] = useState(""); 
  const [ ice_medcin, setice_medcin] = useState(""); 

  const [ newpassword , setnewpassword] = useState(""); 
  const [ oldpassword , setoldpassword] = useState(""); 

  const { handleSubmit, register, errors } = useForm(); 

  
  useEffect(() => {  
          
    getUserDetails(); 

   },[]);
  
  const getUserDetails  = () => {  

    const jwt = sessionStorage.getItem("jwt");
    fetch(SERVER_URL+ "currentuser", {
        method: 'GET' , 
        headers : {'Authorization' : jwt  , 
        'Content-Type' : 'application/json'
         }  ,

       })
    .then(res => res.json())
    .then(data =>  
     {
          setemail(data.email); 
          setusername(data.username);
          setadresseCabinet(data.adresse_cabinet);
          setnom_medcin(data.nom_medcin);
          setprenom_medcin(data.prenom_medcin);
          setphone_num_medcin(data.phone_num_medcin);
          setice_medcin(data.ice_medcin); 

          console.log(data)

    })
    .catch(err => console.error(err))


  } 

  const onSubmitPassword = () => { 
  
      
    const token = sessionStorage.getItem("jwt") ;  
    const id = JSON.parse(sessionStorage.getItem("currentuser")).id;  

      const formData = new FormData(); 
      formData.append("oldpassword",oldpassword); 
      formData.append("newpassword",newpassword); 
  
    fetch(SERVER_URL+"updatepassword/"+id,{ 
      method : 'PUT' ,  
      headers : { 
      'Authorization': token , 
      } ,  
      body:formData
      })  
       .then(r => r.json()
         .then(data =>   
            {     
          
              if (r.status >= 200 && r.status <= 299) {      
                toast.success("Votre mot de passe a bien été modifié");
                
              } else {      
                 
                toast.error(data.error); 
            
             }
            
         }
    
       
       ))
       .catch((error) => {    

     }); 

    
}

  const onSubmit = () => {  

    
    const id = JSON.parse(sessionStorage.getItem("currentuser")).id;      
    const token = sessionStorage.getItem("jwt") ;    
    const user =  
    { "username" : username ,  
    "email" : email , 
    "password" : "null" ,  
    "adresseCabine" : adresseCabinet ,  
    "nom_medcin" : nom_medcin ,  
    "prenom_medcin" : prenom_medcin , 
    "phone_num_medcin" : phone_num_medcin ,  
    "ice_medcin" : ice_medcin , 
    "role" : "USER" 
     } 
    
    fetch(SERVER_URL+"accounts/medcin/"+id ,{ 
    method : 'PUT' ,  
    headers : {'Content-Type' : 'application/json' ,  'Authorization': token } , 
    body : JSON.stringify(user)
    })  
     .then(r => r.json()
       .then(data =>  
          {    
            if (r.status >= 200 && r.status <= 299) {      
               toast.success("La Modification a été effectuée avec succès"); 
            } else {      
               
               toast.error(data.error);
           }
          
       }
  
     
     ))
     .catch((error) => {    



}); 

  } 

  

  return (
    <React.Fragment>
      
      
      <main id="hero-profile">
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <h1    className="title-profile" align="center" color="textPrimary" gutterBottom>
             Profile
            </h1>
            
            
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
              <Grid item xs={12} >
                <Card variant="outlined"
                 className={classes.card}>
                  
                  <CardContent className={classes.cardContent}>
                

                  <form className={classes.form} onSubmit={ handleSubmit(onSubmit)} >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="nom_medcin"
                variant="outlined"
                required
                fullWidth
                id="nom"
                label="Nom"
                autoFocus 
                onChange={(e) => {  setnom_medcin(e.target.value);  }} 
                value = {nom_medcin}
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
                onChange={(e) => {  setprenom_medcin(e.target.value);  }} 
                value={prenom_medcin}
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
                onChange={(e) => {  setusername(e.target.value);  }}
                autoComplete="username" 
                value={username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Adresse de votre Cabinet" 
                onChange={(e) => {  setadresseCabinet(e.target.value);  }}
                name="adresseCabinet"
                autoComplete="adresseCabinet" 
                value={adresseCabinet}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="ice"
                label="ICE"
                name="ice_medcin" 
                onChange={(e) => {  setice_medcin(e.target.value);  }}
                value={ice_medcin}

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone_num_medcin"
                label="Téléphone / Fax"
                name="phone_num_medcin"  
                onChange={(e) => {  setphone_num_medcin(e.target.value);  }} 
                value={phone_num_medcin}

                
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
                onChange={(e) => {  setemail(e.target.value);  }}
                autoComplete="email" 
                value={email}
              />
            </Grid>
            
          </Grid> 

                <Button
                  variant="contained"
                  color="primary"
                  size="large" 
                  type="submit"
                  className={classes.button}
                  startIcon={<SaveIcon />}
                >
                 Enregistrer
                </Button>
        </form> 
          
        <form className={classes.form} onSubmit={ handleSubmit(onSubmitPassword) } >
           <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="oldpassword"
                label="Le Mot de passe actuel"
                type="password"
                id="oldpassword"
                autoComplete="current-password" 
                onChange={(e) => { setoldpassword(e.target.value); }}  
                value={oldpassword}
              />
            </Grid> 

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="newpassword"
                label="Le nouveau mot de passe"
                type="password"
                id="newpassword"
                autoComplete="current-password" 
                onChange={(e) => { setnewpassword(e.target.value); }}  
                value={newpassword}
              />
            </Grid>
            
          </Grid> 

          <CardActions>
                   
                  <Button
                  variant="contained"
                  color="primary"
                  size="large" 
                  type="submit" 
                  className={classes.button}
                  startIcon={<SaveIcon />}
                >
                  Enregistrer
                </Button>
                  </CardActions>
                  
        </form>
                   
                  </CardContent>
                  
                </Card>
              </Grid>
      
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      
        
      
      {/* End footer */}
    </React.Fragment>
  );
}