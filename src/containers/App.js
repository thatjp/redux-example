
///////////////////////////////////[ Package Imports ]///////////////////////////////////
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../actions/actionIndex';


///////////////////////////////////[ Directory Imports ]///////////////////////////////////
import Bio from './Bio';
import TopNav from './TopNav';

///////////////////////////////////[ Styling ]///////////////////////////////////
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = (state) => (
    <MuiThemeProvider>
        <TopNav />
        <Bio profiles={state}/>
    </MuiThemeProvider> 
);

const mapStateToProps = state => ({
  id: state.id
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
