import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class ItemsList extends Component {
	constructor(props){
		super(props);
		this.renderItems = this.renderItems.bind(this);
	}
	renderItems(items){
		return(
		<Table>
		<TableHead>
			<TableRow>
				<TableCell>
				Name
				</TableCell>
			</TableRow>
		</TableHead>
		{items.map(item => (
			<TableRow hover key={item.id}>
				<Link to={`/items/${item.id}`}>
					<TableCell>
						{item.name}
					</TableCell>
				</Link>
			</TableRow>
			))}
		</Table>
		)
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