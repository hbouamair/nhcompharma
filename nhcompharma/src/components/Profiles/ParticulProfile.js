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
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField'; 
import { useForm } from "react-hook-form" ;  
import './Profile.css' ; 
import SERVER_URL from '../variables/server_url'; 
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';



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

export default function ParticulProfile() {
  const classes = useStyles();   
  
  

  const [ nom , setnom ] = useState("");   
  const [ prenom , setprenom ] = useState("");  
  const [ username , setusername ] = useState("");  
  const [ adresse , setadresse ] = useState("");  
  const [ cin , setcin ] = useState("") ;  
  const [ telephone , settelephone ] = useState("") ;  
  const [ email , setemail ] = useState("") ;  
  
  const { handleSubmit, register, errors } = useForm() ;  

  const [ newpassword , setnewpassword] = useState("") ;   
  const [ oldpassword , setoldpassword] = useState("") ;  


  const [user , setuser ]  = useState("");



  useEffect(() => {  
          
      getUserDetails(); 

  },[]);  

  const onSubmit = () => {    

    //alert(nom+prenom+username+adresse+cin+telephone+email);     

    const user = { "nom" : nom , "prenom" : prenom , "cin" : cin , "telephone" : telephone , "email" : email , "password" : "null" , "role" : "USER"  }
    const id = JSON.parse(sessionStorage.getItem("currentuser")).id;      
    const token = sessionStorage.getItem("jwt") ;  

    fetch(SERVER_URL+"accounts/particulier/"+id ,{ 
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

    };     

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

        

          setnom(data.nom);  
          setprenom(data.prenom); 
          setusername(data.username); 
          setadresse(data.adresse);
          setcin(data.cin);
          settelephone(data.telephone);
          setemail(data.email) ;   
          


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
         </h1>
            
            
          </Container>
        </div> 
       
        <Container className={classes.cardGrid} maxWidth="md"> 
          <ToastContainer/>
          {/* End hero unit */}
          <Grid container spacing={4}>
              <Grid item xs={12} >
                <Card className={classes.card}>
                  
                  <CardContent className={classes.cardContent}> 

      <form className={classes.form} onSubmit={ handleSubmit(onSubmit) } >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="prenom"
                variant="outlined"
                required
                fullWidth
                id="prenom"
                label="Prénom"
                autoFocus 
                onChange={(e) => { setprenom(e.target.value); }}  
                 value={prenom}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="nom"
                label="Nom"
                name="nom"  
                value={nom}
                onChange={(e) => { setnom(e.target.value); }} 
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                disabled
                label="Login"
                name="username" 
                onChange={(e) => { setusername(e.target.value); }}  
                value={username}
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="cin"
                label="CIN"
                name="cin" 
                onChange={(e) => { setcin(e.target.value); }}  
                value={cin}
               
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Téléphone / Fax"
                name="telephone" 
                onChange={(e) => { settelephone(e.target.value); }}  
                value={telephone}
               
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
                onChange={(e) => { setemail(e.target.value); }}  
                value={email}
                
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