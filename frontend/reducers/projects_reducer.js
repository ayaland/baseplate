import { RECEIVE_PROJECT } from '../actions/project_actions';

const projectsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_PROJECT:
            const newState = Object.assign{ project, name, description }
    }
}