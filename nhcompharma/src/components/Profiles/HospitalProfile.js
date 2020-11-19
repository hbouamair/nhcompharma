import React , {useEffect , useState}  from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import SaveIcon from '@material-ui/icons/Save';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
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

export default function HospitalProfile() {
  const classes = useStyles();  

  const [ username , setusername ] = useState("");  
  const [ email , setemail ] = useState("");  
  const [ nom_clinique , setnomcli] = useState("");
  const [ nom_resp_clinique, setnom_resp_clinique] = useState("");
  const [ prenom_resp_clinique,setprenom_resp_clinique] = useState(""); 
  const [ ice_clinique, setice_clinique] = useState("");
  const [ adresse_clinique, setadresse_clinique] = useState("");
  const [ phone_num_clinique, setphone_num_clinique] = useState("");  

  const [ newpassword , setnewpassword] = useState("");    
  const [ oldpassword , setoldpassword] = useState("");

  
  const { handleSubmit, register, errors } = useForm();  
  
  useEffect(() => {  
          
    getUserDetails(); 

   },[]);
  

  const onSubmit = () => {  

    
    const id = JSON.parse(sessionStorage.getItem("currentuser")).id;      
    const token = sessionStorage.getItem("jwt") ;   
    const user = {"username" : username , "email" : email , "password" : "null" , "nom_clinique" : nom_clinique , "nom_resp_clinique" : nom_resp_clinique , "prenom_resp_clinique" : prenom_resp_clinique , "ice_clinique" : ice_clinique , "adresse_clinique" : adresse_clinique , "phone_num_clinique" : phone_num_clinique , "role" :  "USER"  }

    fetch(SERVER_URL+"accounts/clinique/"+id ,{ 
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
           setemail(data.email) 
           setice_clinique(data.ice_clinique)
           setusername(data.username);
           setnom_resp_clinique(data.nom_resp_clinique);
           setprenom_resp_clinique(data.prenom_resp_clinique);
           setnomcli(data.nom_clinique);
           setadresse_clinique(data.adresse_clinique);
           setphone_num_clinique(data.phone_num_clinique);


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
                
                  <form className={classes.form} onSubmit={handleSubmit(onSubmit)} >
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
                value={nom_clinique}
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
                value={email}
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
                value={username}
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
                value={ice_clinique}
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
                value={phone_num_clinique}
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
                value={nom_resp_clinique}
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
                value={prenom_resp_clinique}
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
                value={adresse_clinique}
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