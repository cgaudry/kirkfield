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
				<h1>Add Inventory Item</h1>
				<InventoryForm />
				<ul className="resolutions">
					{this.inventoryItems().map( (inventoryItems) => {
						return <InventorySingle key={inventoryItems._id} inventoryItem={inventoryItems} />
					})}
				</ul>
			</div>

		)
	}
}

