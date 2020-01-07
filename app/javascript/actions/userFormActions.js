import { formConstants } from '../constants/formConstants';
import { userService } from '../services/userService';

export const userFormActions = {
	handleSubmit,
	handleUpdate,
	handleCreate
}

function handleCreate(form) {
	return (dispatch, getState) => {
		userService.handleCreate(form).then(
			response => {
				dispatch(success(response));
			},
			error => {
				dispatch(failure(error));
			}
		)
	}
	function success(response) { return { type: formConstants.HANDLE_SUBMIT_SUCCESS, response } }
	function failure(error) { return { type: formConstants.HANDLE_SUBMIT_FAILURE, error } }
}

function handleUpdate(form) {
	return (dispatch, getState) => {
		userService.handleUpdate(form).then(
			response => {
				dispatch(success(response));
			},
			error => {
				dispatch(failure(error));
			}
		)
	}
	function request(response) { return { type: formConstants.HANDLE_UPDATE_REQUEST, response } }
	function success(response) { return { type: formConstants.HANDLE_UPDATE_SUCCESS, response } }
	function failure(error) { return { type: formConstants.HANDLE_UPDATE_FAILURE, error } }
}



function handleSubmit() {
	return (dispatch, getState) => {
		dispatch(request());
		const state = getState()
		const editFormType = state.form.edit.formType
		const viewFormType = state.form.view.formType
		const form = state.form.edit.data
		debugger;
		if (editFormType=='update' || viewFormType=='update') {
			userService.handleUpdate(form).then(
				response => {
					dispatch(updateSuccess(form));
				},
				error => {
					dispatch(updateFailure(error));
				}
			)
		} else {
						userService.handleCreate(form).then(
				response => {
				
					dispatch(success(response));
				},
				error => {
					dispatch(failure(error));
				}
			)
		}
	}
	function request(response) { return { type: formConstants.HANDLE_SUBMIT_REQUEST, response } }
	function success(response) { return { type: formConstants.HANDLE_SUBMIT_SUCCESS, response } }
	function failure(error) { return { type: formConstants.HANDLE_SUBMIT_FAILURE, error } }
	function updateRequest(response) { return { type: formConstants.HANDLE_UPDATE_REQUEST, response } }
	function updateSuccess(form) { return { type: formConstants.HANDLE_UPDATE_SUCCESS, form } }
	function updateFailure(error) { return { type: formConstants.HANDLE_UPDATE_FAILURE, error } }
}
