import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemActions } from '../../actions/itemActions';
import ItemsList from './ItemsList';
import Item from './Item';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

class ItemsPage extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.getAllItems()
	}

	render(){
		const {handleDelete, items, match} = this.props;
		if (!Array.isArray(items) || !items.length){return null};
		const itemId = match.params.id;
		const item = items.find(i => i.id === Number(itemId));
		debugger;
		
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
					Items
				</h1>
				<Link to="/items/new">New Item</Link>
			</Grid>
			<Grid
			  item
			  md={7}
			  xs={12}
			>
				<ItemsList items={items}/>
			</Grid>	

			<Grid
			  item
			  md={7}
			  xs={12}
			>
				{ item ? <Item item={item} handleDelete={handleDelete}/> : null}
			</Grid>
			</Grid>
		)
	}
}

function mapStateToProps(state){
	const {items} = state;
	return{
		items
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getAllItems() {dispatch(itemActions.getAll())},
		handleDelete(id) {dispatch(itemActions.handleDelete(id))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPage);