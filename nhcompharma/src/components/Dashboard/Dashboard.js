import React, { useState , useEffect  } from 'react' ; 
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Table from "@material-ui/core/Table";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import "./Dash.css"
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import img1 from '../../assets/of.png' ; 
import SERVER_URL from '../variables/server_url';   
import { useForm } from "react-hook-form";  
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';







function Dashboard() {  
      
    const [isOpen,setisOpen] = useState(false);   
    const [isOpen2,setisOpen2] = useState(false);  
    const [products,setProducts] = useState([]); 
    const [deletemodal , setdeleteM ] = useState(false); 
    const [selectedProd , setSP] = useState("");   
   
   


   //Product details 

    const [nomp , setnomp]    = useState(""); 
    const [quan , setquan]    = useState(""); 
    const [photo , setphoto ] = useState(""); 
    const [description , setDescription ] = useState(""); 


    const { handleSubmit, register, errors } = useForm();  


    const notify = (message) => toast(message);  


    const handleOpen = () => { 
        setisOpen(!isOpen)
    }    

    const handleOpen2 = () => { 
      setisOpen2(!isOpen2)
  }   
  
  const OpenUpdateModal = (produit) => { 
    setSP(produit.id);
    setnomp(produit.nom);
    setquan(produit.stock);
    setDescription(produit.description)
    handleOpen2();
  }

    const OpenDeleteModal = (id) => { 
     setSP(id); 
     handleDeleteModal(); 
     console.log("the id of product : " + id)
    } 

    const handleDeleteModal = () => {  

      setdeleteM(!deletemodal); 
    }

    useEffect(() => {  

        GetProductsFromServer();
         
    },[])   



    const GetProductsFromServer = () => {     
    
      fetch(SERVER_URL+"products", { 
        method : 'GET'
      })
        .then(res => res.json().then( data => {  
          if (res.status >= 200 && res.status <= 299) {   
          setProducts(data); 
          }
        }))
        
        
    }



    const DeleteProduit = () => {   
       
      handleDeleteModal() ; 
      const token  = sessionStorage.getItem('jwt'); 
    
      fetch(SERVER_URL+"admin/produit/"+selectedProd , { 
     
          headers : { 'Authorization' : token } , 
          method : 'DELETE'
      }) 
      .then((response) => { 
        if (response.status >= 200 && response.status <= 299) {  
            
           
            GetProductsFromServer() ; 
            
          
        } else {  
         
          throw "Something went wrong , error status : " + response.status ;  
        }
      })
       .catch((error) => {  
            
       });
      
    } 


    const onSubmit = () => {  
      handleOpen();
      const data = new FormData(); 
        data.append('nom', nomp);  
        data.append('description' , description ) 
        data.append('photo' , photo) 
        data.append('stock', quan);
             
         const token  = sessionStorage.getItem('jwt');   
        
         
         fetch(SERVER_URL+"admin/addproduit" ,{ 
          method : 'POST' ,  
          headers: { 'Authorization': token},  
          body : data
      }) 
      .then((response) => { 
         if (response.status >= 200 && response.status <= 299) {     
            GetProductsFromServer(); 
            notify("Le produit a bien été ajouté");
         } else {  
         
           throw "Something went wrong , error status : " + response.status ;  
         }
       })
        
        .catch((error) => {  
           
          notify("Erreur !");

        }); 
       

  }

        
    


    const DisplayData = () => {         


      if(products.length == 0 ) { 
          return  <p></p>
      }else { 
                
       return (    
         
        products.map((produit) => {  
                   
              return(  
                  
                <TableRow >
                <TableCell>{produit.nom}</TableCell>
                <TableCell>{produit.stock}</TableCell>
                <TableCell> <img className="Product-img" src={"data:image/jpg;base64,"+produit.photo}/></TableCell>
                <TableCell>
                 
                    {produit.description}
                
                </TableCell>
                
                
                <TableCell>
                  <ButtonGroup
                    disableElevation
                    variant="contained"
                    color="primary"
                  >
              

                    <EditIcon   onClick={() => OpenUpdateModal(produit)}  />
      
                    <DeleteIcon  onClick={() => OpenDeleteModal(produit.id)} />
                   
                  </ButtonGroup>
                </TableCell>
              </TableRow>
              ); 
           }) 
       )  
      }
    

    }  

   const onSubmitMod = () => {
      
    handleOpen2();
    const data = new FormData(); 
      data.append('nom', nomp);  
      data.append('description' , description ) 
      data.append('photo' , photo) 
      data.append('stock', quan);
           
       const token  = sessionStorage.getItem('jwt');   
      
       
       fetch(SERVER_URL+"admin/produit/"+selectedProd ,{ 
        method : 'PUT' ,  
        headers: { 'Authorization': token},  
        body : data
    }) 
    .then((response) => { 
       if (response.status >= 200 && response.status <= 299) {     
          GetProductsFromServer(); 
          notify("Le produit a bien été modifié");
       } else {  
       
         throw "Something went wrong , error status : " + response.status ;  
       }
     })
      
      .catch((error) => {  
         
        notify("Erreur !");

      }); 
     
   }

  
     
     
    
    return ( 
         
        <div className="content">
    
        <div className="container-fluid">
       
          <div className="row">

            <div className="col-md-4">
              <div className="card ">
                <div className="card-header ">
                  <h4 className="card-title">Listes des Produits</h4>
                  <p className="card-category"></p>
                </div>
                <div className="card-body ">
                <div style={{ float: "right" }}>
                <Fab
                  onClick={handleOpen}
                  color="primary"
                  aria-label="add"
                >
                  <AddIcon />
                </Fab>
              </div>
                <Paper>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <strong>Nom de Produit </strong>
                      </TableCell>
                      <TableCell>
                        <strong>Quantité </strong>
                      </TableCell>
                      <TableCell>
                        <strong>Image de Produit </strong>
                      </TableCell>
                      <TableCell>
                        <strong>Descreption </strong>
                      </TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    
                         
                           <DisplayData/> 
                         
                         
                    
                  </TableBody>
                </Table>
              </Paper>
                </div>
              </div>
            </div> 

            <Dialog open={isOpen} onClose={handleOpen} aria-labelledby="form-dialog-title">
        <DialogTitle id="customized-dialog-title" onClose={handleOpen}>
             Ajouter Produit 
          </DialogTitle>
              <DialogContent dividers>
             <form autoComplete="off" onSubmit={ handleSubmit(onSubmit)}>
                 <TextField
                       id="outlined-full-width" 
                            
                            label="Nom de produit "
                            style={{ margin: 8 }}
                            placeholder="Entrer le nom du produit "
                            fullWidth 
                            required 
                            onChange={(e) => {  setnomp(e.target.value);  }}     
                            margin="normal"
                            InputLabelProps={{
                            shrink: true,
                        }}
                         variant="outlined"
                      />
             <TextField 
               
               id="outlined-full-width"
               label="Quantité" 
               type="Number" 
               MIN="0" MAX="100" STEP="1" 
               
               style={{ margin: 8 }}
               placeholder="Entrer la quantité" 
               required
               fullWidth 
               onChange={(e) => {  setquan(e.target.value);  }}     
               margin="normal"
               InputLabelProps={{
               shrink: true,
               }}
               variant="outlined"
              />
            <TextField
               type="file"
               fullWidth
               style={{ margin: 8 }}
               variant="outlined" 
               margin="normal"  
               onChange={(e) => {  setphoto(e.target.files[0]);  }}  
               required
               placeholder="Ajouter une image "
            />
           <TextField
               id="filled-multiline-static"
               label="Description du Produit" 
               onChange={(e) => {  setDescription(e.target.value);  }}     
               multiline 
               required
               rows={4}
               style={{ margin: 8 }}
               fullWidth
               margin="normal"
               variant="outlined"
            /> 
            <Button autoFocus type="submit" color="primary">
                Ajouter      
            </Button> 
        </form>

        </DialogContent>
        <DialogActions>
          
         
        </DialogActions>
      </Dialog>  
       
        
      <Dialog
        open={deletemodal}
        onClose={handleDeleteModal}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Supprimer produit !"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
              Voulez-vous supprimer le produit !
          </DialogContentText>
        </DialogContent> 
        <DialogActions> 
          <Button  onClick={handleDeleteModal} color="primary">
            Non
          </Button>
          <Button onClick={DeleteProduit}  color="primary">
            Oui
          </Button>
          
        </DialogActions>
      </Dialog> 

  {/* Update modal*/}
      <Dialog open={isOpen2} onClose={handleOpen2} aria-labelledby="form-dialog-title">
        <DialogTitle id="customized-dialog-title" onClose={handleOpen2}>
             Modifier le produit 
          </DialogTitle>
              <DialogContent dividers>
             <form autoComplete="off" onSubmit={ handleSubmit(onSubmitMod)}>
                 <TextField
                            id="outlined-full-width" 
                           
                            defaultValue={nomp}
                            label="Nom de produit "
                            style={{ margin: 8 }}
                            placeholder="Entrer le nom du produit "
                            fullWidth 
                            required 
                            onChange={(e) => {  setnomp(e.target.value);  }}     
                            margin="normal"
                            InputLabelProps={{
                            shrink: true,
                        }}
                         variant="outlined"
                      />
             <TextField 
               
               id="outlined-full-width" 
               defaultValue={quan}
               label="Quantité" 
               type="Number" 
               min="0"  
               max="100"  
               step="1" 
               style={{ margin: 8 }}
               placeholder="Entrer la quantité" 
               required
               fullWidth 
               onChange={(e) => {  setquan(e.target.value);  }}     
               margin="normal"
               InputLabelProps={{
               shrink: true,
               }}
               variant="outlined"
              />
            <TextField
               type="file"
               fullWidth
               style={{ margin: 8 }}
               variant="outlined" 
               margin="normal"  
               onChange={(e) => {  setphoto(e.target.files[0]);  }}  
               required
               placeholder="Ajouter une image "
            />
           <TextField
               id="filled-multiline-static" 
              defaultValue={description}
               label="Description du Produit" 
               onChange={(e) => {  setDescription(e.target.value);  }}     
               multiline 
               required
               rows={4}
               style={{ margin: 8 }}
               fullWidth
               margin="normal"
               variant="outlined"
            /> 
            <Button autoFocus type="submit" color="primary">
                Enregistrer     
            </Button> 
        </form>

        </DialogContent>
        <DialogActions>
          
         
        </DialogActions>
      </Dialog>  
       

          </div>
        </div>
      </div>
    )
}

export default Dashboard
