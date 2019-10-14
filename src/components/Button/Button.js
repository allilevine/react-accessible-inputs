import React from 'react';
// Styled components 💅 is library that allows you create components easily and
// style them, css-in-js style. It's totally optional, but I prefer to use it
// to build things quickly and have them look great every step of the way.
import styled from 'styled-components';

// Style components take CSS in a template string. Even Sass functions with work!
// Each element is a property of styled, like h3, p, div, etc...
const ButtonWrapper = styled.div`
	input {
		border-radius: 8px;
		color: white;
		background: darkslategray;
		border: 1px solid darkslategray;
		cursor: pointer;
		font-size: 1em;
		padding: 8px 15px;
		outline: none;
		transition: all 0.2s ease;

		&:focus {
      box-shadow: 0 0 10px dodgerblue;
    }

		&:hover {
			background: white;
			color: darkslategray;
		}
	}
`;

// Components are functions, and they must start with a capital letter
function Button(props) {
	// {...props} uses the the ES6 spread operator to send any props you may pass
	// along without changing any of the contents. This is basically just creating
	// a copy to pass along
	return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}

// This export will be picked up in ./index.js
export default Button;
