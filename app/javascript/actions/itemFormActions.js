import { formConstants } from '../constants/formConstants';
import { itemService } from '../services/itemService';

export const itemFormActions = {
	handleSubmit
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
			itemService.handleUpdate(form).then(
				response => {
					dispatch(updateSuccess(form));
				},
				error => {
					dispatch(updateFailure(error));
				}
			)
		} else {
						itemService.handleCreate(form).then(
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
