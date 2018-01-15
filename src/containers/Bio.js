import React from 'react';
import { Card, CardText } from 'material-ui/Card';

import BioText from '../components/bio/BioText';
import BioTitle from '../components/bio/BioTitle';
import BioSkills from '../components/bio/BioSkills';


const Bio = (props) => (
    <div>
        <Card>
            <CardText>
                    <BioTitle name={props.info.name}/>
                    <BioText text={props.info.text}/>
                    <BioSkills skills={props.info.skills}/>
                </CardText>
            </Card>      
    </div>
);

export default Bio