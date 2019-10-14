import React from 'react';
import styled from 'styled-components';

const TextAreaWrapper = styled.div`
	textarea {
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

function TextArea(props) {
	return <TextAreaWrapper {...props}>{props.children}</TextAreaWrapper>;
}

export default TextArea;
