import React, {Component} from 'react';
import DateInputRange from '../../parameterInputComponents/DateInputRange.jsx';
import Dropdown from '../../parameterInputComponents/Dropdown.jsx';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import JobSingle from '../../jobView/JobSingle.jsx';
import {Employees} from './../../employeeView/EmployeeInputWrapper.jsx';


export default class JobsByEmployee extends TrackerReact(React.Component) {

	constructor(props) {
		super(props);
		this.state = {
			startDate: new Date(),
			endDate: new Date(),
			employee: Employees.findOne()._id
		}

		this.handleStartDateChange = this.handleStartDateChange.bind(this);
		this.handleEndDateChange = this.handleEndDateChange.bind(this);
		this.handleEmployeeChange = this.handleEmployeeChange.bind(this);
	}

	handleEmployeeChange(employee) {
		this.setState({
			employee: employee,
		});
	}

	handleStartDateChange(startDate) {
		let dateTokens = startDate.split("-");
		let dateYear = parseInt(dateTokens[0]);
		let dateMonth = parseInt(dateTokens[1]) - 1; //BSON month is 0 based
		let dateDay = parseInt(dateTokens[2]);
		let parsedDate = new Date(dateYear, dateMonth, dateDay);
		this.setState({
			startDate: parsedDate,
		});
	}

	handleEndDateChange(endDate) {
		let dateTokens = endDate.split("-");
		let dateYear = parseInt(dateTokens[0]);
		let dateMonth = parseInt(dateTokens[1]) - 1; //BSON month is 0 based
		let dateDay = parseInt(dateTokens[2]);
		let parsedDate = new Date(dateYear, dateMonth, dateDay);
		this.setState({
			endDate: parsedDate,
		});
	}

	jobItems() {
		console.log(this.state.employee);
		
		let employeeNumber = Employees.findOne({"_id": this.state.employee}).employeeId;
		return Jobs.find({
		"estimateEmployee": employeeNumber
		}).fetch();
	}

	render() {
		let employees = Employees.find().fetch();
		return (
			<div>
			<Dropdown
				onSelectionChange={this.handleEmployeeChange}
				options={Employees.find().fetch()}
			/>
			<DateInputRange 
				onStartDateChange={this.handleStartDateChange}
				onEndDateChange={this.handleEndDateChange}
			/>
			<div className="panel-body">
				<ul className="resolutions">
					{this.jobItems().map( (jobItems) => {
						return <JobSingle key={jobItems._id} jobItem={jobItems} />
					})}
				</ul>
			</div>
			
			</div>
			)
	}
} 