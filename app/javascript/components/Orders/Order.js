import React from 'react';
import { Link } from 'react-router-dom';

const Order = ({ order, handleDelete }) => (
	<div>
		<h2>
			{order.id}
		</h2>
		<Link to={`/orders/${order.id}/edit`}>Edit</Link>
		<button className="delete" type="button" onClick={() => handleDelete(order.id)}>
		  Delete
		</button>
	</div>
)

export default Order;