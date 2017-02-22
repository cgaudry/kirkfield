import React, {Component} from 'react';

export default class DateRangeInput extends Component {

	constructor(props) {
		super(props);

		this.handleStartDateChange = this.handleStartDateChange.bind(this);
		this.handleEndDateChange = this.handleEndDateChange.bind(this);
	}

	handleStartDateChange(event) {
		this.props.onStartDateChange(event.target.value);
	}

	handleEndDateChange(event) {
		this.props.onEndDateChange(event.target.value);
	}
	
	render() {
		return (
			<div>
				
				Start Date:
				
				<input 
					type="Date" 
					className="form-control"
					id="startDate"
					ref="startDate"
					onChange={this.handleStartDateChange}/>
				
				End Date:
				
				<input 
					type="Date" 
					className="form-control"
					id="endDate"
					ref="endDate"
					onChange={this.handleEndDateChange}/>
			
			</div>

		)
	}				

}