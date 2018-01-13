import { combineReducers } from 'redux';

import profiles from './profiles';

//should initialState always be an array

const rootReducer = combineReducers({
    profiles
})

export default rootReducer