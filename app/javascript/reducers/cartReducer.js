import { cartConstants } from '../constants/cartConstants';

const initialState = {
	items: []
}

export default function cart(state=initialState, action){	
	switch (action.type) {
		case cartConstants.ADD_TO_CART:
			let existed_item = state.items.find(item => action.item.id === item.id)
				if(existed_item) { 
					return state
				}
				else{
					return {
						...state,
						items: [...state.items, action.item],
					}
				}
		case cartConstants.LOAD_CART:
			return{
				...state,
				items: action.order.items
			}
		case cartConstants.LOAD_CART:
			return{
				...state,
				error: action.error
			}
		case cartConstants.REMOVE_FROM_CART:
			let itemToRemove = state.items.find(item=> action.item.id === item.id)
			let new_items = state.items.filter(item=> action.item.id !== item.id)
			return{
			    ...state,
			    items: new_items
			}
	  default:
	    return state
	}
};