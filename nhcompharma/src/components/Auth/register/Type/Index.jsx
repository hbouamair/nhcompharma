import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import Grid from '@material-ui/core/Grid'
import "./style-card.css";
import img1 from '../../../../assets/doctor.jpg'
import img2 from '../../../../assets/pharma.png'
import img3 from '../../../../assets/hospital.png'
import img4 from '../../../../assets/partic.png'
import {Link} from "react-router-dom"
import HorizontalLabelPositionBelowStepper from './HorizontalLinearStepper';



const CardExampleGroups = () => (

 <div className="containercard">   
 <HorizontalLabelPositionBelowStepper activestep={0} />
  <Grid className="grid" xl={12}>
  <Card.Group centered>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={img2}
        />
        <Card.Header>Pharmacie</Card.Header>
        
        
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
       <Link to="/Pharmacie">   <Button basic color='green'>
            Register
          </Button>
          </Link>
        
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={img1}
        />
        <Card.Header>Medcin</Card.Header>
        
       
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
        <Link to="/Doctor">    <Button basic color='green'>
           Register
          </Button></Link>
         
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={img3}
        />
        <Card.Header>Clinique</Card.Header>
        
        
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
        <Link to="/Clinique">    <Button basic color='green'>
            Register
          </Button></Link>
        
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={img4}
        />
        <Card.Header>Particulier</Card.Header>
     
        
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
        <Link to="/Particulier">    <Button basic color='green'>
           Register
          </Button></Link>
        
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
  </Grid> 
  </div>
)

export default CardExampleGroups