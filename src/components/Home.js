import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
    container: {
      padding: '4vw 13vw 3vw 13vw'
    },
    paper: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 4,
      paddingBottom: theme.spacing.unit * 2,
      height: theme.spacing.unit * 58,
    },
    textLeft: {
      fontSize: '8vw',
      color: '#b3b3b3',
    },
    textRight: {
      fontSize: '8vw',
      color: '#999999',
      fontWeight: 'bold'
    },
    logo: {
      fontSize: '14vw',
      lineHeight: 0.6,
      color: '#d27979',
      fontWeight: 'bold'
    },
    card: {
      marginLeft: '2vw',
    },
    media: {
      height: '40vw',
      width: '31vw',
    },
    button: {}
  });

function Home (props) {
  const { classes } = props;

    return(
      <Grid container className={classes.container} spacing={16}>
        <Grid item xs={12} sm={3} lg={3} xl={3}>
          <Paper elevation={0} className={classes.paper}>
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
        <Grid item xs={12} sm={5} lg={5} xl={5}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={require('./home.jpg')}
              title="home"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={3} lg={3} xl={3}>
          <Paper elevation={0} className={classes.paper}>
            <Typography variant='h1' className={classes.textRight}>
              to
              <br/>
              your
              <br/>
              door
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    );
}


export default withStyles(styles)(Home);