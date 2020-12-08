import { requestRobotsActionTypes } from './requestRobots.types';

export const robotsIsPending = () => (
    {
        type: requestRobotsActionTypes.REQUEST_ROBOTS_PENDING
    }
);

export const robotsSuccess = ( data ) => (
    {
        type: requestRobotsActionTypes.REQUEST_ROBOTS_SUCCESS,
        payload: data
    }
);

export const robotsFailed = (errorMessage) => (
    {
        type: requestRobotsActionTypes.REQUEST_ROBOTS_FAILED,
        payload: errorMessage
    }
);

export const requestRobotsData = () => (dispatch) => {
    dispatch(robotsIsPending());
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch(robotsSuccess(data)))
        .catch(error => dispatch(robotsFailed(error.message)))
}