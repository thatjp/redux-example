import React from 'react';

import FlatButton from 'material-ui/FlatButton';

const NavButton = (props) => (

    <div>
        <FlatButton label="Next" onClick={props.click.bind(this)}/>
        <FlatButton label="Previous"/>
        <FlatButton label="All"/>
        <FlatButton label="Github" href="https://github.com/thatjp/redux-example" />
    </div>
);

export default NavButton