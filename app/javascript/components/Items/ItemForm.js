import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { formActions } from '../../actions/formActions';
import { formSelectors } from '../../selectors/formSelectors';
import { formThunks } from '../../thunks/formThunks';
import { itemFormActions } from '../../actions/itemFormActions';
import { Grid } from '@material-ui/core';

class ItemForm extends Component {
	constructor(props){
		super(props);		
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount(){
		this.props.loadItemEditForm(this.props.match.params.id)
		this.props.setUpEditableForm();
	}

	handleSubmit(e){
		e.preventDefault();
		if(this.props.formType==="edit"){
			this.props.handleUpdate()
		} else {
			this.props.handleCreate()
		}
	}

	render(){
		const {addChange, formEdit} = this.props;
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
					Create Item
				</h2>
			</Grid>

			<Grid
			  item
			  md={7}
			  xs={12}
			>
			<form className="eventForm" onSubmit={this.handleSubmit}>
				<TextField
				  id="outlined-uncontrolled-text"
				  label="name"
				  value={formEdit.name}
				  className="name"
				  margin="normal"
				  variant="outlined"
				  onChange={(event) => addChange("name", event.target.value)}
				/>
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
	return{
		formEdit
	}
}

function mapDispatchToProps(dispatch) {
	return {
		addChange(fieldName,fieldValue){dispatch(formActions.addChange(fieldName, fieldValue))},
		setUpEditableForm(){dispatch(formThunks.setUpForm())},
		handleCreate(){dispatch(itemFormActions.handleCreate())},
		handleUpdate(){dispatch(itemFormActions.handleUpdate())},
		loadItemEditForm(id){dispatch(itemFormActions.loadItemEditForm(id))}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);