import handleResponse from '../helpers/handleResponse';

export const orderService = {
	getAll,
    getById,
	handleCreate,
	handleDelete,
    handleUpdate
}

function getAll() {
    const requestOptions = {
        method: 'GET'
    };

    return fetch(`/v1/orders`, requestOptions).then(handleResponse)
}

function getById(id) {
    const requestOptions = {
        method: 'GET'
    };
    return fetch(`/v1/orders/${id}`, requestOptions).then(handleResponse)   
}


function handleCreate(form, userId){
	debugger;
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({form})
    }

    return fetch(`/v1/users/${userId}/orders`, requestOptions).then(handleResponse)   
}

function handleDelete(id){
	debugger;
    const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id})
    }

    return fetch(`/v1/orders/${id}`, requestOptions).then(handleResponse)   
}

function handleUpdate(form, id){
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({form})
    }

    return fetch(`/v1/orders/${id}`, requestOptions).then(handleResponse)   
}