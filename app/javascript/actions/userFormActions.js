import { formConstants } from '../constants/formConstants';
import { formActions } from '../actions/formActions';
import { userService } from '../services/userService';

export const userFormActions = {
	handleCreate,
	handleUpdate,
	loadUserEditForm
}

function handleCreate() {
	return (dispatch, getState) => {
		const state = getState();
		const form = state.form.edit.data
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

function handleUpdate(id) {
	return (dispatch, getState) => {
		const state = getState();
		const form = state.form.edit.data
		userService.handleUpdate(form,id).then(
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

function loadUserEditForm(id){
	return (dispatch) => {
		userService.getById(id).then(
			response => {
				dispatch(formActions.loadData(response))
			},
			error => {
				dispatch(failure(error))
			}
		)
	}
	function failure(error) { return { type: formConstants.HANDLE_LOAD_FAILURE, error } }
}