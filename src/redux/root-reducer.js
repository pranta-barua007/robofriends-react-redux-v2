import { combineReducers } from 'redux';

import { searchFieldReducer } from './searchField/searchField.reducer';

import { requestRobotsReducer } from './requestRobots/requestRobots.reducer';

const rootReducer = combineReducers(
    {
        search: searchFieldReducer,
        requestRobots: requestRobotsReducer
    }
);

export default rootReducer;