import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../actions/userActions';
import UsersList from './UsersList';
import User from './User';
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
			<React.Fragment>
				<h1>Users</h1>
				<UsersList users={users}/>
				{ user ? <User user={user} handleDelete={handleDelete}/> : null}
			</React.Fragment>
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