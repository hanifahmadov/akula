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

	pointerEvents: "none",

	position: "absolute",
	zIndex: "100",
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
