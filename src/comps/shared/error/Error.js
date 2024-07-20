/* eslint-disable */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ErrorContainer } from "./error.styled";

//: images
import exlink from "../logos/external/ext2.png";
import { AnimatedFlasher } from "../animate/animated.styled";

export const Error = () => {
	return (
		<ErrorContainer>
			<div className='error-content-container'>
				<div className='error-content'>
					<h1>404</h1>

					<h5>
						Page not found
						<span className='animate-flicker sorry-face'>☹︎</span>
					</h5>

					<p>The URL is not valid on this server.</p>

					<p>
						Please use linke below for navigating		
						<br /> to the home page.
					</p>

					<AnimatedFlasher
						className='error-img'
						timer='1'
						times='10'
						delay='0'
					>
						<span className='animate-flicker'>
							{/* <img src='https://icongr.am/material/link-variant.svg?size=20&color=ffffff' /> */}
							❖
						</span>
						<NavLink to='/welcome'>Login.</NavLink>
					</AnimatedFlasher>
				</div>
			</div>
		</ErrorContainer>
	);
};
