import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import InventoryForm from './InventoryForm.jsx';
import InventorySingle from './InventorySingle.jsx';


Inventory = new Mongo.Collection("inventory");

export default class InventoryInputWrapper extends TrackerReact(React.Component) {
	constructor() {
		super();

		this.state = {
			subscription: {
				inventory: Meteor.subscribe("allInventory")
			}
		}
	}

	componentWillUnmount() {
		this.state.subscription.inventory.stop();
	}

	inventoryItems() {
		return Inventory.find().fetch();
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
							return <InventorySingle key={inventoryItems._id} inventoryItem={inventoryItems} />
						})}
						</tbody>
					</table>
				</div>
				</div>
			</div>
		)
	}
}

