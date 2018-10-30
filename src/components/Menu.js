import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import LocalDining from '@material-ui/icons/LocalDining';
import LocalCafe from '@material-ui/icons/LocalCafe';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Delete from '@material-ui/icons/Delete';
import styles from '../styles/menuStyles';


const Menu = (props) => {
  const { classes } = props;
  
  return (
    <div>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <List >
          <ListItem button key='text'>
          <Link to='/' style={{textDecoration: 'none'}}>
            <ListItemIcon className={classes.listIcon}> 
              <HomeIcon />
            </ListItemIcon>
            </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem button>
          <Link to='/food' style={{textDecoration: 'none'}}>
            <ListItemIcon className={classes.listIcon}>
              <LocalDining />
            </ListItemIcon>
          </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon className={classes.listIcon}>
              <LocalCafe />
            </ListItemIcon>
          </ListItem>
          <ListItem button >
            <ListItemIcon className={classes.listIcon}> 
              <ShoppingCart />
            </ListItemIcon>
          </ListItem>
          <ListItem button >
            <ListItemIcon className={classes.listIcon}> 
              <Delete />
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default withStyles(styles)(
  connect(null)(Menu)
);