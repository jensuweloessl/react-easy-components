import React from 'react';
import styled from 'styled-components';

const Style = styled.button`
	background-color: #fff;
    border-color: #dbdbdb;
    border-width: ${props => props.theme.borderWidth};
    border-radius: 4px;
    color: #363636;
    cursor: pointer;
    justify-content: center;
    padding: calc(.375em - ${props => props.theme.borderWidth}) .75em;
    text-align: center;
    white-space: nowrap;
    align-items: center;
    appearance: none;
    box-shadow: none;
    display: inline-flex;
    font-size: ${props => props.theme.fontSize};
    height: ${props => 2 * props.theme.fontSize};
    
    
    :hover {
		border-color: #b5b5b5;
		color: #363636;
	}
`;

/**
 * @class Button
 * a simple button component
 */
export class Button extends React.PureComponent {
	render(){
		return (
			<Style>
				{this.props.children}
			</Style>
		)
	}
}