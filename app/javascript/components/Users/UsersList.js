import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class UsersList extends Component {
	constructor(props){
		super(props);
		this.renderUsers = this.renderUsers.bind(this);
	}
	renderUsers(users){
		return users.map(user => (
			<li key={user.id}>
				<Link to={`/users/${user.id}`}>
					{user.name}
				</Link>
			</li>
		))
	}

	render(){
		const { users } = this.props;
		return(
			<React.Fragment>
				<ul>
					{this.renderUsers(users)}
				</ul>
			</React.Fragment>
		)
	}
}

export default UsersList;