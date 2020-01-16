import * as APIUtil from '../util/project_api_util';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';

export const receiveProject = (project) => ({
    type: RECEIVE_PROJECT,
    project
});

export const receiveProjects = (projects) => ({
    type: RECEIVE_PROJECTS,
    projects
})


// ---- THUNKS ----

export const fetchProject = (id) => dispatch => (
    APIUtil.fetchProject(id).then(project => (
        dispatch(receiveProject(project))
        ))
);
        
export const fetchProjects = () => dispatch => (
    APIUtil.fetchProjects().then(projects => (
        dispatch(receiveProjects(projects))
        ))
);
                
export const createProject = (project) => (
    APIUtil.createProject(project).then(project => (
        dispatch(receiveProject(project))
    ))
);









