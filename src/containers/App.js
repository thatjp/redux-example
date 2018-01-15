
///////////////////////////////////[ Package Imports ]///////////////////////////////////
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

///////////////////////////////////[ Directory Imports ]///////////////////////////////////
import Bio from './Bio';
import TopNav from '../components/menu/TopNav';
import { switchProfiles } from '../actions/index';

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

class App extends Component {

// componentWillMount() {
//   this.props.dispatch(switchProfiles())
// }

handleClick() {
  this.props.dispatch(switchProfiles())
}

  render() {

    const profile = this.props
    
    return (
      <div>
        {console.log(this.props)}
        <TopNav click={this.handleClick.bind(this)}/>
        <Bio info={profile} />
      </div> 
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)