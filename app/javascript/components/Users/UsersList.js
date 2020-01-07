import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class UsersList extends Component {
	constructor(props){
		super(props);
		this.renderUsers = this.renderUsers.bind(this);
	}

	renderUsers(users){
		return(
			<Table>
			<TableHead>
				<TableRow>
					<TableCell>
						Name
					</TableCell>
				</TableRow>
			</TableHead>
				{users.map(user => (
					<TableRow hover key={user.id}>
						<Link to={`/users/${user.id}`}>
							<TableCell>
								{user.name}
							</TableCell>
						</Link>
					</TableRow>
				))}
			</Table>
		)
	}

	render(){
		const { users } = this.props;
		return(
			<React.Fragment>
					{this.renderUsers(users)}
			</React.Fragment>
		)
	}
}

export default UsersList;