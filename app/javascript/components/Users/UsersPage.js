import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../actions/userActions';
import UsersList from './UsersList';
import User from './User';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

class UsersPage extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.getAllUsers()
	}

	render(){
		const {handleDelete, users, match} = this.props;
		if (!Array.isArray(users) || !users.length){return null};
		const userId = match.params.id;
		const user = users.find(u => u.id === Number(userId));
		
		return(
			<Grid
			  container
			>

			<Grid
			  item
			  md={7}
			  xs={12}
			>
				<h1>
					Users
				</h1>
				<Link to="/users/new">New User</Link>
			</Grid>

			<Grid
			  item
			  md={7}
			  xs={12}
			>
				<UsersList users={users}/>
			</Grid>

			<Grid
			  item
			  md={7}
			  xs={12}
			>
				{ user ? <User user={user} handleDelete={handleDelete}/> : null}
			</Grid>

			</Grid>
		)
	}
}

function mapStateToProps(state){
	const {users} = state;
	return{
		users
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getAllUsers() {dispatch(userActions.getAll())},
		handleDelete(id) {dispatch(userActions.handleDelete(id))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);