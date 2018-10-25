import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// target="_blank"

const THEME = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: "'Fredoka One', cursive"
  },
});

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={THEME}>
        <BrowserRouter>
          <Route exact path="/" render={(props) => <Home {...props} />} />
        </BrowserRouter>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
