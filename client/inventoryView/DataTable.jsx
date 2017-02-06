import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Dimensions from 'react-dimensions'
import {Table, Column, Cell} from 'fixed-data-table';

class DataTable extends React.Component {
	
	render() {
		return (<Table	className="center-block"
						rowsCount={this.props.recent.length}
						rowHeight={50}
						headerHeight={50}
						width={this.props.containerWidth}
						maxHeight={500}
						>
						<Column
							header={<Cell>Item Id</Cell>}
							cell={props => (
								<Cell {...props}>
									{this.props.recent[props.rowIndex].inventoryItemId}
								</Cell>
								)}
							flexgrow={1}
							width={this.props.containerWidth / 3}
						/>
						<Column
							header={<Cell>Item Name</Cell>}
							cell={props => (
								<Cell {...props}>
									{this.props.recent[props.rowIndex].inventoryItemName}
								</Cell>
								)}
							flexgrow={1}
							width={this.props.containerWidth / 3}
						/>
						<Column
							header={<Cell>Item Quantity</Cell>}
							cell={props => (
								<Cell {...props}>
									{this.props.recent[props.rowIndex].inventoryItemQuantity}
								</Cell>
								)}
							flexgrow={1}
							width={this.props.containerWidth / 3}
						/>
					</Table>)
	}
}
export default Dimensions({
	getWidth: function(element) {
		console.log(element.parentElement.getBoundingClientRect());
		return element.parentElement.getBoundingClientRect().width * .8;
	},
	getHeight: function(element) {
		return window.innerHeight - 100;
	}
})(DataTable)