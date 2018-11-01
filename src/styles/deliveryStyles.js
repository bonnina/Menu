const styles = theme => ({
  root: {
    display: 'flex',
  },
  header: {
    color: '#d9d9d9',
    marginBottom: '30px',
    marginLeft: '10px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '40px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px',
      marginLeft: '-10px',
    },
    [theme.breakpoints.down('365')]: {
      fontSize: '25px',
      marginLeft: '-15px',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: theme.spacing.unit * 3,
    height: '100vh'
  },
});

export default styles;