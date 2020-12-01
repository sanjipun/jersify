import { Button, Grid } from '@material-ui/core';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import img1 from '../Assets/home.png';
import StyledButtons from '../Components/StyledButton';
import ChelseaKits from '../FileCollection/ChelseaKits';

const DivWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 15vh;
	height: 100vh;
	width: 90%;
	margin: auto;
`;
const GridContainer = styled(Grid)`
display:flex;
justify-content:center;
align-items:center;
`;

const GridItem = styled(Grid)`
display:flex;
justify-content:center;	
align-items:center;
@media (max-width:960px){
	align-items:flex-end;	
}
`;
const H2 = styled.h2`
	font-size: 3vw;
	color: orange;
	> h3 {
		color: orange;
	}
	@media (max-width: 1280px) {
		margin-top: 200px;
		font-size: 4vw;
		z-index: 999;
	}
	@media (max-width: 960px) {
		margin-top: 600px;
		font-size: 4vw;
		z-index: 999;
	}
	@media (max-width: 720px) {
		font-size: 4vw;
	}
	@media (max-width: 540px) {
		font-size: 6vw;
		margin-top: 690px;
	}
	@media (max-width: 368px) {
		font-size: 6vw;
		margin-top: 700px;
	}
`;
const ParentButton = styled(Button)`
border-radius:0px;
color:white;
background-color:#1a237e;
padding:15px;
margin-top:0px 	10px;
transition:all 0.5s ease-in-out;
	&:hover{
		background-color:#ffeb3b;
		color:black;
	}	
`;
const IMG = styled(motion.img)`
	max-height: 612px;
	margin-top: 80px;
	@media (max-width: 1280px) {
		max-height: 612px;
		margin-top: 350px;
	}
	@media (max-width: 960px) {
		max-height: 580px;
		margin-top: 0px;
	}
	@media (max-width: 960px) {
		max-height: 550px;
	}
	@media (max-width: 720px) {
		font-size: 22px;
	}
	@media (max-width: 540px) {
		font-size: 16px;
	}
`;

const H3 = styled.h3`
	@media (max-width: 1280px) {
		font-size: 4vw;
	}
	@media (max-width: 960px) {
		font-size: 4vw;
	}
	@media (max-width: 720px) {
		font-size: 4vw;
	}
	@media (max-width: 540px) {
		font-size: 5vw;
	}
	@media (max-width: 368px) {
		font-size: 5vw;
	}
`;

const LandingPage = ({ history }) => {
	const [ selectedImg, setSelectedImg ] = useState(img1);
	const [ selectedText, setSelectedText ] = useState('Home');
	const [ active, setActive ] = useState('');
	const text = (txt) => {
		setSelectedText(txt);
	};
	const image = (img) => {
		setSelectedImg(img);
	};
	return (
		<DivWrapper>
			<GridContainer container>
				<GridItem item xs={8} sm={6} md={4} lg={3} style={{ display: 'block' }}>
					<H2>Chelsea {selectedText} Kit 20/21</H2>
					<H3>Price: Rs. 1500</H3>
					<ParentButton onClick={(e) => history.push('/')} style={{ marginRight: 20 }}>
						BUY NOW
					</ParentButton>
					<ParentButton>ADD TO CART</ParentButton>
				</GridItem>
				<GridItem item xs={12} sm={10} md={8} lg={5}>
					<IMG src={selectedImg} alt={selectedText} />
				</GridItem>
				<GridItem item xs={8} sm={6} md={4} lg={4} style={{ display: 'block' }}>
					<div className='kits'>
						{ChelseaKits.map((kit, index) => {
							return (
								<StyledButtons
									active={active === kit.tag ? true : false}
									onClick={(tag) => setActive(tag)}
									image={image}
									text={text}
									img={kit.img}
									tag={kit.tag}
									key={index}
								>
									{kit.tag}
								</StyledButtons>
							);
						})}
					</div>
					<div
						className='other-Items'
						style={{ display: 'flex', marginTop: '10vh', justifyContent: 'center' }}
					>
						<ParentButton>
							<i className='fas fa-angle-up' />
						</ParentButton>
						<ParentButton>
							<i className='fas fa-angle-down' />
						</ParentButton>
					</div>
				</GridItem>
			</GridContainer>
		</DivWrapper>
	);
};

export default LandingPage;
