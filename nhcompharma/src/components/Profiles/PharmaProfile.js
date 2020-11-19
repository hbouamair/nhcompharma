import React , {useEffect , useState} from 'react';
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

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField'; 
import SERVER_URL from '../variables/server_url'; 
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import './Profile.css' ; 
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

export default function PharmaProfile() {
  const classes = useStyles(); 

  const [ username , setusername ] = useState("");  
  const [ email , setemail ] = useState("");  
 
  const [ nom_pharmacie, setnom_pharmacie] = useState("");
  const [ phoneNumPharmacie , setphoneNumPharmacie] = useState(""); 
  const [ adresse_pharmacie , setadresse_pharmacie ] = useState("") ;  
  const [ prenom_resp_pharmacie, setprenom_resp_pharmacie] = useState("") ;
  const [ nom_resp_pharmacie, setnom_resp_pharmacie] = useState(""); 
  const [ ice_pharmacie, setice_pharmacie] = useState("");   
  
  const [ newpassword , setnewpassword] = useState("");   
  const [ oldpassword , setoldpassword] = useState(""); 

  const { handleSubmit, register, errors } = useForm();  


  const onSubmit = () => {  

    const user = {"username" : username , "email" : email , "nom_pharmacie" : nom_pharmacie , "phoneNum_pharmacie" : phoneNumPharmacie , "adresse_pharmacie" : adresse_pharmacie , "nom_resp_pharmacie" : nom_resp_pharmacie , "prenom_resp_pharmacie" : prenom_resp_pharmacie , "ice_pharmacie" : ice_pharmacie , "password" : "null" , "role" : "USER"}
    const id = JSON.parse(sessionStorage.getItem("currentuser")).id;      
    const token = sessionStorage.getItem("jwt") ;  

    fetch(SERVER_URL+"accounts/pharmacie/"+id ,{ 
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

  useEffect(() => {  
          
    getUserDetails(); 

},[]);  

  const getUserDetails  = () => {  

    const jwt = sessionStorage.getItem("jwt");
    fetch(SERVER_URL+"currentuser", {
        method: 'GET' , 
        headers : {'Authorization' : jwt  , 
        'Content-Type' : 'application/json'
         }  ,

       })
    .then(res => res.json())
    .then(data =>  
     {
        console.log(data)
        setusername(data.username);
        setemail(data.email);
        setice_pharmacie(data.ice_pharmacie);
        setnom_pharmacie(data.nom_pharmacie);
        setnom_resp_pharmacie(data.nom_resp_pharmacie);
        setprenom_resp_pharmacie(data.nom_resp_pharmacie);
        setadresse_pharmacie(data.adresse_pharmacie);  
        setphoneNumPharmacie(data.phoneNum_pharmacie);  

      

    })
    .catch(err => console.error(err))


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
                <Card className={classes.card}>
                  
                  <CardContent className={classes.cardContent}>
                         
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
                value={nom_resp_pharmacie}
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
                value={prenom_resp_pharmacie}
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
                disabled
                onChange={(e) => { setusername(e.target.value);}}
                autoComplete="username" 
                value={username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="adresse_pharmacie"
                label="Adresse de la pharmacie" 
                onChange={(e) => { setadresse_pharmacie(e.target.value);}}
                name="adresse_pharmacie"
                autoComplete="adresse" 
                value={adresse_pharmacie}
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
                value={ice_pharmacie}
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
                value={phoneNumPharmacie}
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
                value={nom_pharmacie}
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
                 
                  <CardActions>
              
                   
                  </CardActions>
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