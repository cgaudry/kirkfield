import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import VehicleForm from './InventoryForm.jsx';
import VehicleSingle from './InventorySingle.jsx';


Vehicles = new Mongo.Collection("vehicles");

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

	inventoryItems() {
		return Vehicles.find().fetch();
	}

	

	render() {
		
		return(
			<div>
				<div className="panel panel-primary">
				<div className="panel-heading">
					<h1>Add Inventory Item</h1>
				</div>
				<div className="panel-body">
					<InventoryForm />
				</div>
				</div>
				
				<div className="panel panel-primary">
				<div className="panel-heading">
					<h1>Recently Added Inventory</h1>
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
						{this.inventoryItems().map( (inventoryItems) => {
							return <VehicleSingle key={inventoryItems._id} inventoryItem={inventoryItems} />
						})}
						</tbody>
					</table>
				</div>
				</div>
			</div>
		)
	}
}

