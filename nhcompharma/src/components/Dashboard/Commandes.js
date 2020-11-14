import React, { useEffect , useState } from 'react'
import ChartistGraph from 'react-chartist'
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Table from "@material-ui/core/Table";
import { Card, ModalBody } from "react-bootstrap";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Modal, ModalHeader, Label, Row, Col } from "reactstrap";
import { Control, LocalForm } from "react-redux-form";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'; 
import 'react-toastify/dist/ReactToastify.css';   
import ReactTable from 'react-table-6' ; 
import 'react-table-6/react-table.css' ; 
import SERVER_URL from '../variables/server_url'; 
import { ToastContainer, toast } from 'react-toastify'; 






function Commandes() { 
     
      const [isOpen , setOpen ] = useState(false);    

      const [ code , setCode ] = useState("");
      const [ date , setDate ] = useState("");
      const [ etat , setEtat ] = useState(""); 
      const [ Orders , setOrders ] = useState([]); 
      const [loading , setLoading] = useState(false); 
      const [selectedOrder , setSelectedOrder] = useState("");


      const handleClick = () => { 
          setOpen(!isOpen);  
          
      } 
      
      const OpenModal = (id) => {  
         setSelectedOrder(id);
         handleClick();
      }
   
      
      const notify = (message) => toast(message);  
      
      
      const columns = [{
        Header: 'Code de commande',
        accessor: 'id' // String-based value accessors!
      }, {
        Header: 'Date de commande',
        accessor: 'date',
        Cell:  <span className='number'>heeeeey</span> // Custom cell components!
        } ,  {
        Header: 'Etat',
        accessor: 'etat' // String-based value accessors!
      }  
      ] 


      const ConfirmOrder = () => { 
        const token  = sessionStorage.getItem('jwt'); 
        handleClick();
        fetch(SERVER_URL+"admin/commande/"+selectedOrder+"/confirm" , { 
       
            headers : { 'Authorization' : token } , 
            method : 'POST'
        }) 
        .then((response) => { 
          if (response.status >= 200 && response.status <= 299) {  
              
            notify("La Commande a bien été confirmée!")   
            getOrders(); 
          
            
          } else {  
           
            notify("Erreur : "+ response.status)
          }
        })
         .catch((error) => {  

         }); 
      } 

      const DeleteOrder = () => {   


        const token  = sessionStorage.getItem('jwt'); 
        handleClick(); 
        console.log(SERVER_URL+"commandes/"+selectedOrder)
        fetch(SERVER_URL+"commandes/"+selectedOrder, { 
       
            headers : { 'Authorization' : token } , 
            method : 'DELETE'
        }) 
        .then((response) => { 
          if (response.status >= 200 && response.status <= 299) {  
              
            notify("La Commande a été supprimée!")   
            getOrders(); 
          
            
          } else {  
           
            notify("Erreur : "+ response.status)
          }
        })
         .catch((error) => {  
              
          
      
         }); 
      



      } 

      const getOrders = () => {  

        const token  = sessionStorage.getItem('jwt') ; 
        fetch(SERVER_URL+"admin/commandes", {  
          headers : { 'Authorization' : token } ,
          method : 'GET'
        })
          .then(res => res.json())
          .then(
            (data) => {  
               setLoading(false);  
              console.log(data); 
            data.map((commande) => { 
              if(commande.etat == "Inprogress"){ 
                     commande.etat = "En cours"
                  }else if (commande.etat=="Deleted") { 
                    commande.etat = "Supprimée"
                   }else if (commande.etat=="Confirmed") { 
                    commande.etat = "Confirmée"
              }
             }) 
              
               setOrders(data);
            },
            (error) => {
                 
            }
          )
        
      }



    return (
       <div className="content"> 
           <ReactTable
              data={Orders}
              columns={columns}
              showPageJump={true} 
              filterable={true} 
              minRows={15} 
              defaultPageSize={14}  
              loading={loading}
              getTrProps={(state, rowInfo, column) => {
                return {  
                   onClick : () => {  
                     OpenModal(rowInfo.row.id)
                  }  ,

                } 
              }} 
              onFetchData={ (state,instance) => {  
                  setLoading(true);  
                  
                  getOrders();
              
               } }
              
            />  


       <Dialog
        open={isOpen}
       
        keepMounted
        onClose={handleClick}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Commande  : {code}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
              Merci de choisir une action !
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick} color="primary">
            Annuler
          </Button>
          <Button onClick={ConfirmOrder} color="primary">
            Confirmer la commande
          </Button> 
          <Button onClick={DeleteOrder} color="primary">
            Supprimer la commande
          </Button>
        </DialogActions>
      </Dialog>

            
       </div>
    )
}

export default Commandes



