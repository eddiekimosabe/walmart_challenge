import { cartConstants } from '../constants/cartConstants';

export const cartActions = {
	addToCart,
	removeFromCart
};

function addToCart(item) {
	 return {
	 	type: cartConstants.ADD_TO_CART,
	 	item
	 }
};

function removeFromCart(item) {
	 return {
	 	type: cartConstants.REMOVE_FROM_CART,
	 	item
	 }
};