import React, {Component} from 'react';

export default class EmployeeSingle extends Component {

	deleteEmployee() {
		Meteor.call('deleteEmployee', this.props.employee);
	}

	render() {
		return (
			<div>
				
				<ul className="list-group">
					<li className="list-group-item">
						<a href={`/employee/${this.props.employee._id}`}>
							Employee Id: {this.props.employee.employeeId}
						</a>
					</li>
					<li className="list-group-item">
						First Name: {this.props.employee.employeeFirstName}
					</li>
					<li className="list-group-item">
						Last Name: {this.props.employee.employeeLastName}
					</li>
					<li className="list-group-item">
						Start Date: {this.props.employee.employeeStartDate.toString()}
					</li>
					<li className="list-group-item">
						Experience: {this.props.employee.employeeExperience} Years
					</li>
					<li className="list-group-item">
						Hourly Rate: ${this.props.employee.employeeHourlyRate}
					</li>
				</ul>
					
				<div className="btn-group pull-right">
					<button className="btn btn-warning">
						<span className="glyphicon glyphicon-pencil"></span> Edit
					</button>

					<button className="btn btn-danger"
						onClick={this.deleteEmployee.bind(this)}>
						<span className="glyphicon glyphicon-trash"></span> Delete
					</button>
				</div>
			</div>
		)
	}
}