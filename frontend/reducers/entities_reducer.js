import { combineReducers } from 'redux';
import users from './users_reducer';
import projects from './projects_reducer';
import messages from './messages_reducer';
import comments from './comments_reducer';
import lists from './lists_reducer';
import todos from './todos_reducer';

export default combineReducers({
    users,
    projects,
    messages,
    comments,
    lists,
    todos
});