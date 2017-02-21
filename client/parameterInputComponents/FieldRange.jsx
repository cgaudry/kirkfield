import React, {Component} from 'react';

export default class FormFieldRange extends Component {
	render() {
		return (
			<div>
					Minimum
					<input 
						id="minValue"
						type="number" 
						ref={(input) => {minValue = input;}}
						defaultValue='0'
					/>
					-
					<input 
						id="maxValue"
						type="number" 
						ref={(input) => {maxValue = input;}}
						defaultValue='10000'
					/>
					Maximum
				</div>
				)
			}				

}