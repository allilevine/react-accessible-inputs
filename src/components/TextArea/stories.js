import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
// Import our component from this folder
import TextArea from './TextArea';

storiesOf('TextArea')
	.add('with label', () => (
		<TextArea>
			<label htmlFor="text-area">Potato Description</label>
			<textarea id="text-area" placeholder="Describe your potato here" />
		</TextArea>
	))
