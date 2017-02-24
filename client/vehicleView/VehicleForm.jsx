import React, {Component} from 'react';

export default class VehicleForm extends Component {

	addVehicle(event) {
		event.preventDefault();
		let vehicleId = this.refs.vehicleId.value.trim();
		let vehicleName = this.refs.vehicleName.value.trim();
		let vehicleMake = this.refs.vehicleMake.value.trim();
		let vehicleModel = this.refs.vehicleModel.value.trim();
		let vehicleModelYear = this.refs.vehicleModelYear.value.trim();
		let licensePlate = this.refs.licensePlate.value.trim();
		//add further input validation rules here
		if(vehicleId) {
			Meteor.call('addVehicle', vehicleId, vehicleName, vehicleMake,
				vehicleModel, vehicleModelYear, licensePlate, (error, data) => {
			if(error) {
				Bert.alert('Please login before submitting', 'danger', 'fixed-top', 'fa-frown-o');
			} else {
			this.refs.vehicleId.value = "";
			this.refs.vehicleName.value = "";
			this.refs.vehicleMake.value = "";
			this.refs.vehicleModel.value = "";
			this.refs.vehicleModelYear.value = "";
			this.refs.licensePlate = "";
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
					<div className="form-group">
					<label className="control-label col-sm-2" htmlFor="vehicleModel">Model:</label>
					<div className="col-sm-10">
					<input 
						className="form-control"
						id="vehicleModel"
						type="text" 
						ref="vehicleModel"
						placeholder="Model"
					/>
					</div>
					</div>
					<div className="form-group">
					<label className="control-label col-sm-2" htmlFor="vehicleModelYear">Model Year:</label>
					<div className="col-sm-10">
					<input 
						className="form-control"
						id="vehicleModelYear"
						type="number" 
						ref="vehicleModelYear"
						placeholder="Model Year"
					/>
					</div>
					</div>
					<div className="form-group">
					<label className="control-label col-sm-2" htmlFor="licensePlate">License Plate:</label>
					<div className="col-sm-10">
					<input 
						className="form-control"
						id="licensePlate"
						type="text" 
						ref="licensePlate"
						placeholder="License Plate"
					/>
					</div>
					</div>
					<input type="submit" className="btn btn-primary pull-right"/>
				</form>
			)
	}
}
