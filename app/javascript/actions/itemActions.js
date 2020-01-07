import { itemConstants } from '../constants/itemConstants';
import { itemService } from '../services/itemService';
import { formConstants } from '../constants/formConstants';

export const itemActions = {
	getAll,
	handleDelete
};

function getAll(){
	return dispatch => {
		    itemService.getAll()
		        .then(
		            items => dispatch(success(items)),
		            error => dispatch(failure(error.toString()))
		        );
		};
		function success(items) { return { type: itemConstants.GET_ALL_SUCCESS, items } }
		function failure(error) { return { type: itemConstants.GET_ALL_FAILURE, error } }
}

function handleDelete(id) {
	debugger;
    return (dispatch, getState) => {
        itemService.handleDelete(id).then(
            response => {
                // dispatch(alertActions.success('Successfully deleted Item'))
                alert('Item deleted');
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