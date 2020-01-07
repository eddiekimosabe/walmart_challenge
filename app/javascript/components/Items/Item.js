import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
const Item = ({ item, handleDelete }) => (
	<div>
		<Grid
			  item
			  md={7}
			  xs={12}
			>
		<h2>
			{item.name}
		</h2>
		</Grid>
		<Grid
			  item
			  md={7}
			  xs={12}
			>
		<Link to={`/items/${item.id}/edit`}>Edit</Link>
		<button className="delete" type="button" onClick={() => handleDelete(item.id)}>
		  Delete
		</button>
		</Grid>
	</div>
)

export default Item;