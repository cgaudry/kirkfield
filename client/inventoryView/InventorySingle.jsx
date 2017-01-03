import React, {Component} from 'react';

export default class InventorySingle extends Component {

	toggleChecked() {
		Meteor.call('toggleResolution', this.props.inventoryItem);
	}

	deleteInventoryItem() {
		Meteor.call('deleteInventoryItem', this.props.inventoryItem);
	}

	render() {
		const resolutionClass = this.props.inventoryItem.complete ? "checked" : "";
		const status = this.props.inventoryItem.complete ? <span className="completed">Completed</span> : '';

		return (
			<li className={resolutionClass}>
			<input type="checkbox"
				readOnly={true}
				checked={this.props.inventoryItem.complete}
				onClick={this.toggleChecked.bind(this)} />

				<a href={`/inventory/${this.props.inventoryItem._id}`}>
					ItemName - {this.props.inventoryItem.inventoryItemName} Quantity -  {this.props.inventoryItem.inventoryItemQuantity}
				</a>

				{status}
				<button className="btn-cancel"
					onClick={this.deleteInventoryItem.bind(this)}>
					&times; 
				</button>
			</li>
		)
	}
}