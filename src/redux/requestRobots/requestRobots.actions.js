import { requestRobotsActionTypes } from './requestRobots.types';

export const requestRobotsIsPending = () => (
    {
        type: requestRobotsActionTypes.REQUEST_ROBOTS_PENDING
    }
);

export const requestRobotsSuccess = ( data ) => (
    {
        type: requestRobotsActionTypes.REQUEST_ROBOTS_SUCCESS,
        payload: data
    }
);

export const requestRobotsFailed = (errorMessage) => (
    {
        type: requestRobotsActionTypes.REQUEST_ROBOTS_FAILED,
        payload: errorMessage
    }
);

export const requestRobotsData = () => (dispatch) => {
    dispatch(requestRobotsIsPending());
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch(requestRobotsSuccess(data)))
        .catch(error => dispatch(requestRobotsFailed(error.message)))
}