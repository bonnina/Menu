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
    backgroundColor: 'white',
    padding: theme.spacing.unit * 3,
  },
});

export default styles;