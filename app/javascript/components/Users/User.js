import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user, handleDelete }) => (
	<div>
		<h2>
			{user.name}
		</h2>
		<Link to={`/users/${user.id}/edit`}>Edit</Link>
		<button className="delete" type="button" onClick={() => handleDelete(user.id)}>
		  Delete
		</button>
	</div>
)

export default User;