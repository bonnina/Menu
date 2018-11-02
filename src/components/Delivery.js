import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import styles from '../styles/deliveryStyles';
import Items from './Items';
import Menu from './Menu';

class Delivery extends React.Component {
  render() {
  const { classes, history, match } = this.props;
  
  return (
    <BrowserRouter>
      <div className={classes.root}> 
        <Menu match={match} history={history} />
        <main className={classes.content}> 
          <Typography variant='h4'  className={classes.header} gutterBottom>
            Click items to add:
          </Typography>
          
          <Switch> 
            <Route path={`${match.path}/:name`} component={Items}/>
            <Route path="*" component={()=>(<Typography> All items </Typography>)} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
    );
  }
}

export default  withStyles(styles)(
  withRouter( connect()(Delivery) )
);
