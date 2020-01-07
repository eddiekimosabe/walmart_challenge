import React from 'react';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Order = ({ order, handleDelete }) => (
	<div>
		<Table>
			<TableHead>
				<TableRow>
					<TableCell>
						<h2>Order #:{order.id}</h2>
						<Link to={`/orders/${order.id}/edit`}>Edit</Link>
						<button className="delete" type="button" onClick={() => handleDelete(order.id)}>
						  Delete
						</button>
					</TableCell>
				</TableRow>
			</TableHead>
			{
				order.items.length ? (
					order.items.map(item=>{
						return(
							<TableRow hover key={item.id}>
								<TableCell>
									<span>{item.name}</span>
								</TableCell>
							</TableRow>
						)
					})
				):
				(
					<span>No Items.</span>
				)
			}
		</Table>
	</div>
)

export default Order;