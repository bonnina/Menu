import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Menu from './Menu';
import Food from './Food';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  header: {
    color: '#b3b3b3',
    [theme.breakpoints.down('sm')]: {
      fontSize: '40px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px'
    }
  },
  content: {
    flexGrow: 1,
    backgroundColor: '',
    padding: theme.spacing.unit * 3,
  },
});

const Delivery = (props) => {
  const { classes } = props;
  
  return (
    <div className={classes.root}>
    <Menu />
    <main className={classes.content}>
      <Typography variant='h3' className={classes.header} gutterBottom>
        Click to add:
      </Typography>
      <Food />
    </main>
    </div>
  );
}

export default withStyles(styles)(
  connect()(Delivery)
);