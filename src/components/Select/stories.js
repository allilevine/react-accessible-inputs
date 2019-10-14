import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
// Import our component from this folder
import Select from './Select';

storiesOf('Select')
	.add('with label', () => (
		<Select>
			<label htmlFor="select">Select the type of potato</label>
			<select id="select">
				<option>Please select one</option>
				<option>Russet or Idaho</option>
				<option>Red</option>
				<option>Yukon Gold</option>
				<option>Purple</option>
			</select>
		</Select>
	))
