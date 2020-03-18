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