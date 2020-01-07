import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item, handleDelete }) => (
	<div>
		<h2>
			{item.id}
		</h2>
		<Link to={`/items/${item.id}/edit`}>Edit</Link>
		<button className="delete" type="button" onClick={() => handleDelete(item.id)}>
		  Delete
		</button>
	</div>
)

export default Item;