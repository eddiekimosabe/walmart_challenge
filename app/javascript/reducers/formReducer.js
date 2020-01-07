import { formConstants } from '../constants/formConstants';
import { combineReducers } from 'redux';

const initialState = {
	view: {
		status: '',
    loading: '',
    formType: '',
		data: {
			id: '',
			name: ''
		}
	},

	edit: {
		status: '',
		data: '',
		changed: ''
	}
};

function viewReducer(state = initialState.view, action) {
  switch (action.type) {
    case formConstants.EDIT_FORM_SUCCESS:
      return {
        ...state,
        status: formConstants.EDIT_FORM_SUCCESS,
        data: action.form,
      };
    default:
      return state;
  }
}

function editReducer(state = initialState.edit, action) {
  switch (action.type) {
    case formConstants.ADD_CHANGE:
      const newForm = { ...state.data };
      newForm[action.fieldName] = action.fieldValue;
      return {
        ...state,
        changed: true,
        data: newForm,
      };
    case formConstants.SET_UP_EDIT_FORM:
      return {
        ...state,
        changed: false,
        data: action.form,
      };
    case formConstants.EDIT_FORM_PENDING:
      return {
        ...state,
        status: formConstants.EDIT_FORM_PENDING,
      };
    case formConstants.EDIT_FORM_SUCCESS:
      return {
        ...state,
        changed: false,
        data: action.form,
        status: formConstants.EDIT_FORM_SUCCESS,
      };
    default:
      return state;
  }
}

export default combineReducers({
  view: viewReducer,
  edit: editReducer,
});