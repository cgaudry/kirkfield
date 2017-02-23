import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Dimensions from 'react-dimensions'
import {Table, Column, Cell} from 'fixed-data-table';

class DataTable extends React.Component {
	
	render() {
		return (<Table	
						rowsCount={this.props.data.length}
						rowHeight={this.props.rowHeight}
						headerHeight={this.props.rowHeight}
						width={this.props.containerWidth}
						maxHeight={this.props.rowHeight * 10}
						>
						{this.props.columns.map( (col) => {
							
							return <Column
									key={col}
									header={<Cell>{this.props.columnNames[this.props.columns.indexOf(col)]}</Cell>}
									cell={props => (
									<Cell {...props}>
										{this.props.data[props.rowIndex][col]}
									</Cell>
									)}
								flexgrow={1}
								width={this.props.containerWidth / this.props.columns.length}/>
							}
						)}
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