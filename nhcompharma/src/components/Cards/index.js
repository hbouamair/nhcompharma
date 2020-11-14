import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, Paper } from '@material-ui/core';
import { createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { green, purple } from '@material-ui/core/colors'

const useStyles = makeStyles({
  root: {
    maxWidth: '100%' ,
    
    padding:'30px',
    marginBottom:'30px',
    

    
  },
  media: {
    backgroundSize: 'contain',
   
    height: 400,
    width: 'center ', 
    maxWidth:'100%',
    border: '4px solid  #00A7C8',
  },
});


export default function MediaCard() {
  const classes = useStyles();

  return (
      <Grid 
      container className={classes.root} spacing={2}
    >
   
    <Card  className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require('../../assets/of2.png')}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Lingettes universelles pour les mains et les surfaces 200  <Chip
          variant="contained"
          size="small"
          color="primary"
          avatar={<Avatar>S</Avatar>}
          label="En Stock"
        />
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Les lingettes universelles polyvalentes Clinell tuent au moins 99,99% des bactéries et virus. Ils
          peuvent être utilisés pour nettoyer et désinfecter les surfaces, les mains et l'équipement.
          Efficace à partir de seulement 10 secondes et peut être utilisé sur des mains visiblement sales. Notre
          formulation est testée dermatologiquement et contient de l'aloe vera et un hydratant pour être doux
          pour la peau. Reconnu par les professionnels de la santé.
          </Typography>
        </CardContent>
        
      </CardActionArea>
      <CardActions>
        <Button  variant="contained" disableRipple size="small" color="primary">
        <ShoppingCartIcon />
        {' '}
         Ajouter Au panier 
        </Button>
       
      </CardActions>
    </Card>
    
    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require('../../assets/of1.png')}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Lingettes universelles pour les mains et les surfaces 200  <Chip
          variant="contained"
          size="small"
          color="primary"
          avatar={<Avatar>S</Avatar>}
          label="En Stock"
        />
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Les lingettes universelles polyvalentes Clinell tuent au moins 99,99% des bactéries et virus. Ils
          peuvent être utilisés pour nettoyer et désinfecter les surfaces, les mains et l'équipement.
          Efficace à partir de seulement 10 secondes et peut être utilisé sur des mains visiblement sales. Notre
          formulation est testée dermatologiquement et contient de l'aloe vera et un hydratant pour être doux
          pour la peau. Reconnu par les professionnels de la santé.
          </Typography>
        </CardContent>
        
      </CardActionArea>
      <CardActions>
        <Button variant="contained" disableRipple size="small" color="primary">
        <ShoppingCartIcon /> {' '}
         Ajouter au Panier
        </Button>
       
      </CardActions>
    </Card>
  
   
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require('../../assets/of.png')}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Lingettes universelles pour les mains et les surfaces 200 <Chip
          variant="contained"
          size="small"
          color="primary"
          avatar={<Avatar>S</Avatar>}
          label="En Stock"
        />
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Les lingettes universelles polyvalentes Clinell tuent au moins 99,99% des bactéries et virus. Ils
          peuvent être utilisés pour nettoyer et désinfecter les surfaces, les mains et l'équipement.
          Efficace à partir de seulement 10 secondes et peut être utilisé sur des mains visiblement sales. Notre
          formulation est testée dermatologiquement et contient de l'aloe vera et un hydratant pour être doux
          pour la peau. Reconnu par les professionnels de la santé.
          </Typography>
        </CardContent>

        
      </CardActionArea>
      <CardActions>
        <Button variant="contained" disableRipple size="small" color="primary">
        <ShoppingCartIcon />{' '}
          Ajouter en panier
        </Button>
       
      </CardActions>
    </Card>
    
    </Grid>
  );
}