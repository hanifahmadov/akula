/* eslint-disable */
import styled from "styled-components";
import { motion } from "framer-motion";
import mountain from "../auth/shared/image/mountain.jpg";

// PERSISTENT
export const PersistentLayout_Container = styled.div(({ theme: {} }) => ({
	width: "100%",
	height: "100%",
}));

export const Loading = styled.div(({ theme: {} }) => ({
	width: "100%",
	height: "100%",

	display: "flex",
	justifyContent: "center",
	alignItems: "center",

	color: "rgba(255, 255, 255, 1)",
	fontSize: "3rem",
	fontWeight: "500",
	letterSpacing: "3px",
}));

/** REGISTER LAYOUT CONTAINER
 *
 */
export const RegisterLayout_Container = styled.div(({ theme: {} }) => ({
	width: "100%",
	height: "100%",

	display: "flex",
	justifyContent: "center",
	alignItems: "center",

	/* DESIGN MODE LATER, NOT TODAY */
	// backgroundImage: `url(${mountain})`,
	// backgroundSize: "cover",
	// backgroundRepeat: "no-repeat",
}));

/** HOME LAYOUT CONTAINER
 *	// background: "#07151d",
 */
export const MainLayout_Container = styled.div(({ theme: {} }) => ({
	width: "100%",
	height: '100svh',


	/** SO THE SCROLL, HOW IT WORKS?
	 * the body has overflow -hiddne, that makes the elements not jumpy when scrolling all the way top.
	 * and Home is holding all sub comps and home is scrollable, but left navbar is sticky and it will scroll to anywhere
	 */
	overflow: 'scroll',


	display: "flex",
	justifyContent: "space-between",
	alignItems: "flex-start",

	/** LEFT COLUMN */
	".main_left_column": {
		/**
		 * height is important!
		 */
		width: "21rem",
		height: "100vh",
		
		position: "sticky",
		top: "0",

		borderRight: ".1px solid black",

		// background: "red",
	},

	/** CENTER COLUMN */
	".main_right_column": {
		/**
		 * 	if center senction has a height then left and right section doesnt stick.
		 */
		// height:'100rem',

		flexGrow: 1,

		display: "flex",
		justifyContent: "center",
		alignItems: "center",

		background: "blue",
	},
}));



