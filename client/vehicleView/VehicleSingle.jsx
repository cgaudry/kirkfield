import React, {Component} from 'react';

export default class VehicleSingle extends Component {

	deleteInventoryItem() {
		Meteor.call('deleteVehicle', this.props.vehicle);
	}

	render() {
		return (
			<tr>
				<td>
					<a href={`/vehicles/${this.props.vehicle._id}`}>{this.props.vehicle.vehicleId}</a>
				</td>
				<td>
					{this.props.vehicle.vehicleName} 
				</td>
				<td>
					{this.props.vehicle.vehicleMake}
				</td>
				<td>
					<div className="btn-group">
					<button className="btn btn-warning">
						<span className="glyphicon glyphicon-pencil"></span> Edit
					</button>

					<button className="btn btn-danger"
						onClick={this.deleteVehicle.bind(this)}>
						<span className="glyphicon glyphicon-trash"></span> Delete
					</button>
					</div>
				</td>
			</tr>
		)
	}
}