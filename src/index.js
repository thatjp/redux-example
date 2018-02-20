
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';
import store from './constants/store';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const app = document.getElementById('root')

///////////////////////////////////[ Overview/Goals ]///////////////////////////////////

/*--------------------

I wanted to make a small application that better represented my abilities with react-redux and custom styling. 
I aim to implement:
    - React
    - Redux
    - Stylus
    - SASS

--------------------*/

///////////////////////////////////[ Provider ]///////////////////////////////////

/*--------------------

Provider has the React application connect to the redux store, "provide" the store to the child components

--------------------*/

ReactDOM.render(
    
    <Provider store={store}>
        <MuiThemeProvider> 
            <App />
        </MuiThemeProvider> 
    </Provider>, app
    );

