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

// switch (action.type) {
//     case RECEIVE_BENCHES:
//         return action.benches;
//     case RECEIVE_BENCH:
//         const newBench = { [action.bench.id]: action.bench };
//         return Object.assign({}, state, newBench);
//     case RECEIVE_REVIEW:
//         const { review, average_rating } = action;
//         const newState = Object.assign({}, state);
//         newState[review.bench_id].reviewIds.push(review.id);
//         newState[review.bench_id].average_rating = average_rating;
//         return newState;
//     default:
//         return state;
// }
// };
