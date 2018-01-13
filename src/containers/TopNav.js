import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

import DropDown from '../components/menu/DropDown';
import GHButton from '../components/menu/GHButton';
import NavButton from '../components/menu/NavButtons';

const navStyles = {
    backgroundColor: '#FFCA28'
}

class TopNav extends Component {

  render() {
    return (
    <div>
      <AppBar 
      style={navStyles}
      children={<NavButton />}
      />
      
      </div>
    );
  }
}

export default TopNav;
