import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { styles, items} from '../styles/itemStyles';

class Items extends React.Component {
  render() {
  const { classes, match } = this.props;
  const item = items.find(({ name }) => name === match.params.name);

    return (
      <div className={classes.root}>
        <Grid container spacing={8} justify="center" className={classes.container}>
        {item.contents.map((el) => (
          <Grid item key={el.text} style={{width: `${el.space}`}} >
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
  connect()(Items) 
);
