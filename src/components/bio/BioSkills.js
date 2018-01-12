import React from 'react';

import { Card, CardText} from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';

const BioSkills = () => {
    return (
        <Card>
            <CardText>
            <List>
                <ListItem>Web Dev</ListItem>
                <ListItem>Design</ListItem>
                <ListItem>Video Editing</ListItem>
                <ListItem>Music Production</ListItem>
            </List>
            </CardText>
        </Card>
    );
};

export default BioSkills;