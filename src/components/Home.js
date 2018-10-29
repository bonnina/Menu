import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Tooltip from '@material-ui/core/Tooltip';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import styles from '../styles/homepage';
import { location } from '../actions';

const mapStateToProps = function (store) {
  return {
    pickedLocation: store.details.location
  };
};

const mapDispatchToProps = dispatch => ({
  location: opt => dispatch(location(opt))
})

const Home = (props) => {
  const { classes } = props;

  return(
    <div> 
    <Grid container className={classes.container} spacing={8} justify="space-evenly">
      <Grid item xs={12} sm={8} lg={8} xl={8}>
        <Grid container className={classes.container1} spacing={16} justify="space-evenly"> 
          <Link to='#' style={{textDecoration: 'none'}} >
            <Grid item xs={6} sm={6} lg={6} xl={6} className={classes.item1} onClick={() => props.location('eat in')}>
          <Paper elevation={0} className={classes.paperL}>
            <Typography variant='h1' className={classes.textLeft}>
              eat
              <br/>
              at
            </Typography>
            <Typography variant='h1' className={classes.logo} gutterBottom>
              na
              <br/>
              na
            </Typography>
          </Paper>
        </Grid>
          </Link>
          <Grid item xs={6} sm={6} lg={6} xl={6}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={require('./home.jpg')}
              title="breakfast"
            />
          </Card>
        </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={4} lg={4} xl={4}>
        <Link to='#' style={{textDecoration: 'none'}} >
          <Grid container className={classes.container2} spacing={0} justify="center" onClick={() => props.location('delivery')}>
            <Grid item xs={6} sm={12} lg={12} xl={12}>
              <Paper elevation={0} className={classes.paperR}>
                <Typography variant='h1' className={classes.order}>
                order
                <br/>
                to
                </Typography>
              </Paper>
            </Grid>
           <Grid item xs={6} sm={12} lg={12} xl={12}>
              <Paper elevation={0} className={classes.paperR}>
                <Typography variant='h1' className={classes.textRight}>
                your
                <br/>
                door
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Link>
      </Grid>
    </Grid>

    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Tooltip title="about nana" className={classes.tooltip}>
          <IconButton className={classes.iconBut} aria-label="logo">
            <Typography variant='h1' className={classes.logoSmall} gutterBottom>
            na
            <br/>
            na
            </Typography>
          </IconButton>
        </Tooltip>
        <div>
          <IconButton aria-label="Open drawer" className={classes.iconBut}>
            <MenuIcon className={classes.iconMenu}/> 
          </IconButton>
          <Tooltip title="your order" className={classes.tooltip}>
            <IconButton className={classes.iconBut} aria-label="Shopping cart">
             <ShoppingCart className={classes.iconCart}/>
            </IconButton>
          </Tooltip>
        </div>
      </Toolbar>
    </AppBar>
  </div>
 );
}


export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Home)
);