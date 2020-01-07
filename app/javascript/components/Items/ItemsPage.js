import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemActions } from '../../actions/itemActions';
import ItemsList from './ItemsList';
import Item from './Item';
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
		const item = items.find(u => u.id === Number(itemId));
		debugger;
		
		return(
			<React.Fragment>
				<h1>Items</h1>
				<ItemsList items={items}/>
				{ item ? <Item item={item} handleDelete={handleDelete}/> : null}
			</React.Fragment>
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