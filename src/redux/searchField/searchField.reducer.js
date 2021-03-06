import { searchFieldActionTypes } from './searchField.types';

const INITIAL_STATE = {
    searchField: ''
};

export const searchFieldReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case searchFieldActionTypes.CHANGE_SEARCH_FIELD:
            return {
                ...state,
                searchField : action.payload
            }
        default :
            return state
    }
}