export const formSelectors = {
	getFormView,
	getFormEdit,
	getFormType
}

function getFormView(state) {
	return state.form.view.data;
}

function getFormEdit(state) {
	return state.form.edit.data;
}

function getFormType(state) {
	return state.form.edit.formType;
}