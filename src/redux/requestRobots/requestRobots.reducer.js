import { requestRobotsActionTypes } from './requestRobots.types';

const INITIAL_STATE = {
    isPending: false,
    robotsData: [],
    errorMessage: undefined
};

export const robotsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case requestRobotsActionTypes.REQUEST_ROBOTS_PENDING:
            return {
                ...state,
                isPending: true
            }
        case requestRobotsActionTypes.REQUEST_ROBOTS_SUCCESS:
            return {
                ...state,
                robotsData: action.payload,
                isPending: false
            }
        case requestRobotsActionTypes.REQUEST_ROBOTS_FAILED:
            return {
                ...state,
                errorMessage: action.payload
            }
        default :
            return state
    }
}

