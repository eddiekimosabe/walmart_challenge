import { userConstants } from '../constants/userConstants'

const initialState = []

export default function users(state=initialState, action){
	switch (action.type) {	
		case userConstants.GET_ALL_SUCCESS:
			return action.users
		case userConstants.GET_ALL_FAILURE:
			return{
				error: action.error
			}
	  default:
	    return state
	}
};