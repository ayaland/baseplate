import { RECEIVE_PROJECT, RECEIVE_PROJECTS } from '../actions/project_actions';

const projectsReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_PROJECTS:
            return action.projects;
            // return Object.assign({}, state, action.projects);
        case RECEIVE_PROJECT:
            // return state;
            // return Object.assign({}, state, {[action.project.id]: action.project })
            nextState[action.project.id] = action.project
            return nextState;
        default:
            return state;
    }
}

export default projectsReducer;
