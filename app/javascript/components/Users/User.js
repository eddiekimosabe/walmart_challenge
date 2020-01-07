import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
const User = ({ user, handleDelete }) => (
	<div>
		<Grid
			  item
			  md={7}
			  xs={12}
			>
		<h2>
			{user.name}
		</h2>
		</Grid>
		<Grid
		  item
		  md={7}
		  xs={12}
		>
		<Link to={`/users/${user.id}/orders/new`}>
			New Order
		</Link>
		<Link to={`/users/${user.id}/edit`}>
			Edit
		</Link>
		<button className="delete" type="button" onClick={() => handleDelete(user.id)}>
			Delete
		</button>
		</Grid>
	</div>
)

export default User;