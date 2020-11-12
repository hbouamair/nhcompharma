import React, { Component } from 'react'
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
import img1 from '../../assets/of.png'






class Dashboard extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {isOpen :  false} ;
    this.handleOpen = this.handleOpen.bind(this);
   
  }
 
  handleOpen() {
    this.setState({
      isOpen:!this.state.isOpen
    });
  }

 
  


  render() {




  
    
    return (


      <div className="content">
     
   
    
        <div className="container-fluid">
        <Dialog open={this.state.isOpen} onClose={this.handleOpen} aria-labelledby="form-dialog-title">
        <DialogTitle id="customized-dialog-title" onClose={this.handleOpen}>
          Ajouter Produit 
        </DialogTitle>
        <DialogContent dividers>
        <form autoComplete="off">
        <TextField
        id="outlined-full-width"
        label="Nom de produit "
        style={{ margin: 8 }}
        placeholder="Entrer le nom de Produit "
       
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <TextField
      id="outlined-full-width"
      label="Quantité"
      style={{ margin: 8 }}
      placeholder="Entrer la quantité"
      
      fullWidth
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
    placeholder="ajouter une image "
  />
  <TextField
  id="filled-multiline-static"
  label="Description du Produit "
  multiline
  rows={4}
  style={{ margin: 8 }}
  fullWidth
  margin="normal"
  
  variant="outlined"
/>
  </form>

        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={this.handleOpen} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
       
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
                  onClick={this.handleOpen}
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
                    
                     
                  
                     
                        <TableRow >
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell> <img className="Product-img" src={img1} /></TableCell>
                          <TableCell>
                        
                          
                          </TableCell>
                          
                          
                          <TableCell>
                            <ButtonGroup
                              disableElevation
                              variant="contained"
                              color="primary"
                            >
                              <Button
                                variant="contained"
                                color="primary"
                                onClick={this.handleOpen}
                                startIcon={<EditIcon />}
                              >
                                modifier
                              </Button>

                              <Button
                                variant="contained"
                                color="secondary"
                               
                                startIcon={<DeleteIcon />}
                              >
                                supprimer
                              </Button>
                            </ButtonGroup>
                          </TableCell>
                        </TableRow>
                    
                  </TableBody>
                </Table>
              </Paper>
                </div>
              </div>
            </div>
            

          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
