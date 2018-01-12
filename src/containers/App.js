import React, { Component } from 'react';
import Bio from './Bio';
import Work from './Work';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return ( 
    <MuiThemeProvider>
        <Bio />
        <Work />
    </MuiThemeProvider> 
    );
  }
}

export default App;
