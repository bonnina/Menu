import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Menu from './components/Menu';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const THEME = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: "'Fredoka One', cursive"
  },
});

class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={THEME}>
          <BrowserRouter>
          <div>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route exact path="/menu" render={(props) => <Menu {...props} />} />
          </div>
          </BrowserRouter>
        </MuiThemeProvider>
    );
  }
}

export default App;
