import React from 'react';

import { Card, CardText} from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';

const BioSkills = (props) => {
    return (
        <Card>
            <CardText>
            <List>
                {props.skills.map((skill, key) => {return <ListItem>{skill}</ListItem>})}
            </List>
            </CardText>
        </Card>
    );
};

export default BioSkills;