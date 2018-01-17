import React from 'react';

import FlatButton from 'material-ui/FlatButton';

const buttonsStyle = {
    paddingTop: '12px'
}

const buttonStyle = {
    color: '#ffffff'
}

const NavButton = (props) => (

    <div style={buttonsStyle}>
        <FlatButton style={buttonStyle} label="Next" onClick={props.click.bind(this)}/>
        <FlatButton style={buttonStyle} label="Previous"/>
        <FlatButton style={buttonStyle} label="All"/>
        <FlatButton style={buttonStyle} label="Github" href="https://github.com/thatjp/redux-example" />
    </div>
);

export default NavButton