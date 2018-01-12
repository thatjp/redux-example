import React, { Component } from 'react';
import Bio from './Bio';
import TopNav from './TopNav';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return ( 
    <MuiThemeProvider>
        <TopNav />
        <Bio />      
    </MuiThemeProvider> 
    );
  }
}

export default App;
