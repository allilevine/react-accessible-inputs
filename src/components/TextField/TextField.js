import React from 'react';
import styled from 'styled-components';

const TextFieldWrapper = styled.div`
	input {
		border: 1px solid darkslategray;
		font-size: 1em;
		margin-top: .5em;
		padding: 7px;
	}

	label {
		color: darkslategray;
		display: block;
	}
`;

function TextField(props) {
	return <TextFieldWrapper {...props}>{props.children}</TextFieldWrapper>;
}

export default TextField;
