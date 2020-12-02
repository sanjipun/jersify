import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const StyledButton = styled(Button)`
	color: ${({ pr }) => (pr === true ? 'black' : 'white')};
	background-color: ${({ pr }) => (pr === true ? '#ffeb3b' : '#1a237e')};
	padding: ${({ pr }) => (pr === true ? '20px' : '15px')};
	border-radius:0px;
	z-index:0;
	transition:all 0.5s ease-in-out;
	&:hover{
		background-color:#ffeb3b;
		color:black;
	}
`;

const StyledButtons = ({ children, variant, text, image, img, tag, onClick, active }) => {
	const [ pr, setPr ] = useState(false);

	const handleClick = () => {
		if (text && image && onClick) {
			text(tag);
			image(img);
			onClick(tag);
		}
		else {
			return null;
		}
	};
	useEffect(
		() => {
			setPr(active);
		},
		[ active ]
	);
	console.log(pr);
	return (
		<StyledButton onClick={handleClick} variant={variant} tag={tag} pr={pr} disableElevation>
			{children}
		</StyledButton>
	);
};

export default StyledButtons;
