import React from 'react';
import { Card, CardText, CardTitle } from 'material-ui/Card';

const BioText = (props) =>{

    return(
        <Card>
            <CardTitle title="Bio"/>
            <CardText>
                {props.text}
            </CardText>
        </Card>
    )
}

export default BioText