import React, {Component} from 'react';

export default class JobForm extends Component {

	addJob(event) {
		event.preventDefault();
		let invoice = this.refs.invoice.value.trim();
		let firstName = this.refs.firstName.value.trim();
		let lastName = this.refs.lastName.value.trim();
		let address = this.refs.address.value.trim();
		let phoneNumber = this.refs.phoneNumber.value.trim();
		let email = this.refs.email.value.trim();
		let jobTypeCode = this.refs.jobTypeCode.value.trim();
		let estimateCost = this.refs.estimateCost.value.trim();
		let estimateParts = this.refs.estimateParts.value.trim();
		let estimateEmployee = this.refs.estimateEmployee.value.trim();
		let installCost = this.refs.installCost.value.trim();
		let installParts = this.refs.installParts.value.trim();
		let installEmployee = this.refs.installEmployee.value.trim();
		let vehicleId = this.refs.vehicleId.value.trim();
		let mileage = this.refs.mileage.value.trim();
		

		//add further input validation rules here
		if(invoice) {
			Meteor.call('addJob', invoice, firstName, lastName, address, phoneNumber, email, jobTypeCode,
			estimateCost, estimateParts, estimateEmployee, installCost, installParts, installEmployee, vehicleId, mileage, (error, data) => {
			if(error) {
				Bert.alert('Please login before submitting', 'danger', 'fixed-top', 'fa-frown-o');
			} else {
			this.refs.invoice.value = "";
			this.refs.firstName.value = "";
			this.refs.lastName.value = "";
			this.refs.address.value = "";
			this.refs.phoneNumber.value = "";
			this.refs.email.value = "";
			this.refs.jobTypeCode.value = "";
			this.refs.estimateCost.value = "";
			this.refs.estimateParts.value = "";
			this.refs.estimateEmployee.value = "";
			this.refs.installCost.value = "";
			this.refs.installParts.value = "";
			this.refs.installEmployee.value = "";
			this.refs.vehicleId.value = "";
			this.refs.mileage.value = "";
			}
		});
		}

		
	}
	
	render() {
		return(
			<form className="form-horizontal" onSubmit={this.addJob.bind(this)}>
				<div className="form-group">
					<label className="control-label col-sm-2" htmlFor="invoiceNumber">Invoice Number:</label>
					<div className="col-sm-10">
					<input 
						type="number" 
						className="form-control"
						id="invoiceNumber"
						ref="invoice"
						placeholder="Invoice"
					/>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-sm-2" htmlFor="firstName">First Name:</label>
					<div className="col-sm-4">
					<input 
						type="text" 
						className="form-control"
						id="firstName"
						ref="firstName"
						placeholder="First Name"
					/>
					</div>
				
					<label className="control-label col-sm-2" htmlFor="lastName">Last Name:</label>
					<div className="col-sm-4">
					<input 
						type="text" 
						className="form-control"
						id="lastName"
						ref="lastName"
						placeholder="Last Name"
					/>
					</div>
				</div>
					<input 
						type="text" 
						ref="address"
						placeholder="Address"
					/>
					<input 
						type="number" 
						ref="phoneNumber"
						placeholder="Phone Number"
					/>
					<input 
						type="text" 
						ref="email"
						placeholder="Email"
					/>
					<input 
						type="text" 
						ref="jobTypeCode"
						placeholder="Job Type Code"
					/>
					<input 
						type="number" 
						ref="estimateCost"
						placeholder="Estimate Cost"
					/>
					<input 
						type="text" 
						ref="estimateParts"
						placeholder="Estimate Parts"
					/>
					<input 
						type="text" 
						ref="estimateEmployee"
						placeholder="Estimate Employee"
					/>
					<input 
						type="number" 
						ref="installCost"
						placeholder="Install Cost"
					/>
					<input 
						type="text" 
						ref="installParts"
						placeholder="Install Parts"
					/>
					<input 
						type="text" 
						ref="installEmployee"
						placeholder="Install Employee"
					/>
					<input 
						type="text" 
						ref="vehicleId"
						placeholder="Vehicle Id"
					/>
					<input 
						type="number" 
						ref="mileage"
						placeholder="Job Mileage"
					/>
					<input type="submit" />
				</form>
			)
	}
}
