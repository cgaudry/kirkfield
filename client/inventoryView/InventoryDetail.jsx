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
			<div className="panel panel-primary">
				<div className="panel-heading">
					<h1>Item Details: {item.inventoryItemName}</h1>
				</div>
				<div className="panel-body">
					<ul className="list-group">
						<li className="list-group-item">
							Item Id: {item.inventoryItemId}
						</li>
						<li className="list-group-item">
							Item Quantity: {item.inventoryItemQuantity}
						</li>
					</ul>
				</div>
			</div>
			)
	}
}
