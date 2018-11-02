import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import styles from '../styles/deliveryStyles';
import Items from './Items';
import Menu from './Menu';
import { items } from './food_and_drinks';
import { addToOrder } from '../actions';

const mapStateToProps = function (store) {
  return {
    order: store.order
  };
};

const mapDispatchToProps = dispatch => ({
  addToOrder: el => {
    dispatch(addToOrder(el));
    el.display = 'none'
  }
})

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
            <Route path="*" component={ ()=> (
              <Grid container spacing={8} justify="center" className={classes.container}>
                {items.map((item) => (
                  item.contents.map((el) => (
                    <Grid item 
                    key={el.text} 
                    style={{width: `${el.space}`, cursor: 'pointer', display: `${el.display}`}}
                    role='button' 
                    tabIndex="0"
                    onClick={() => this.props.addToOrder(el)}>
                      <Typography variant="h2" style={{ backgroundColor: `${el.backgroundColor}`}} className={classes.text}>
                      {el.text}
                      </Typography>
                    </Grid>
                  ))
                ))}
              </Grid>
            )} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
    );
  }
}

export default  withStyles(styles)(
  withRouter( 
    connect(mapStateToProps, mapDispatchToProps)(Delivery) 
  )
);
