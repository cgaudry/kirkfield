import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import VehicleForm from './VehicleForm.jsx';
import VehicleSingle from './VehicleSingle.jsx';


export const Vehicles = new Mongo.Collection("vehicles");

export default class VehicleInputWrapper extends TrackerReact(React.Component) {
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

	vehicles() {
		return Vehicles.find().fetch();
	}

	render() {
		
		return(
			<div>
				<div className="panel panel-primary">
				<div className="panel-heading">
					<h1>Add Vehicle</h1>
				</div>
				<div className="panel-body">
					<VehicleForm />
				</div>
				</div>
				
				<div className="panel panel-primary">
				<div className="panel-heading">
					<h1>Recently Added Vehicles</h1>
				</div>
				<div className="panel-body">
					<table className="table">
						<thead>
							<tr>
								<td>Item Id</td>
								<td>Item Name</td>
								<td>Item Quantity</td>
							</tr>
						</thead>
						<tbody>
						{this.vehicles().map( (vehicles) => {
							return <VehicleSingle key={vehicles._id} vehicle={vehicles} />
						})}
						</tbody>
					</table>
				</div>
				</div>
			</div>
		)
	}
}

