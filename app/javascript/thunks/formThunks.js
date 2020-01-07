import { formSelectors } from '../selectors/formSelectors';
import { formActions } from '../actions/formActions'

export const formThunks = {
	saveForm,
	setUpForm 
}

function setUpForm() {
	return function _setupForm(dispatch, getState) {
		const form = formSelectors.getFormView(getState());
		dispatch(formActions.setNewEditableForm(form))
	}
}

function saveForm() {
	return function _saveForm(dispatch, getState) {
		dispatch(formActions.editFormPending());
		const form = formSelectors.getFormEdit(getState());
		dispatch(formActions.editFormSuccess(form))
	}
}