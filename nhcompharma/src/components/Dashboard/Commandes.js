import React, { Component } from 'react'
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



class Commandes extends Component {
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
      <Dialog open={this.state.isOpen} onClose={this.handleOpen} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Confirmer la commande </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Vous voulez confirmer cette commande  ? 
        </DialogContentText>
        
      </DialogContent>
      <DialogActions>
        <Button onClick={this.handleOpen} color="primary">
          Confirmer
        </Button>
        <Button onClick={this.handleOpen} color="primary">
          Annuler
        </Button>
      </DialogActions>
    </Dialog>
    
    
        <div className="container-fluid">
        
          <div className="row">

            <div className="col-md-4">
              <div className="card ">
                <div className="card-header ">
                  <h4 className="card-title">Listes des Commandes </h4>
                  <p className="card-category"></p>
                </div>
                <div className="card-body ">
                
                <Paper>
                <Table>
                  <TableHead>
                    <TableRow>
                    <TableCell>
                    <strong>ID </strong>
                  </TableCell>
                      <TableCell>
                        <strong>Client </strong>
                      </TableCell>
                      <TableCell>
                        <strong>date de Commande</strong>
                      </TableCell>
                      <TableCell>
                        <strong>ligne de Commandes </strong>
                      </TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    
                     
                  
                     
                        <TableRow >
                        <TableCell>1203994772746</TableCell>
                          <TableCell> clinell product</TableCell>
                          <TableCell></TableCell>
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
                                Confirmer
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

export default Commandes;
