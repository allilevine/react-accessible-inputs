import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
// Import our component from this folder
import Checkbox from './Checkbox';

storiesOf('Checkbox')
	.add('with label', () => (
		<Checkbox>
			<input id="checkbox" type="checkbox" />
			<label htmlFor="checkbox">Red potato</label>
		</Checkbox>
	))
