import { cartConstants } from '../constants/cartConstants';
import { orderService } from '../services/orderService';

export const cartActions = {
	addToCart,
	loadCart,
	removeFromCart
};

function addToCart(item) {
	 return {
	 	type: cartConstants.ADD_TO_CART,
	 	item
	 }
};

function loadCart(id) {
	return (dispatch) => {
		orderService.getById(id)
		.then(
			response => {
				dispatch(success(response));
			},
			error => {
				dispatch(failure(error.toString()));
			}
		)
	}

	function success(order) {return { type: cartConstants.LOAD_CART, order }}
	function failure(error) { return { type: cartConstants.LOAD_CART_FAIL }}
}

function removeFromCart(item) {
	 return {
	 	type: cartConstants.REMOVE_FROM_CART,
	 	item
	 }
};