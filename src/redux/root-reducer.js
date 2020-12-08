import { combineReducers } from 'redux';

import { searchFieldReducer } from './searchField/searchField.reducer';

import { robotsReducer } from './requestRobots/requestRobots.reducer';

const rootReducer = combineReducers(
    {
        search: searchFieldReducer,
        robots: robotsReducer
    }
);

export default rootReducer;