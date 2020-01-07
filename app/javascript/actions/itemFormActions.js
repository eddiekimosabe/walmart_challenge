import { formActions } from '../actions/formActions';
import { formConstants } from '../constants/formConstants';
import { itemService } from '../services/itemService';

export const itemFormActions = {
	handleCreate,
	handleUpdate,
	loadItemEditForm
}

function handleCreate() {
	return (dispatch, getState) => {
		const state = getState();
		const form = state.form.edit.data
		itemService.handleCreate(form).then(
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

function handleUpdate() {
	return (dispatch, getState) => {
		const state = getState();
		const form = state.form.edit.data
		itemService.handleUpdate(form).then(
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

function loadItemEditForm(id){
	return (dispatch) => {
		itemService.getById(id).then(
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