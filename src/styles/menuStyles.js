const styles = theme => ({
  drawer: {
    width: 75,
    textAlign: 'center',
    flexShrink: 0,
    [theme.breakpoints.down('xs')]: {
      width: 60
    },
  },
  drawerPaper: {
    backgroundColor: '#f2f2f2',
    width: 75,
    [theme.breakpoints.down('xs')]: {
      width: 60
    },
  },
  toolbar: theme.mixins.toolbar,
  listIcon: {
    color: '#d27979',
  },
  listItem: {
    color: '#d27979',
    '&:hover': {
      backgroundColor: '#f6eeee',
    }
  },
  list: {
    textAlign: 'center',
  }
});

export default styles;
