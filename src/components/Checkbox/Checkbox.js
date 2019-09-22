import React from 'react';
import styled from 'styled-components';

const CheckboxWrapper = styled.div`
	input {
		opacity: 0;

		& + label::before {
			background-color: transparent;
			border: 1px solid darkslategray;
			content: "";
			cursor: pointer;
			display: block;
			height: 16px;
			width: 16px;
			margin-right: 10px;
		}

		&:checked + label::before {
			background-color: darkslategray;
		}

		&:focus + label::before {
      outline: dodgerblue auto 5px;
    }
	}

	label {
    align-items: center;
    display: flex;
		color: darkslategray;
	}
`;

function Checkbox(props) {
	return <CheckboxWrapper {...props}>{props.children}</CheckboxWrapper>;
}

export default Checkbox;
