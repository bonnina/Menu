import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import styles from '../styles/homepage';

function Home (props) {
  const { classes } = props;

  return(
    <Grid container className={classes.container} spacing={8} justify="space-evenly">
      <Grid item xs={12} sm={8} lg={8} xl={8}>
        <Grid container className={classes.container1} spacing={16} justify="space-evenly"> 
          <Link to='#' style={{textDecoration: 'none'}}>
            <Grid item xs={6} sm={6} lg={6} xl={6} className={classes.item1}>
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
        <Link to='#' style={{textDecoration: 'none'}}>
          <Grid container className={classes.container2} spacing={0} justify="center">
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
  );
}


export default withStyles(styles)(Home);