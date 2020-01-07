import handleResponse from '../helpers/handleResponse';

export const userService = {
	getAll,
	handleCreate,
	handleDelete
}

function getAll() {
    const requestOptions = {
        method: 'GET'
    };

    return fetch(`/v1/users`, requestOptions).then(handleResponse)
}

function handleCreate(form){
	debugger;
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({form})
    }

    return fetch(`/v1/users`, requestOptions).then(handleResponse)   
}

function handleDelete(id){
	debugger;
    const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id})
    }

    return fetch(`/v1/users/${id}`, requestOptions).then(handleResponse)   
}