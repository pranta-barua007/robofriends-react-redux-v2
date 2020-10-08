import { requestRobotsActionTypes } from './requestRobots.types';

const INITIAL_STATE = {
    isPending: false,
    robots: [],
    error: undefined
};

export const requestRobotsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case requestRobotsActionTypes.REQUEST_ROBOTS_PENDING:
            return {
                ...state,
                isPending: true
            }
        case requestRobotsActionTypes.REQUEST_ROBOTS_SUCCESS:
            return {
                ...state,
                robots: action.payload,
                isPending: false
            }
        case requestRobotsActionTypes.REQUEST_ROBOTS_FAILED:
            return {
                ...state,
                error: action.payload
            }
        default :
            return state
    }
}

