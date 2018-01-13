
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers/reducerIndex';
import App from './containers/App';

const store = createStore(reducer)

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

Provider makes the React application connect to the redux store, "provide" the store to the child components

--------------------*/

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
    );

