import React, { Component } from 'react';
import BioText from '../components/bio/BioText';
import BioTitle from '../components/bio/BioTitle';
import BioName from '../components/bio/BioName';
import BioSkills from '../components/bio/BioSkills';

class Bio extends Component{

    render(){
        return(
            <div>
                <BioTitle />
                <BioName />
                <BioText />
                <BioSkills />
            </div>
        )
    }
}

export default Bio