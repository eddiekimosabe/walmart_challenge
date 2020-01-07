import { userConstants } from '../constants/userConstants';
import { formConstants } from '../constants/formConstants';
import { userService } from '../services/userService';

export const userActions = {
	getAll,
	handleDelete
};

function getAll(){
	return dispatch => {
		    userService.getAll()
		        .then(
		            users => dispatch(success(users)),
		            error => dispatch(failure(error.toString()))
		        );
		};
		function success(users) { return { type: userConstants.GET_ALL_SUCCESS, users } }
		function failure(error) { return { type: userConstants.GET_ALL_FAILURE, error } }
}

function handleDelete(id) {
	debugger;
    return (dispatch, getState) => {
        userService.handleDelete(id).then(
            response => {
                // dispatch(alertActions.success('Successfully deleted user'))
                alert('User deleted');
            },
            error => {
                dispatch(failure(error));
                // dispatch(alertActions.error(error.toString()));
            }
        )
    }
    function success(response) { return { type: formConstants.HANDLE_DELETE_SUCCESS, response } }
    function failure(error) { return { type: formConstants.HANDLE_DELETE_FAILURE, error } }
} 