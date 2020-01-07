import { orderConstants } from '../constants/orderConstants'

const initialState = []

export default function orders(state=initialState, action){
	switch (action.type) {
		case orderConstants.GET_ALL_SUCCESS:
			return action.orders
		case orderConstants.GET_ALL_FAILURE:
			return{
				error: action.error
			}
	  default:
	    return state
	}
};