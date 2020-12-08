import {createSelector} from 'reselect';

const selectRobots  = state => state.robots;

export const selectRobotsPending = createSelector(
    [selectRobots],
    (robots) => robots.isPending
);

export const selectRobotsSuccess = createSelector(
    [selectRobots],
    (robots) => robots.robotsData 
);

export const selectRobotsFailed = createSelector(
    [selectRobots],
    (robots) => robots.errorMessage
);

