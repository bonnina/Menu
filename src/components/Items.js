import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from '../styles/itemStyles';
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
  //  el.display = 'none'
  }
})

class Items extends React.Component {
  render() {
  const { classes, match } = this.props;
  let arr = null; 
  let heading = '';
  const item = items.find(({ name }) => name === match.params.name);
  if (match.params.name === 'order') {
    arr = this.props.order;
    heading = 'Your order:';
  } 
  else {
     arr = item.contents;
     heading = 'Click items to add:';
  }
  
    return (
      <div className={classes.root}>
        <Typography variant='h4'  className={classes.header} gutterBottom>
        {heading}
        </Typography>
        <main className={classes.content}> 
        <Grid container spacing={8} justify="center" className={classes.container}>
        {arr.map((el) => (
          <Grid item 
          key={el.text} 
          style={{width: `${el.space}`, cursor: 'pointer'}} 
          role='button' 
          tabIndex="0"
          onClick={() => this.props.addToOrder(el)}>
              <Typography variant="h2" style={{ backgroundColor: `${el.backgroundColor}`}} 
              className={classes.text}>
              {el.text}
              </Typography>
          </Grid>
        ))}
        </Grid>
        </main>
      </div>
    )
  }
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Items) 
);
