import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class OrdersList extends Component {
	constructor(props){
		super(props);
		this.renderOrders = this.renderOrders.bind(this);
	}
	renderOrders(orders){
		return orders.map(order => (
			<li key={order.id}>
				<Link to={`/orders/${order.id}`}>
					{order.id}
				</Link>
			</li>
		))
	}

	render(){
		const { orders } = this.props;
		return(
			<React.Fragment>
				<ul>
					{this.renderOrders(orders)}
				</ul>
			</React.Fragment>
		)
	}
}

export default OrdersList;