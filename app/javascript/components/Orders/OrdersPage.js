import React, { Component } from 'react';
import { connect } from 'react-redux';
import { orderActions } from '../../actions/orderActions';
import { Link } from 'react-router-dom';
import OrdersList from './OrdersList';
import Order from './Order';
import { Grid } from '@material-ui/core';

class OrdersPage extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.getAllOrders()
	}

	render(){
		const {handleDelete, orders, match} = this.props;
		const orderId = match.params.id;
		const order = orders.find(o => o.id === Number(orderId));
		
		return(
			<Grid
			  container
			>

			<Grid
			  item
			  md={7}
			  xs={12}
			>
				<h1>
					Orders
				</h1>
			</Grid>
			<Grid
			  item
			  md={7}
			  xs={12}
			>
				<OrdersList orders={orders}/>
			</Grid>

			<Grid
			  item
			  md={7}
			  xs={12}
			>
				{ order ? <Order order={order} handleDelete={handleDelete}/> : null}
			</Grid>
			</Grid>
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