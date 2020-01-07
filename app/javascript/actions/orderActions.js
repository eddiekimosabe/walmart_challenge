import { orderConstants } from '../constants/orderConstants';
import { orderService } from '../services/orderService';
import { formConstants } from '../constants/formConstants';

export const orderActions = {
	getAll,
	handleDelete
};

function getAll(){
	return dispatch => {
		    orderService.getAll()
		        .then(
		            orders => dispatch(success(orders)),
		            error => dispatch(failure(error.toString()))
		        );
		};
		function success(orders) { return { type: orderConstants.GET_ALL_SUCCESS, orders } }
		function failure(error) { return { type: orderConstants.GET_ALL_FAILURE, error } }
}

function handleDelete(id) {
	debugger;
    return (dispatch, getState) => {
        orderService.handleDelete(id).then(
            response => {
                // dispatch(alertActions.success('Successfully deleted order'))
                alert('Order deleted');
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