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
			recent: this.recent()
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
						rowsCount={this.state.recent.count()}
						rowHeight={50}
						headerHeight={50}
						width={800}
						height={500}>
						<Column
							header={<Cell>Item Id</Cell>}
							cell={props => (
								<Cell {...props}>
									{this.state.recent.fetch().inventoryItemId}
								</Cell>
								)}
							width={200}
						/>
						<Column
							header={<Cell>Item Name</Cell>}
							cell={<Cell>Name</Cell>}
							width={200}
						/>
						<Column
							header={<Cell>Item Quantity</Cell>}
							cell={<Cell>Qty</Cell>}
							width={200}
						/>
						<tbody>
						{this.inventoryItems().map( (inventoryItems) => {
							return <InventorySingle key={inventoryItems._id} inventoryItem={inventoryItems} />
						})}
						</tbody>
					</Table>
				</div>
				</div>
			</div>
		)
	}
}

