import React from 'react';
import styled from 'styled-components';
import selectArrow from './assets/select-arrow.svg';

const SelectWrapper = styled.div`
	select {
		background-image: url(${selectArrow});
		background-position: right .5em top 55%;
		background-repeat: no-repeat;
    background-size: .80em auto;
		border: 1px solid darkslategray;
		font-size: 1em;
		margin-top: .5em;
		padding: 7px 30px 7px 7px;
		-moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;

		&::-ms-expand {
    	display: none;
		}

		option {
			font-weight: normal;
		}
	}

	label {
		color: darkslategray;
		display: block;
	}
`;

function Select(props) {
	return <SelectWrapper {...props}>{props.children}</SelectWrapper>;
}

export default Select;
