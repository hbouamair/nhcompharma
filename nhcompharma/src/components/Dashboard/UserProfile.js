import React , {useEffect , useState}from 'react' 
import TextField from '@material-ui/core/TextField'; 
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles'; 
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import SERVER_URL from '../variables/server_url';


const useStyles = makeStyles({
  root: {
    width: 450,
    maxWidth:'100%'
  }
}); 



function UserProfile() {
  const classes = useStyles();  

  const { handleSubmit, register, errors } = useForm()  

  const [ newpassword , setnewpassword] = useState("");   
  const [ oldpassword , setoldpassword] = useState("");  

  const [isactive1 , setisactive1] = useState(false); 
  const [isactive2 , setisactive2] = useState(false);
  

  const [email , setemail ] = useState(""); 


  const onSubmitEmail = () => {  
    setisactive1(true); 
    const token = sessionStorage.getItem("jwt"); 
    const id = JSON.parse(sessionStorage.getItem("currentuser")).id; 

    fetch(SERVER_URL+"admin/"+id+"/"+email,{ 
      method : 'PUT' ,  
      headers : { 
      'Authorization': token , 
      } 
 
      })  
       .then(r => r.json()
         .then(data =>   
            {     
          
              if (r.status >= 200 && r.status <= 299) {      
                toast.success("Votre email a bien été modifié");  
                setisactive1(false);
                
              } else {      
                 
                toast.error(data.error);  
                setisactive1(false);
            
             }
            
         }
    
       
       ))
       .catch((error) => {    

     }); 



  }


  const onSubmitPassword = () => { 
  
    setisactive2(true);  
    const token = sessionStorage.getItem("jwt") ;  
    const id = JSON.parse(sessionStorage.getItem("currentuser")).id;  

      const formData = new FormData(); 
      formData.append("oldpassword",oldpassword); 
      formData.append("newpassword",newpassword); 
  
    fetch(SERVER_URL+"admin/updatepassword/"+id,{ 
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
                setisactive2(false);
                
              } else {      
                 
                toast.error(data.error);  
                setisactive2(false);
            
             }
            
         }
    
       
       ))
       .catch((error) => {    

     }); 

    
}
  return (
    <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">

             <h3 className="title-profile">Profile </h3>
               <form autoComplete="off" onSubmit={ handleSubmit(onSubmitEmail) }>
               <div>
                 <TextField
                       id="outlined-basic" 
                       
                            label="Login"
                            style={{ margin: 8 }}
                            placeholder="Login"
                            margin="dense"
                            required  
                            className={classes.root}
                            disabled
                            defaultValue={sessionStorage.getItem("currentuser") && JSON.parse(sessionStorage.getItem("currentuser")).username}     
                            margin="normal"
                            InputLabelProps={{
                            shrink: true,
                        }}
                         variant="outlined"
                      />
                      </div>
                      <div>
                  <TextField 
               
                         id="outlined-full-width"
                         label="Email" 
                         type="text"   
                         className={classes.root} 
                         defaultValue={sessionStorage.getItem("currentuser") && JSON.parse(sessionStorage.getItem("currentuser")).email} 
                         style={{ margin: 8 }}
                         required
                         onChange={(e) => { setemail(e.target.value);  }}     
                         margin="normal"
                         InputLabelProps={{
                         shrink: true,
               }}
               variant="outlined"
              /> 
              </div>
                      <Button  className="buttonpro" variant="contained"
                      color="primary" type="submit" disabled={isactive1}
                      startIcon={<SaveIcon />} >
                          Enregistrer      
                      </Button> 
                      
                    </form>
          <form onSubmit={ handleSubmit(onSubmitPassword) } > 
                      <div>         
               <TextField  
               id="outlined-full-width"
               label="Mot de passe Actuel" 
               type="password" 
               className={classes.root}
               style={{ margin: 8 }} 
               
               required
               onChange={(e) => {  setoldpassword(e.target.value);  }}     
               margin="normal"
               InputLabelProps={{
               shrink: true,
               }}
               variant="outlined"
              />  
              </div>
              <div>
              <TextField 
             
             id="outlined-full-width"
             label="Nouveau mot de passe" 
             type="password" 
             className={classes.root}
             style={{ margin: 8 }}
  
             required 
             onChange={(e) => {  setnewpassword(e.target.value);  }}     
             margin="normal"
             InputLabelProps={{
             shrink: true,
             }}
             variant="outlined"
            />  
            </div>
              

              <div >
          
            <Button  className="buttonpro" variant="contained" disabled={isactive2}
            color="primary" type="submit" >
                Changer le mot de passe      
            </Button> 
            </div>

        </form>
       
           
            </div>
          
           
        
        </div>
      </div>
    </div>

      
    
  )
}

export default UserProfile
