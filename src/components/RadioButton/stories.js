import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
// Import our component from this folder
import RadioButton from './RadioButton';
import TextField from '../TextField/TextField';

storiesOf('RadioButton')
	.add('with label', () => (
		<>
			<RadioButton>
				<input id="radio-button-blue" name="group" type="radio" />
				<label htmlFor="radio-button-blue">Blue potato</label>
			</RadioButton>
			<RadioButton>
				<input id="radio-button-purple" name="group" type="radio" />
				<label htmlFor="radio-button-purple">Purple potato</label>
			</RadioButton>
		</>
	))
	.add('with text input', () => (
		<>
			<RadioButton>
				<input id="radio-button-other" name="text-group" type="radio" />
				<label htmlFor="radio-button-other">Other potato</label>
			</RadioButton>
			<TextField>
				<input id="other" name="other" placeholder="Tell us more" type="text" />
			</TextField>
		</>
	))
