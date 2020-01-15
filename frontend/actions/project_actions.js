import * as APIUtil from '../util/session_api_util';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';

export const receiveProject = ({ project }) => ({
    type: RECEIVE_PROJECT,
    project
})


// ---- THUNKS ----

export const createProject = (project) => (
    APIUtil.createProject(project).then(review => (
        dispatch(receiveProject(project))
    ))
);

export const fetchProject = id => dispatch => (
    APIUtil.fetchProject(id).then(project => (
        dispatch(receiveProject(project))
    ))
)