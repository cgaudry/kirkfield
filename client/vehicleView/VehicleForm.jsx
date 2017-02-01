import React, {Component} from 'react';

export default class VehicleForm extends Component {

	addVehicle(event) {
		event.preventDefault();
		let vehicleId = this.refs.vehicleId.value.trim();
		let vehicleName = this.refs.vehicleName.value.trim();
		let vehicleMake = this.refs.vehicleMake.value.trim();
		
		//add further input validation rules here
		if(vehicleId) {
			Meteor.call('addVehicle', vehicleId, vehicleName, vehicleMake, (error, data) => {
			if(error) {
				Bert.alert('Please login before submitting', 'danger', 'fixed-top', 'fa-frown-o');
			} else {
			this.refs.vehicleId.value = "";
			this.refs.vehicleName.value = "";
			this.refs.vehicleMake.value = "";
			}
		});
		}
	}
	
	render() {
		return(
			
			<form className="form-horizontal" onSubmit={this.addVehicle.bind(this)}>
					<div className="form-group">
					<label className="control-label col-sm-2" htmlFor="vehicleId">Vehicle Id:</label>
					<div className="col-sm-10">
					<input 
						className="form-control"
						id="vehicleId"
						type="text" 
						ref="vehicleId"
						placeholder="Vehicle Id"
					/>
					</div>
					</div>
					<div className="form-group">
					<label className="control-label col-sm-2" htmlFor="vehicleName">Vehicle Name:</label>
					<div className="col-sm-10">
					<input 
						className="form-control"
						id="vehicleName"
						type="text" 
						ref="vehicleName"
						placeholder="Vehicle Name"
					/>
					</div>
					</div>
					<div className="form-group">
					<label className="control-label col-sm-2" htmlFor="vehicleMake">Make:</label>
					<div className="col-sm-10">
					<input 
						className="form-control"
						id="vehicleMake"
						type="text" 
						ref="vehicleMake"
						placeholder="Make"
					/>
					</div>
					</div>
					<input type="submit" className="btn btn-primary pull-right"/>
				</form>
			)
	}
}
