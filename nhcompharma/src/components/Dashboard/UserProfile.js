import React from 'react' 
import TextField from '@material-ui/core/TextField'; 
import Button from "@material-ui/core/Button";
import { Card, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    width: 450,
    maxWidth:'100%'
  }
});

function UserProfile() {
  const classes = useStyles();
  return (
    <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">

           
            
           
             
             <Card   className=" Profile">
             <CardContent>
             <h3 className="title-profile">Profile </h3>
               <form   autoComplete="off">
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
                          //  onChange={(e) => {  setnomp(e.target.value);  }}     
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
               label="Mot de passe" 
               type="password" 
               className={classes.root}
               
               defaultValue="hhh"
               style={{ margin: 8 }}
               placeholder="Entrer la quantité" 
               required
              
           //    onChange={(e) => {  setquan(e.target.value);  }}     
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
              
               defaultValue="talhimohammed507@gmail.com"
               style={{ margin: 8 }}
               placeholder="Entrer la quantité" 
               required
              
           //    onChange={(e) => {  setquan(e.target.value);  }}     
               margin="normal"
               InputLabelProps={{
               shrink: true,
               }}
               variant="outlined"
              /> 
              </div>

              <div >
          
            <Button  className="buttonpro" variant="contained"
            color="primary" type="submit" >
                Enregistrer      
            </Button> 
            </div>

        </form>
        </CardContent>
            </Card>  
            </div>
            <hr />
           
        
        </div>
      </div>
    </div>

      
    
  )
}

export default UserProfile
