import React, { Component } from 'react';
import Bio from './Bio';
import Work from './Work';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Bio />
       <Work />
      </div>
    );
  }
}

export default App;
