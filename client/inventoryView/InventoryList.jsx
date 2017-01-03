import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import InventorySingle from './InventorySingle.jsx';


export default class InventoryList extends TrackerReact(Component) {

	constructor() {
		super();

		this.state = {
			subscription: {
				inventory: Meteor.subscribe("queryInventory", Session.get('query'))
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
			<ul className="resolutions">
				{this.inventoryItems().map( (inventoryItems) => {
					return <InventorySingle key={inventoryItems._id} inventoryItem={inventoryItems} />
				})}
			</ul>
		)
}
}