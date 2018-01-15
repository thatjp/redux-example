import React from 'react';
import AppBar from 'material-ui/AppBar'

import NavButton from './NavButtons';

const navStyles = {
    backgroundColor: '#FFCA28'
}

const TopNav = (props) => (

  <div>
  
    <AppBar 
      style={navStyles}
      children={<NavButton click={props.click}/>}
      />
  </div>
);

export default TopNav;