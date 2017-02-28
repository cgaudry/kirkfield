import React, {Component} from 'react';

export default class EmployeeSingle extends Component {

	deleteEmployee() {
		Meteor.call('deleteEmployee', this.props.employee);
	}

	render() {
		return (
			<div>
				<div>
					<a href={`/employee/${this.props.employee._id}`}>{this.props.employee.employeeId}</a>
				</div>
				
				<div>
					{this.props.employee.employeeName}
				</div>
				<div>
					<div className="btn-group">
					<button className="btn btn-warning">
						<span className="glyphicon glyphicon-pencil"></span> Edit
					</button>

					<button className="btn btn-danger"
						onClick={this.deleteEmployee.bind(this)}>
						<span className="glyphicon glyphicon-trash"></span> Delete
					</button>
					</div>
				</div>
			</div>
		)
	}
}