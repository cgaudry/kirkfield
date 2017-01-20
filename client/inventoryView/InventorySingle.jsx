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
			<tr>
				<td>
					<a href={`/inventory/${this.props.inventoryItem._id}`}>{this.props.inventoryItem.inventoryItemId}</a>
				</td>
				<td>
					{this.props.inventoryItem.inventoryItemName} 
				</td>
				<td>
					{this.props.inventoryItem.inventoryItemQuantity}
				</td>
				<td>
					<div className="btn-group">
					<button className="btn btn-warning">
						<span className="glyphicon glyphicon-pencil"></span> Edit
					</button>

					<button className="btn btn-danger"
						onClick={this.deleteInventoryItem.bind(this)}>
						<span className="glyphicon glyphicon-trash"></span> Delete
					</button>
					</div>
				</td>
			</tr>
		)
	}
}