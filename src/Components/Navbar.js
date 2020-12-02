import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import styled, { keyframes } from 'styled-components';
import ListContacts from '../FileCollection/ListContact';
import Products from '../FileCollection/Products';
import { slideInRight } from 'react-animations';
import { Link } from 'react-scroll';

const LogoDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	z-index: 99;
`;

const Ul = styled.ul`
	display: grid;
	grid-template-columns: repeat(5, auto);
	grid-gap: 0;
	list-style: none;
	cursor: pointer;
	z-index: 99;
	@media (max-width: 960px) {
		display: none;
	}
`;

const LiProducts = styled.li`
	padding: 30px 15px;
	font-size: 15px;
	z-index: 99;
	&:hover {
		background-color: blue;
		color: white;
		transition: all 0.5s ease;
	}
`;

const DivWrapper = styled.div`
	overflow: hidden;
	background-color: ${({ scroll }) => (scroll === true ? 'white' : '#1a237e')};
	color: ${({ scroll }) => (scroll === true ? '#1a237e' : 'white')};
	position: fixed;
	top: 0;
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-size: 18px;
	height: 12vh;
	z-index: 999;
	transition: all 2s ease;
	@media (max-width: 960px) {
		height: 12vh;
	}
`;

const LiContact = styled.li`
	padding: 30px 10px;
	font-size: 15px;
	display: flex;
	align-items: center;
	z-index: 99;
`;

const LiP = styled.p`
	padding: 0 5px;
	z-index: 99;
`;

const MenuIcon = styled.div`
	font-size: 25px;
	cursor: pointer;
	display: none;
	z-index: 99;
	@media (max-width: 960px) {
		display: block;
		justify-content: flex-end;
	}
`;

const Slide = keyframes`
${slideInRight}
`;
const MenuItemsActive = styled.div`
	overflow: hidden;
	position: fixed;
	z-index: 99;
	top: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #1a237e;
	transition: all 1s ease-in-out;
	@media (max-width: 960px) {
		animation: 1s ${Slide};
	}
`;

const MenuItems = styled.div`
	display: none;
	z-index: 99;
	@media (max-width: 960px) {
		display: block;
		justify-content: center;
		align-items: center;
		color: white;
		list-style: none;
		text-align: center;
		cursor: pointer;
		width: 100%;
	}
`;

const Navbar = () => {
	const [ click, setClick ] = useState(false);
	const [ scroll, setScroll ] = useState(false);

	return (
		<div>
			<DivWrapper scroll={scroll}>
				<LogoDiv scroll={scroll}>
					<h1 style={{ fontSize: '3.5vw' }}>Jerseyify Nepal</h1>
				</LogoDiv>
				<div>
					<Ul>
						{Products.map((product, index) => {
							return (
								<LiProducts key={index}>
									<Link
										activeClass='active'
										to={product.link}
										spy={true}
										smooth={true}
										hashSpy={true}
										offset={50}
										duration={500}
										delay={500}
										isDynamic={true}
										ignoreCancelEvents={false}
									>
										{product.name}
									</Link>
								</LiProducts>
							);
						})}
					</Ul>
				</div>
				<div>
					<Ul>
						{ListContacts.map((contact, index) => {
							return (
								<LiContact key={index}>
									<i className={contact.icon} />
									<LiP>{contact.name}</LiP>
								</LiContact>
							);
						})}
					</Ul>
				</div>

				<MenuIcon onClick={() => setClick(!click)}>
					{click === true ? <i className='fas fa-times' /> : <i className='fas fa-bars' />}
				</MenuIcon>
			</DivWrapper>
			{click === true ? (
				<MenuItemsActive>
					<MenuItems>
						{Products.map((product, index) => {
							return <LiProducts key={index}>{product.name}</LiProducts>;
						})}
						{ListContacts.map((contact, index) => {
							return (
								<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<LiContact key={index} style={{ textAlign: 'center' }}>
										<i className={contact.icon} />
										<LiP>{contact.name}</LiP>
									</LiContact>
								</div>
							);
						})}
					</MenuItems>
				</MenuItemsActive>
			) : (
				''
			)}
			<Waypoint onEnter={() => setScroll(false)} onLeave={() => setScroll(true)} />
		</div>
	);
};

export default Navbar;
