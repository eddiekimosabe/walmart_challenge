import { formActions } from '../actions/formActions';
import { formConstants } from '../constants/formConstants';
import { orderService } from '../services/orderService';

export const orderFormActions = {
	handleCreate,
	handleUpdate,
	loadOrderEditForm
}

function handleCreate(match) {
	return (dispatch, getState) => {
		const state = getState();
		const form = state.cart;
		const userId = match.params.userId
		orderService.handleCreate(form, userId).then(
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

function handleUpdate(match) {
	return (dispatch, getState) => {
		const state = getState();
		const form = state.cart;
		const id = match.params.id
		orderService.handleUpdate(form, id).then(
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

function loadOrderEditForm(id){
	return (dispatch) => {
		orderService.getById(id).then(
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