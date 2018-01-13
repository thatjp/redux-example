import React from 'react';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/IconMenu';

const DropDown = () => {
    return (
        <div>
          <IconMenu>
            <MenuItem primaryText="Next"/>
            <MenuItem primaryText="Previous"/>
            <MenuItem primaryText="All"/>
          </IconMenu>
        </div>
    );
};

export default DropDown;