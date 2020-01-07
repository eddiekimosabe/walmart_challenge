import { formConstants } from '../constants/formConstants';

export const formActions = {
	addChange,
	editFormPending,
	editFormSuccess,
	setNewEditableForm
}

function addChange(fieldName, fieldValue) {
	 return {
	 	type: formConstants.ADD_CHANGE,
	 	fieldName,
	 	fieldValue
	 }
};

function setNewEditableForm(form) {
	return{
		type: formConstants.SET_UP_EDIT_FORM,
		form
	}
};

function editFormPending() {
	return { 
		type: formConstants.EDIT_FORM_PENDING 
	}
};

function editFormSuccess(form) {
	return {
		type: formConstants.EDIT_FORM_SUCCESS,
		form
	}
};