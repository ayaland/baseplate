import * as APIUtil from '../util/todo_api_util';

export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const RECEIVE_TODOS = 'RECEIVE_TODOS'
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveList = (list) => ({
    type: RECEIVE_LIST,
    list
});

export const receiveLists = (lists) => ({
    type: RECEIVE_LISTS,
    lists
});

export const receiveTodo = (todo) => ({
    type: RECEIVE_TODO,
    todo
});

export const receiveTodos = (todos) => ({
    type: RECEIVE_TODOS,
    todos
})

// ---- THUNKS ----

export const fetchLists = (projectId) => dispatch => (
    APIUtil.fetchLists(projectId).then(lists => (
        dispatch(receiveLists(lists))
    ))
);

export const fetchList = (projectId, listId) => dispatch => (
    APIUtil.fetchList(projectId, listId).then(list => (
        dispatch(receiveList(list))
    ))
);

export const createList = (projectId, list) => dispatch => (
    APIUtil.createList(projectId, list).then(list => (
        dispatch(receiveList(list))
    ))
);

export const fetchTodos = (listId) => dispatch => (
    APIUtil.fetchTodos(listId).then(todos => (
        dispatch(receiveTodos(todos))
    ))
);

export const createTodo = (listId, todo) => dispatch => (
    APIUtil.createTodo(listId, todo).then(todo => (
        dispatch(receiveTodo(todo))
    ))
);