import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class InventoryDetail extends TrackerReact(Component) {

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

	inventory() {
		return Inventory.findOne(this.props.id);
	}

	render() {
		let item = this.inventory();

		if(!item) {
			return(<div>Loading...</div>)
		}
		return(
			<div>
				<h1>Item Details</h1>
				<h2>{item.inventoryItemName}</h2>
			</div>
			)
	}
}
