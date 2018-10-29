const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: 75,
    textAlign: 'center',
    flexShrink: 0,
    [theme.breakpoints.down('xs')]: {
      width: 60
    },
  },
  drawerPaper: {
    backgroundColor: '#f6eeee',
    width: 75,
    [theme.breakpoints.down('xs')]: {
      width: 60
    },
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: '',
    padding: theme.spacing.unit * 3,
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
  listIcon: {
    color: '#d27979',
  },
  list: {
    textAlign: 'center',
  }
});

export default styles;