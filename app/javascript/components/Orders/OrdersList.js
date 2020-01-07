import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class OrdersList extends Component {
	constructor(props){
		super(props);
		this.renderOrders = this.renderOrders.bind(this);
	}
	renderOrders(orders){
		return(
			<Table>
			<TableHead>
				<TableRow>
					<TableCell>
						Order#
					</TableCell>
				</TableRow>
			</TableHead>
				{orders.map(order => (
					<TableRow hover key={order.id}>
						<Link to={`/orders/${order.id}`}>
							<TableCell>
								{order.id}
							</TableCell>
						</Link>
					</TableRow>
				))}
			</Table>
		)
	}

	render(){
		const { orders } = this.props;
		if (!Array.isArray(orders) || !orders.length){return <span>Loading</span>};
		return(
			<React.Fragment>
					{this.renderOrders(orders)}	
			</React.Fragment>
		)
	}
}

export default OrdersList;