import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import TestReport from './reportTypes/TestReport';






export default class ReportWrapper extends TrackerReact(React.Component) {
	constructor() {
		super();

		this.state = {value: ''};
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.reportInputs = this.reportInputs.bind(this);

	}

	componentWillUnmount() {
		
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		alert('oi ' + this.state.value);
		event.preventDefault();
	}

	//This will act as a running list of report types
	//for conditional rendering based on the select forms value
	reportInputs() {
		reportType = this.state.value;

		if(reportType == 'TestReport')
			return(<TestReport />)
		
		
	}

	

	render() {
		
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Chose report:
						<select value={this.state.value} onChange={this.handleChange}>
							<option value=""> </option>
							<option value="TestReport">Test Report</option>
							<option value="report2">Report 2</option>
							<option value="report3">Report 3</option>
						</select>
					</label>	
					<input type="submit" value="submit"/>
					{this.reportInputs()}
				</form>
			</div>

		)
	}
}

