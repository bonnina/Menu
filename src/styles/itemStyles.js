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
    fontSize: '55px',
    margin: '0 1.5vw 1.5vw 0',
    textAlign: 'center',
    color: 'white',
    padding: '0 0 1vw 1vw',
    [theme.breakpoints.down('sm')]: {
     fontSize: '45px',
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
    fontSize: '55px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '45px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '37px',
    },
    [theme.breakpoints.down('385')]: {
      fontSize: '30px',
    }
  }
});

export const items = [
  {
    name: 'food',
    contents: [
      {
        text: 'eggs',
        backgroundColor: '#ffff99',
        space: '3.4em'
      },
      {
        text: 'bacon',
        backgroundColor: '#dfbf9f',
        space: '4.1em'
      },
      {
        text: 'strawberries',
        backgroundColor: '#fed9cd',
        space: '7.8'
      },
      {
        text: 'apple',
        backgroundColor: '#dbfa9e',
        space: '4.7'
      },
      {
        text: 'toast',
        backgroundColor: '#ecd9c6',
        space: '3.8em'
      },
      {
        text: 'cereal',
        backgroundColor: '#e5f2ff',
        space: '4.2em'
      },
      {
        text: 'cheese',
        backgroundColor: '#ffeb99',
        space: '4.5em'
      },
      {
        text: 'grapes',
        backgroundColor: '#e5ccff',
        space: '4.4em'
      },
      {
        text: 'avocado',
        backgroundColor: '#c1f0c1',
        space: '5.2em'
      },
      {
        text: 'cookies',
        backgroundColor: '#ffffb3',
        space: '4.7em'
      },
      {
        text: 'honey',
        backgroundColor: '#fff0b3',
        space: '4.1em'
      },
      {
        text: 'rice',
        backgroundColor: '#ebebe0',
        space: '3em'
      },
      {
        text: 'jam',
        backgroundColor: '#ffcccc',
        space: '2.8em'
      },
      {
        text: 'spinach',
        backgroundColor: '#99e699',
        space: '4.9em'
      },
      {
        text: 'banana',
        backgroundColor: '#fcfc9c',
        space: '4.7em'
      },
      {
        text: 'tomato',
        backgroundColor: '#f7baba',
        space: '4.7em'
      },
      {
        text: 'grilled salmon',
        backgroundColor: '#e8c9c9',
        space: '8em'
      },
      {
        text: 'pancakes',
        backgroundColor: '#ffeecc',
        space: '5.5em'
      },
      { 
        text: 'pear',
        backgroundColor: '#d5ff80',
        space: '3.5em'
      },
      {
        text: 'ham',
        backgroundColor: '#ecd9c6',
        space: '3.3em'
      },
      {
        text: 'fries',
        backgroundColor: '#f5f589',
        space: '4.4em'
      },
    ]
  },
  {
    name: 'drinks',
    contents: []
  }
];
