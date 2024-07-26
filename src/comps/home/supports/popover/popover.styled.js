/* eslint-disable */
import styled from "styled-components";
// import { motion } from "framer-motion";

// export const Project_Content = styled.div(({ theme: {} }) => ({}));
// export const Project_Content = styled(motion.div)(({ theme: {} }) => ({}));

export const Popover_Container = styled.div(({ theme: {}, $popoverOpen }) => ({
	height: "2.1rem",
	width: "8rem",

	display: $popoverOpen ? "flex" : "none",
	justifyContent: "center",
	alignItems: "center",
	background: "white",

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
	zIndex: "1",
	top: "-40px",
	left: "-10px",

	borderRadius: "5px",

	"&::before": {
		content: '""',
		position: "absolute",
		top: "100%", // Position the arrow at the bottom
		left: "50%",
		transform: "translateX(-50%)",
		borderLeft: "10px solid transparent",
		borderRight: "10px solid transparent",
		borderTop: "10px solid white", // Arrow pointing downwards
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
			padding: "1px 2px",
			pointerEvents: "auto",
		},
	},
}));
