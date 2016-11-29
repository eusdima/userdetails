import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const TextFieldStyle = {
  margin:10,
};

class Step2 extends Component {
	state = {
		firstName: null,
		lastName: null , 
		phone : null,
		email: null,
	};
	firstNameHandleChange = (e) => this.setState({firstName:e.target.value});
	lastNameHandleChange = (e) => this.setState({lastName:e.target.value});
	phoneHandleChange = (e) => this.setState({phone:e.target.value});
	emailHandleChange = (e) => this.setState({email:e.target.value});

	render() {
		return (
			<div className="Step2">

				<TextField
					type="name"
		      		defaultValue=""
		      		floatingLabelText="First Name"
		      		style={TextFieldStyle}
		      		onChange={this.firstNameHandleChange}
		    	/>
		    	<TextField
					type="name"
		      		defaultValue=""
		      		floatingLabelText="Last Name"
		      		style={TextFieldStyle}
		      		onChange={this.lastNameHandleChange}
		    	/><br />

		    	<TextField
					type="tel"
		      		defaultValue=""
		      		floatingLabelText="Phone number"
		      		style={TextFieldStyle}
		      		onChange={this.phoneHandleChange}
		    	/><br />

		    	<TextField
					type="email"
		      		defaultValue=""
		      		floatingLabelText="Email address"
		      		style={TextFieldStyle}
		      		onChange={this.emailHandleChange}
		    	/><br />

			</div>
		);
	}
}

export default Step2;