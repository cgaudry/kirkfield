import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class VehicleDetail extends TrackerReact(Component) {

	constructor() {
		super();

		this.state = {
			subscription: {
				vehicles: Meteor.subscribe("allVehicles")
			}
		}
	}

	componentWillUnmount() {
		this.state.subscription.vehicles.stop();
	}

	vehicle() {
		return Vehicles.findOne(this.props.id);
	}

	render() {
		let vehicle = this.vehicle();

		if(!vehicle) {
			return(<div>Loading...</div>)
		}
		return(
			<div className="panel panel-primary">
				<div className="panel-heading">
					<h1>Vehicle Id: {vehicle.vehicleId}</h1>
				</div>
				<div className="panel-body">
					<ul className="list-group">
						<li className="list-group-item">
							Vehicle Name: {vehicle.vehicleName}
						</li>
						<li className="list-group-item">
							Vehicle Make: {vehicle.vehicleMake}
						</li>
					</ul>
				</div>
			</div>
			)
	}
}
