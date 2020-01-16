import { RECEIVE_PROJECT, RECEIVE_PROJECTS } from '../actions/project_actions';

const projectsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_PROJECTS:
            return action.projects;
        case RECEIVE_PROJECT:
            const newProject = { [action.project_id]: action.project };
            return Object.assign({}, state, newProject);
        default:
            return state;
    }
}

export default projectsReducer;
