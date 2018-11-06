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
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from '../styles/menuStyles';


class Menu extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
  const { classes, match, history } = this.props;
  
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
          <ListItem button key='text' className={classes.listItem}>
          <Link to='/' style={{textDecoration: 'none'}} onClick={() => {history.push('/')}}>
            <ListItemIcon className={classes.listIcon}> 
              <HomeIcon />
            </ListItemIcon>
          </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem button className={classes.listItem}>
          <Link to={`${match.url}/food`} style={{textDecoration: 'none'}}> 
            <ListItemIcon className={classes.listIcon}>
              <LocalDining />
            </ListItemIcon>
          </Link> 
          </ListItem>
          <ListItem button className={classes.listItem}>
            <Link to={`${match.url}/drinks`} style={{textDecoration: 'none'}}> 
              <ListItemIcon className={classes.listIcon}>
                <LocalCafe />
              </ListItemIcon>
            </Link> 
          </ListItem>
          <ListItem button className={classes.listItem}>
          <Link to={`${match.url}/order`} style={{textDecoration: 'none'}} > 
            <ListItemIcon className={classes.listIcon}> 
              <ShoppingCart />
            </ListItemIcon>
            </Link>
          </ListItem>
          <ListItem button className={classes.listItem} onClick={this.handleClickOpen}>
            <ListItemIcon className={classes.listIcon}> 
              <Delete />
            </ListItemIcon>
          </ListItem>
          <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Cancel your order?"}</DialogTitle>
          <DialogActions>
            <Button onClick={this.handleClose}>
              Yes
            </Button>
            <Button onClick={this.handleClose} autoFocus>
              Return
            </Button>
          </DialogActions>
        </Dialog>
        </List>
      </Drawer>
    </div>
    );
  }
}

export default withStyles(styles)(
  connect(null)(Menu)
);