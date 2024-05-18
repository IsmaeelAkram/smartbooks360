'use client';
import styled from 'styled-components';

export default styled.button`
	${(props) =>
		props.dark
			? `
			background-color: var(--orange);
			color: white;
			filter: drop-shadow(0px 4px 20px rgba(238, 84, 12, 0.5));
			&:hover {
				filter: drop-shadow(0px 4px 20px rgba(238, 84, 12, 1));
			}
			`
			: `
			background-color: var(--yellow);
			color: black;
				filter: drop-shadow(0px 4px 20px rgba(255, 171, 40, 0.5)); 
				&:hover {
					filter: drop-shadow(0px 4px 20px rgba(255, 171, 40, 1));
				}`}
	padding: 12px 36px;
	border-radius: 50px;
	line-height: 26px;
	outline: none;
	border: none;
	font-size: 22px;
	font-weight: 600;
	transition: all 0.12s linear;
`;
