import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ItemsList extends Component {
	constructor(props){
		super(props);
		this.renderItems = this.renderItems.bind(this);
	}
	renderItems(items){
		return items.map(item => (
			<li key={item.id}>
				<Link to={`/items/${item.id}`}>
					{item.name}
				</Link>
			</li>
		))
	}

	render(){
		const { items } = this.props;
		return(
			<React.Fragment>
				<ul>
					{this.renderItems(items)}
				</ul>
			</React.Fragment>
		)
	}
}

export default ItemsList;