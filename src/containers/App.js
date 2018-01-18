
///////////////////////////////////[ Package Imports ]///////////////////////////////////
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

///////////////////////////////////[ Directory Imports ]///////////////////////////////////
import Bio from './Bio';
import TopNav from '../components/menu/TopNav';
import { switchProfiles } from '../actions/index';
require('../scss/Style.css')

function mapStateToProps(state) {
  return{
    prof_id: state.profiles.profiles.prof_id,
    name: state.profiles.profiles.name,
    text: state.profiles.profiles.text,
    skills: state.profiles.profiles.skills
  } 
}

function mapDispatchToProps(dispatch) {
  return { action: bindActionCreators(switchProfiles), dispatch }
}

///////////////////////////////////[ Export App and Export Default APP ]///////////////////////////////////

/*--------------------

For Jest testing porpuses Redux docs advise you export the class indvidually
and import explicitly. This is done to deal with the pitfalls of react-redux connect()

--------------------*/

export class App extends Component {

handleClick() {
  this.props.dispatch(switchProfiles())
}

  render() {

    const profile = this.props
    
    return (
      <div>
        
        <TopNav click={this.handleClick.bind(this)}/>
        <Bio info={profile} />
        <p class="test">This element is styled through SASS</p>
        <p class="test">Test Elem.</p>
      </div> 
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

