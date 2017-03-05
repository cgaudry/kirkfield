import React, {Component} from 'react';

export default class FormFieldRange extends Component {

	constructor(props) {
		super(props);
		this.handleMinValueChange = this.handleMinValueChange.bind(this);
		this.handleMaxValueChange = this.handleMaxValueChange.bind(this);
	}



	handleMinValueChange(event) {
		this.props.onMinValueChange(event.target.value);
	}

	handleMaxValueChange(event) {
		this.props.onMaxValueChange(event.target.value);
	}

	render() {
		return (
			<div>
					Minimum
					<input 
						id="minValue"
						type="number" 
						ref="minValue"
						defaultValue='0'
						onChange={this.handleMinValueChange}/>
					-
					<input 
						id="maxValue"
						type="number" 
						ref="maxValue"
						defaultValue='10000'
						onChange={this.handleMaxValueChange}/>
					Maximum
				</div>
				)
		/*return (
			<div>
					Minimum
					<input 
						id="minValue"
						type="number" 
						ref={(input) => {minValue = input;}}
						defaultValue='0'
						onChange={this.handleMinValueChange}/>
					-
					<input 
						id="maxValue"
						type="number" 
						ref={(input) => {maxValue = input;}}
						defaultValue='10000'
						onChange={this.handleMaxValueChange}/>
					Maximum
				</div>
				)*/
			}				

}