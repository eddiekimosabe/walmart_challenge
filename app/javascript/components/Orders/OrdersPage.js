import React, { Component } from 'react';
import { connect } from 'react-redux';
import { orderActions } from '../../actions/orderActions';
import OrdersList from './OrdersList';
import Order from './Order';
class OrdersPage extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.getAllOrders()
	}

	render(){
		const {handleDelete, orders, match} = this.props;
		if (!Array.isArray(orders) || !orders.length){return null};
		const orderId = match.params.id;
		const order = orders.find(o => o.id === Number(orderId));
		
		return(
			<React.Fragment>
				<h1>Orders</h1>
				<OrdersList orders={orders}/>
				{ order ? <Order order={order} handleDelete={handleDelete}/> : null}
			</React.Fragment>
		)
	}
}

function mapStateToProps(state){
	const {orders} = state;
	return{
		orders
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getAllOrders() {dispatch(orderActions.getAll())},
		handleDelete(id) {dispatch(orderActions.handleDelete(id))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);