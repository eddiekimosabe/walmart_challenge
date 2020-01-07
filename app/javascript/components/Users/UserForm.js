import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { formActions } from '../../actions/formActions';
import { formSelectors } from '../../selectors/formSelectors';
import { formThunks } from '../../thunks/formThunks';
import { userFormActions } from '../../actions/userFormActions';

class UserForm extends Component {
	constructor(props){
		super(props);		
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount(){
		this.props.setUpEditableForm();
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.handleSubmit();
	}

	render(){
		const {addChange, formEdit} = this.props;
		return(
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
		handleSubmit(){dispatch(userFormActions.handleSubmit())}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(UserForm);