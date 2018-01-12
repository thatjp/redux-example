import React, { Component } from 'react';
import { Card, CardText } from 'material-ui/Card';

import BioText from '../components/bio/BioText';
import BioTitle from '../components/bio/BioTitle';
import BioSkills from '../components/bio/BioSkills';

class Bio extends Component{

    render(){
        return(
            <Card>
                <CardText>
                    <BioTitle />
                    <BioText />
                    <BioSkills />
                </CardText>
            </Card>
        )
    }
}

export default Bio