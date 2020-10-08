import {createSelector} from 'reselect';

const selectRequestRobots  = state => state.requestRobots;

export const selectRobotsPending = createSelector(
    [selectRequestRobots],
    (requestRobots) => requestRobots.isPending
);

export const selectRobotsSuccess = createSelector(
    [selectRequestRobots],
    (requestRobots) => requestRobots.robots 
);

export const selectRobotsFailed = createSelector(
    [selectRequestRobots],
    (requestRobots) => requestRobots.error
);

