import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { formActions } from '../../actions/formActions';
import { cartActions } from '../../actions/cartActions';
import { itemActions } from '../../actions/itemActions';
import { formSelectors } from '../../selectors/formSelectors';
import { formThunks } from '../../thunks/formThunks';
import { orderFormActions } from '../../actions/orderFormActions';
import { withRouter } from 'react-router-dom';
import compose from 'recompose/compose';
import { Grid } from '@material-ui/core';


class OrderForm extends Component {
	constructor(props){
		super(props);		
		this.handleSubmit = this.handleSubmit.bind(this);
		this.addToCart = this.addToCart.bind(this);
		this.removeFromCart = this.removeFromCart.bind(this);
	}

	componentDidMount(){
		this.props.getAllItems();
		this.props.loadOrderEditForm(this.props.match.params.id);
		this.props.setUpEditableForm();
	}

	handleSubmit(event){
		event.preventDefault();
		this.props.handleCreate(event);
	}

	addToCart(item){
		this.props.addToCart(item);
	}

	removeFromCart(item){
		this.props.removeFromCart(item);
	}

	render(){
		const {addChange, cart, formEdit, items} = this.props;
		
		if (!Array.isArray(items) || !items.length){return null};

		let itemList = items.map(item=>{
		    return(
		        <div className="card" key={item.id}>
	            <div >
	                <span className="card-title">{item.name} <i onClick={()=>{this.addToCart(item)}}>add</i></span>

	            </div>
		        </div>
		    )
		})

		let addedItems = cart.items.length ?
		            (  
	                cart.items.map(item=>{
	                  return(
	                    <li key={item.id}>
	                      <div className="item-desc">
	                          <span className="title">{item.name}</span>
	                          <i onClick={()=>{this.removeFromCart(item)}}>Remove</i>
	                      </div>
	                    </li>                        
	                  )
	                })
		            ):
		            (
		            	<p>Nothing.</p>
		            )

		return(
			<Grid
			  container
			>

			<Grid
			  item
			  md={7}
			  xs={12}
			>
				<h2>
					Create Order
				</h2>
			</Grid>
			<Grid
			  item
			  md={7}
			  xs={12}
			>
			<form className="eventForm" onSubmit={(event) => this.handleSubmit(event)}>

				<div>
					{itemList}
				</div>

				<div className="cart">
				    <h5>You have ordered:</h5>
				    <ul className="collection">
				        {addedItems}
				    </ul>
				</div>  

				<div className="form-actions">
				<button type="submit">Submit</button>
				</div>
			</form>
			</Grid>
			</Grid>
		)
	}
}


function mapStateToProps(state){
	const formEdit = formSelectors.getFormEdit(state)
	const {items, cart} = state
	return{
		formEdit,
		items,
		cart
	}
}

function mapDispatchToProps(dispatch, ownProps) {
	debugger;
	return {
		addChange(fieldName,fieldValue){
			dispatch(formActions.addChange(fieldName, fieldValue))
		},
		addToCart(item){
			dispatch(cartActions.addToCart(item))
		},
		removeFromCart(item){
			dispatch(cartActions.removeFromCart(item))
		},
		setUpEditableForm(){
			dispatch(formThunks.setUpForm())
		},
		handleCreate(event){
			dispatch(orderFormActions.handleCreate(event, ownProps))
		},
		handleUpdate(){
			dispatch(orderFormActions.handleUpdate())
		},
		loadOrderEditForm(id){
			dispatch(orderFormActions.loadOrderEditForm(id))
		},
		getAllItems(){
			dispatch(itemActions.getAll())
		}
	}
}

export default compose(
	withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(OrderForm);