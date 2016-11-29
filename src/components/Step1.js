import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const RadioButtonGroupStyle = {
  flexDirection:"row",
  display:"flex"
};
const RadioButtonStyle = {
  width:"50%"
};

class Step1 extends Component {

	state = {
		locationID: null,
		eventID: null , 
		ticketType : null,
		amount: null,
	};
	locationHandleChange = (e, index, locationID) => this.setState({locationID});
	eventNameHandleChange = (e, index, eventID) => this.setState({eventID});
	ticketTypeHandleChange = (e, ticketType) => this.setState({ticketType});
	amountHandleChange = (e) => this.setState({amount:e.target.value});

	render() {
		return (
		<div className="Step1">
			<SelectField
				floatingLabelText="Location"
				value={this.state.locationID}
				onChange={this.locationHandleChange}
			>
				<MenuItem value={1} primaryText="Amsterdam" />
				<MenuItem value={2} primaryText="London" />

			</SelectField><br />

			<SelectField
				floatingLabelText="Event name"
				value={this.state.eventID}
				onChange={this.eventNameHandleChange}
			>
				<MenuItem value={1} primaryText="ESN boat party" />
				<MenuItem value={2} primaryText="Christmass party" />

			</SelectField><br />

			<p>Choose the type of ticket </p>
			<RadioButtonGroup  
				name="rbg"
				style={RadioButtonGroupStyle} 
				onChange={this.ticketTypeHandleChange}
			>
				<RadioButton
					value="full"
					label="Full"
					style={RadioButtonStyle}
				/>
				<RadioButton
					value="deposit"
					label="Deposit"
					style={RadioButtonStyle}
				/>
			</RadioButtonGroup><br />

			<TextField
				type="number"
	      		defaultValue="0"
	      		floatingLabelText="Enter the amount of tickets"
	      		onChange={this.amountHandleChange}
	    	/><br />
		</div>
		);
	}
}

export default Step1;