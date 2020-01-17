import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const _nullUser = Object.freeze({
    id: null
});

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    // if (typeof action.payload === 'undefined') {
    //     console.log('action undefined');
    //     return state;
    // }
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id };
            // Ayanote: take currentUser off action and make session state { id: 1 }
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            return state;
    }
};

export default sessionReducer;