import { searchFieldActionTypes } from './searchField.types';

export const setSearchField = ( text ) => (
    {
        type: searchFieldActionTypes.CHANGE_SEARCH_FIELD,
        payload: text
    }
);