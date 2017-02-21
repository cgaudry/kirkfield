import React, {Component} from 'react';

export default class EmployeeSingle extends Component {

	deleteEmployee() {
		Meteor.call('deleteEmployee', this.props.employee);
	}

	render() {
		return (
			<tr>
				<td>
					<a href={`/employee/${this.props.employee._id}`}>{this.props.employee.employeeId}</a>
				</td>
				<td>
					{this.props.employee.employeeId} 
				</td>
				<td>
					{this.props.employee.employeeName}
				</td>
				<td>
					<div className="btn-group">
					<button className="btn btn-warning">
						<span className="glyphicon glyphicon-pencil"></span> Edit
					</button>

					<button className="btn btn-danger"
						onClick={this.deleteEmployee.bind(this)}>
						<span className="glyphicon glyphicon-trash"></span> Delete
					</button>
					</div>
				</td>
			</tr>
		)
	}
}