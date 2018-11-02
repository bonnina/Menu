import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from '../styles/deliveryStyles';

const mapStateToProps = function (store) {
  return {
    order: store.order
  };
};

class Order extends React.Component {
  render() {
  const { classes } = this.props;
  const item = this.props.order;
  
    return ( 
      <div className={classes.root}>
        <Typography variant='h4'  className={classes.header} gutterBottom>
         Your order:
        </Typography>
        <Grid container spacing={8} justify="center" className={classes.container}>
        {item.map((el) => (
          <Grid item 
          key={el.text} 
          style={{width: `${el.space}`, cursor: 'pointer'}} 
          role='button' 
          tabIndex="0"
          onClick={() => this.props.addToOrder(el)}>
              <Typography variant="h2" style={{
                backgroundColor: `${el.backgroundColor}`,
              }} className={classes.text}>
              {el.text}
              </Typography>
          </Grid>
        ))}
        </Grid>
      </div>
    )
  }
};

export default withStyles(styles)(
  connect(mapStateToProps)(Order) 
);
