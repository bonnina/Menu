import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
 import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
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
import Items from './Items';

class Delivery extends React.Component {

  render() {
  const { classes, history, match } = this.props;
  
  return (
    <Router >
    <div className={classes.root}> 
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
          <Link to='/' style={{textDecoration: 'none'}} onClick={() => {history.push('/')}}>
            <ListItemIcon className={classes.listIcon}> 
              <HomeIcon />
            </ListItemIcon>
          </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem button>
          <Link to={`${match.url}/food`} style={{textDecoration: 'none'}}> 
            <ListItemIcon className={classes.listIcon}>
              <LocalDining />
            </ListItemIcon>
          </Link> 
          </ListItem>
          <ListItem button>
            <Link to={`${match.url}/drinks`} style={{textDecoration: 'none'}}> 
              <ListItemIcon className={classes.listIcon}>
                <LocalCafe />
              </ListItemIcon>
            </Link> 
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
      
      <main className={classes.content}> 
      <Typography variant='h3' gutterBottom>
        Click to add:
      </Typography>

      <Route path={`${match.path}/:name`} component={Items}/>
    </main>
    </div>
    </Router>
  );
  }
}

export default  withStyles(styles)(
  withRouter( connect()(Delivery) )
);
