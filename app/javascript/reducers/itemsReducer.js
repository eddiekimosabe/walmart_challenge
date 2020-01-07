import { itemConstants } from '../constants/itemConstants';

const initialState = []

export default function items(state=initialState, action){	
	switch (action.type) {
		case itemConstants.GET_ALL_SUCCESS:
			return action.items
		case itemConstants.GET_ALL_FAILURE:
			return{
				error: action.error
			}
	  default:
	    return state
	}
};