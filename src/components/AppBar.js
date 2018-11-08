import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
// import ShoppingCart from '@material-ui/icons/ShoppingCart';
// import MenuIcon from '@material-ui/icons/Menu';
import styles from '../styles/appBarStyles';

const Appbar = (props) => {
  const { classes } = props;

  return(
    <AppBar position="fixed" className={classes.appBar} >
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
        {/*
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
        */}
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Appbar);