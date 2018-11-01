
const styles = theme => ({
    container: {
       padding: '0 4vw 0 4vw',
       fontFamily: 'Fredoka One'
    },
    container1: {
      marginTop: '1vw',
      padding: '3vw 0 2vw 0'
    },
    container2: {
      marginTop: '1vw',
      padding: '3vw 0 2vw 0'
    },
    paperL: {
      height: 'auto',
      width: '21vw',
      padding: '2vw 2vw 2vw 2vw',
    },
    paperR: {
      width: '21vw',
      padding: '1vw 2vw 0 2vw'
    },
    textLeft: {
      fontSize: '8vw',
      color: '#b3b3b3',
      marginLeft: "7vw",
      [theme.breakpoints.down('sm')]: {
        fontSize: '75px',
        marginLeft: "3vw",
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '72px'
      },
      [theme.breakpoints.down(460)]: {
        fontSize: '65px',
        marginLeft: "-1vw",
      }
    },
    textRight: {
      fontSize: '8vw',
      color: '#cccccc',
      marginTop: '-1vw',
      marginLeft: '1vw',
      [theme.breakpoints.down('sm')]: {
        fontSize: '75px',
      },
      [theme.breakpoints.down('xs')]: {
        color: '#cccccc',
        fontSize: '68px',
        marginTop: 0,
        marginRight: "8vw"
      },
      [theme.breakpoints.down(460)]: {
        fontSize: '53px',
        marginLeft: "2vw"
      },
      [theme.breakpoints.down(400)]: {
        fontSize: '55px',
        marginRight: "1vw"
      }
    },
    order: {
      fontSize: '6.5vw',
      color: '#b3b3b3',
      fontWeight: 'bold',
      lineHeight: '1.1',
      marginLeft: '1vw',
      marginTop: '1vw',
      [theme.breakpoints.down('sm')]: {
        fontSize: '70px',
        marginTop: '0',
      },
      [theme.breakpoints.down('xs')]: {
        color: '#999999',
        fontSize: '60px',
        marginLeft: "12vw",
        marginTop: '1vw'
      },
      [theme.breakpoints.down(460)]: {
        fontSize: '50px',
        marginLeft: "10vw",
        marginTop: '0'
      },
      [theme.breakpoints.down(400)]: {
        fontSize: '50px',
        marginLeft: "6vw"
      }
    },
    logo: {
      color: '#d27979',
      fontSize: '10vw',
      lineHeight: 0.6,
      fontWeight: 'bold',
      marginLeft: "7vw",
      [theme.breakpoints.down('sm')]: {
        fontSize: '85px',
        marginLeft: "3vw",
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '85px',
      },
      [theme.breakpoints.down(460)]: {
        fontSize: '80px',
        marginLeft: "-1vw",
      }
    },
    card: {
      height: '40vw',
      width: '30vw',
      marginTop: '-1vw',
      [theme.breakpoints.down('sm')]: {
        height: '47vh',
        width: '33vh',
        marginTop: '1vw',
      },
      [theme.breakpoints.down(820)]: {
        height: '42vh',
        width: '29vh'
      },
      [theme.breakpoints.down(700)]: {
        height: '38vh',
        width: '26h'
      },
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
        height: '40vh',
        width: '25vh'
      },
      [theme.breakpoints.down(400)]: {
        height: '38vh',
        width: '23vh'
      }
    },
    media: {
      height: '40vw',
      width: '30vw',
      [theme.breakpoints.down('sm')]: {
        height: '47vh',
        width: '33vh'
      },
      [theme.breakpoints.down(820)]: {
        height: '42vh',
        width: '29vh'
      },
      [theme.breakpoints.down(700)]: {
        height: '38vh',
        width: '26h'
      },
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
        height: '40vh',
        width: '25vh'
      },
      [theme.breakpoints.down(400)]: {
        height: '38vh',
        width: '23vh'
      }
    },
  });

  export default styles;