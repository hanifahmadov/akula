/* eslint-disable */
import styled from "styled-components";
import { motion } from "framer-motion";
import mountain from "../auth/shared/image/mountain.jpg";

// PERSISTENT
export const PersistentLayout_Container = styled.div(({ theme: {} }) => ({
	width: "100%",
	height: "100%",

	display: "flex",
	justifyContent: "center",
	alignItems: "center",
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
export const MainLayout_Container = styled.div(
	({
		theme: {
			device: { mobile, tablet },
		},
	}) => ({
		width: "100%",
		maxWidth: "100rem",
		height: "100svh",

		/** SO THE SCROLL, HOW IT WORKS?
		 * the body has overflow -hiddne, that makes the elements not jumpy when scrolling all the way top.
		 * and Home is holding all sub comps and home is scrollable, but left navbar is sticky and it will scroll to anywhere
		 */
		overflow: "scroll",

		display: "flex",
		justifyContent: "space-between",
		alignItems: "flex-start",

		/** LEFT COLUMN */
		".main_left_column": {
			/**
			 * height is important!
			 * left column which holds the width 21rem but when viewport squeeze it, it will shrink to down
			 * but, the element inside it Navbar elements (top row and footer) minwith is minWidth: "148px",
			 * which it can not go down under 148.
			 *
			 * add later over here for the maxWidth or add the whole project root or body to not to grow to extra
			 */
			flexGrow: 1,
			maxWidth: tablet ? "fit-content" : "21rem",
			height: "100vh",

			position: "sticky",
			top: "0",

			padding: "20px 10px",
			borderRight: ".1px solid black",

			...(tablet && {
				padding: "20px 5px",
			}),

			// background: "red",
			...(mobile && {
				borderRight: "none",
				background: "rgba(158, 197, 254, 0.1)",
				padding: "10px 2px",
			}),
		},

		/** MANIN RIGHT COLUM
		 *
		 * THIS COLUM RENDERS OUTLETS
		 * OUTLETS WRAPPER
		 */
		".main_right_column": {
			/**
			 * 	if center senction has a height then left and right section doesnt stick.
			 */
			// height:'100rem',

			flexGrow: 3,
			/**
			 *  this is must be center center, when we add a text or in the middle section of the outlets,
			 * 	it pushes the right column to the its minimum pxs
			 *
			 * 	i am gonna add a container to the middle section and will give it a fixed width so, all
			 * 	content will be inside it and cants overflow that container, in that case that container needs to be
			 * 	in the middle of middle section so that there is gonna be spaces aroun it.
			 *
			 * center center is a must.
			 *
			 */
			display: "flex",
			justifyContent: "center",
			alignItems: "center",

			// background: "blue",

			padding: "20px 10px",

			...(tablet && {
				padding: "20px 5px",
			}),

			// background: "red",
			...(mobile && {
				borderRight: "none",
				background: "rgba(158, 197, 254, 0.1)",
				padding: "10px 2px",
			}),
		},
	})
);
