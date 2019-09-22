import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
// Import our component from this folder
import RadioButton from './RadioButton';

// Here we describe the stories we want to see of the Button. The component is
// pretty simple so we will just make two, one with text and one with emojis
// Simple call storiesOf and then chain .add() as many times as you wish
//
// .add() takes a name and then a function that should return what you want
// rendered in the rendering area
storiesOf('RadioButton')
	.add('with label', () => (
		<>
		<RadioButton>
			<input id="radio-button" name="group" type="radio" />
			<label htmlFor="radio-button">Blue potato</label>
		</RadioButton>
		<RadioButton>
			<input id="radio-button1" name="group" type="radio" />
			<label htmlFor="radio-button1">Purple potato</label>
		</RadioButton>
		</>
	))
