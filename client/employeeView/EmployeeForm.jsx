import React, {Component} from 'react';

export default class EmployeeForm extends Component {

	addEmployee(event) {
		event.preventDefault();
		let employeeId = this.refs.employeeId.value.trim();
		let employeeName = this.refs.employeeName.value.trim();
		
		if(employeeId) {
			Meteor.call('addEmployee', employeeId, employeeName, (error, data) => {
			if(error) {
				Bert.alert('Please login before submitting', 'danger', 'fixed-top', 'fa-frown-o');
			} else {
			this.refs.employeeId.value = "";
			this.refs.employeeName.value = "";
			}
		});
		}
	}
	
	render() {
		return(
			
			<form className="form-horizontal" onSubmit={this.addEmployee.bind(this)}>
					<div className="form-group">
					<label className="control-label col-sm-2" htmlFor="employeeId">Employee Id:</label>
					<div className="col-sm-10">
					<input 
						className="form-control"
						id="employeeId"
						type="text" 
						ref="employeeId"
						placeholder="Employee Id"
					/>
					</div>
					</div>
					<div className="form-group">
					<label className="control-label col-sm-2" htmlFor="employeeName">Employee Name:</label>
					<div className="col-sm-10">
					<input 
						className="form-control"
						id="employeeName"
						type="text" 
						ref="employeeName"
						placeholder="Employee Name"
					/>
					</div>
					
					</div>
					<input type="submit" className="btn btn-primary pull-right"/>
				</form>
			)
	}
}
