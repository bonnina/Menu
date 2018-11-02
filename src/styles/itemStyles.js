export const styles = theme => ({
  root: {
    fontSize: '60px',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '-4vw',
      marginRight: '-5vw',
      fontSize: '20px',
    }
  },
   text: {
    fontSize: '50px',
    margin: '0 1.5vw 1.5vw 0',
    textAlign: 'center',
    color: 'white',
    padding: '0 0 0.5vw 0.5vw',
    [theme.breakpoints.down('sm')]: {
     fontSize: '43px',
    },
    [theme.breakpoints.down('xs')]: {
     fontSize: '37px',
     margin: '0 1vw 1vw 0',
     padding: '0 0 1vw 0',
     },
     [theme.breakpoints.down('385')]: {
      fontSize: '30px',
      margin: '0 0 1vw 0',
    }
   },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: '50px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '43px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '37px',
    },
    [theme.breakpoints.down('385')]: {
      fontSize: '30px',
    }
  }
});
