
import React from 'react';

import GHButton from './GHButton';

import FlatButton from 'material-ui/FlatButton';



const NavButton = () => (
    <div>
        <FlatButton label="Next"/>
        <FlatButton label="Previous"/>
        <FlatButton label="All"/>
        <FlatButton label="Github" href="https://github.com/thatjp/redux-example" />
    </div>
);

export default NavButton;
