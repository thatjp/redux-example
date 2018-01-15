import React from 'react';

/*--------------------

This should take props and append the name and title 
the user is applying/searching for

--------------------*/

const BioTitle = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
        </div>
    );
};

export default BioTitle;