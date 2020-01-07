import { combineReducers } from 'redux';
import items from './itemsReducer';
import orders from './ordersReducer';
import users from './usersReducer';
import form from './formReducer';

export default combineReducers({
	items,
	orders,
	users,
	form
})