import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
// Import our component from this folder
import TextField from './TextField';

storiesOf('TextField')
	.add('with label', () => (
		<TextField>
			<label htmlFor="text-input">Potato Name</label>
			<input id="text-input" placeholder="Green Potato" type="text" />
		</TextField>
	))
	.add('with email input', () => (
		<TextField>
			<label htmlFor="text-input">Potato Email</label>
			<input id="text-input" placeholder="potato@potato.com" type="email" />
		</TextField>
	))
	.add('with URL input', () => (
		<TextField>
			<label htmlFor="text-input">Potato URL</label>
			<input id="text-input" placeholder="https://potato" type="url" />
		</TextField>
	))
