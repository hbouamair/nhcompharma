import React from 'react' 
import TextField from '@material-ui/core/TextField'; 
import Button from "@material-ui/core/Button";

function UserProfile() {
  return (
    <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <div className="card card-user">
           
            <div className="card-body">
             

               <form autoComplete="off">
                 <TextField
                       id="outlined-full-width" 
                            
                            label="Login"
                            style={{ margin: 8 }}
                            placeholder="Login"
                           
                            required  
                            disabled
                          //  onChange={(e) => {  setnomp(e.target.value);  }}     
                            margin="normal"
                            InputLabelProps={{
                            shrink: true,
                        }}
                         variant="outlined"
                      />
                <TextField 
               
               id="outlined-full-width"
               label="Mot de passe" 
               type="password"   
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
                  <TextField 
               
               id="outlined-full-width"
               label="Email" 
               type="text"   
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

              
          
            <Button autoFocus type="submit" color="primary">
                Enregistrer      
            </Button> 
        </form>
              
            </div>
            <hr />
           
          </div>
        </div>
      </div>
    </div>
  </div> 
      
    
  )
}

export default UserProfile
