import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import {Table, Column, Cell} from 'fixed-data-table';
import InventoryForm from './InventoryForm.jsx';
import InventorySingle from './InventorySingle.jsx';


Inventory = new Mongo.Collection("inventory");

export default class InventoryInputWrapper extends TrackerReact(React.Component) {
	constructor() {
		super();

		this.state = {
			subscription: {
				inventory: Meteor.subscribe("allInventory")
			},
		};
	}

	componentWillUnmount() {
		this.state.subscription.inventory.stop();
	}

	inventoryItems() {
		return Inventory.find().fetch();
	}

	recent() {
		return Inventory.find();
	}
	
	render() {
		this.state.recent = this.inventoryItems();
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
					<Table
						rowsCount={this.state.recent.length}
						rowHeight={50}
						headerHeight={50}
						width={800}
						height={500}>
						<Column
							header={<Cell>Item Id</Cell>}
							cell={props => (
								<Cell {...props}>
									{this.state.recent[props.rowIndex].inventoryItemId}
								</Cell>
								)}
							width={200}
						/>
						<Column
							header={<Cell>Item Name</Cell>}
							cell={props => (
								<Cell {...props}>
									{this.state.recent[props.rowIndex].inventoryItemName}
								</Cell>
								)}
							width={200}
						/>
						<Column
							header={<Cell>Item Quantity</Cell>}
							cell={props => (
								<Cell {...props}>
									{this.state.recent[props.rowIndex].inventoryItemQuantity}
								</Cell>
								)}
							width={200}
						/>
					</Table>
				</div>
				</div>
			</div>
		)
	}
}

