import React from 'react';
import styled from 'styled-components';

const RadioButtonWrapper = styled.div`
	input {
		opacity: 0;

		& + label::before {
			background-clip: content-box;
      background-color: transparent;
			border: 1px solid darkslategray;
			border-radius: 100%;
			content: "";
			cursor: pointer;
			display: block;
			height: 16px;
			width: 16px;
			margin-right: 10px;
			padding: 3px;
      transition: all 0.2s ease;
		}

		&:checked + label::before {
			background-color: darkslategray;
		}

		&:focus + label::before {
      box-shadow: 0 0 5px dodgerblue;
    }
	}

	label {
    align-items: center;
    display: flex;
		color: darkslategray;
	}
`;

function RadioButton(props) {
	return <RadioButtonWrapper {...props}>{props.children}</RadioButtonWrapper>;
}

export default RadioButton;
