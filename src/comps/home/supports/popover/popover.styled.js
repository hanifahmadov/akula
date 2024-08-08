/* eslint-disable */
import styled from "styled-components";
// import { motion } from "framer-motion";

// export const Project_Content = styled.div(({ theme: {} }) => ({}));
// export const Project_Content = styled(motion.div)(({ theme: {} }) => ({}));

export const Popover_Container = styled.div(({ theme: {}, $popoverOpen, $reactElement, $left, $top, $beforeLeft }) => ({
	height: "2.25rem",
	width: "8rem",

	display: $popoverOpen ? "flex" : "none",
	justifyContent: "center",
	alignItems: "center",
	background: "black",

	/** design background and opening animation, use different icons and add animation when like type clicked //TODO */

	/**
	 * 	this code makes no click on itself which means there is no way to click its child elements.
	 * 	but when we add its child element a porperty like ` pointerEvent: auto ` then only that child
	 *  element will be clickable, only that child.
	 * 	So this makes a lot of easer than to get a className of all clicked elements and check it their values are equal
	 * 	to what we expect and bla bla bla.
	 *
	 * 	So, great invent on my side
	 *
	 */
	pointerEvents: "none",

	position: "absolute",
	zIndex: "100",
	top: $top ? $top : "-45px",
	left: $left ? $left : "-45px",

	borderRadius: "3px",

	"&::before": {
		content: '""',
		position: "absolute",
		top: "100%", // Position the arrow at the bottom
		left: $beforeLeft ? $beforeLeft : "2.5rem",
		transform: "translateX(-50%)",
		borderLeft: "10px solid transparent",
		borderRight: "10px solid transparent",
		borderTop: "10px solid black", // Arrow pointing downwards
	},

	".icons": {
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		width: "100%",
		height: "100%",

		color: "#1f2f4f",
		fontSize: "1.25rem",

		div: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",

			padding: "3px 5px",
			pointerEvents: "auto",

			borderRadius: "2px",

			"&:hover": {
				background: "rgba(255, 255, 255, .25)",
			},

			/** de-activating the fontawesome comps click events
			 *  in this case, only, the div itself will be clickable and we can grab its classname
			 */
			"& > *": {
				pointerEvents: "none",
			},
		},
	},
}));
