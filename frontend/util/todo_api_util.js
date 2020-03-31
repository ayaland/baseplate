export const fetchList = (projectId, listId) => (
    $.ajax({
        method: 'GET',
        url: `/api/projects/${projectId}/lists/${listId}`
    })
);

export const fetchLists = (projectId) => (
    $.ajax({
        method: 'GET',
        url: `/api/projects/${projectId}/lists`
    })
);

export const createList = (projectId, list) => (
    $.ajax({
        method: 'POST',
        url: `/api/projects/${projectId}/lists`,
        data: { list }
    })
);

// ------------------ Todos-----------------

export const fetchTodos = (listId) => (
    $.ajax({
        method: 'GET',
        url: `/api/lists/${listId}/todos`
    })
)

export const createTodo = (listId, todo) => (
    $.ajax({
        method: 'POST',
        url: `/api/lists/${listId}/todos`,
        data: { todo }
    })
)

export const deleteTodo = (listId, todoId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/lists/${listId}/todos/${todoId}`
    })
)