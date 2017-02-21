import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import EmployeeForm from './EmployeeForm.jsx';
import EmployeeSingle from './EmployeeSingle.jsx';


export const Employees = new Mongo.Collection("employees");

export default class EmployeeInputWrapper extends TrackerReact(React.Component) {
	constructor() {
		super();

		this.state = {
			subscription: {
				employees: Meteor.subscribe("allEmployees")
			}
		}
	}

	componentWillUnmount() {
		this.state.subscription.employees.stop();
	}

	employees() {
		return Employees.find().fetch();
	}

	render() {
		
		return(
			<div>
				<div className="panel panel-primary">
				<div className="panel-heading">
					<h1>Add Employee</h1>
				</div>
				<div className="panel-body">
					<EmployeeForm />
				</div>
				</div>
				
				<div className="panel panel-primary">
				<div className="panel-heading">
					<h1>All Employees</h1>
				</div>
				<div className="panel-body">
					<table className="table">
						<thead>
							<tr>
								<td>Employee Id</td>
								<td>Employee Name</td>
							</tr>
						</thead>
						<tbody>
						{this.employees().map( (employees) => {
							return <EmployeeSingle key={employees._id} employee={employees} />
						})}
						</tbody>
					</table>
				</div>
				</div>
			</div>
		)
	}
}

