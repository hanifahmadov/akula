/* eslint-disable */
import styled from "styled-components";
import { motion } from "framer-motion";
import mountain from "../../shared/image/mountain.jpg";

// APP
export const Signin_Container = styled.div(({ theme: {} }) => ({
	width: "100%",
	height: "100%",

	// background: "gray",

	display: "flex",
	justifyContent: "center",
	alignItems: "center",

	padding: "2rem",

	".signin_section": {
		// this height is temps, change it soon
		maxHeight: "42rem",
		maxWidth: "30rem",
		width: "100%",
		height: "100%",
		border: "1px solid black",

		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",

		borderRadius: "8px",
		overflow: "hidden",
		boxShadow: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",

		backgroundImage: `url(${mountain})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",

		/** mixBlendMode is applying whole element
		 * blends the text color also, aplly it before or after elements, not the div itself
		 */
		// mixBlendMode:'multiply',

		header: {
			width: "100%",

			h3: {
				width: "100%",
				textAlign: "center",
				fontSize: "7rem",
				padding: "1rem",
				fontWeight: 700,
				color: "white",
				opacity: ".4",
			},
		},
	},
}));

export const Form = styled.form(({ theme: {} }) => ({
	width: "100%",

	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",

	padding: "15px 4rem 5px 4rem",

	background: "rgba(255, 255, 255, .05)",
	backdropFilter: "blur(20px)",

	button: {
		width: "100%",

		padding: "12px",
		paddingLeft: "15px",
		marginTop: "20px",

		borderRadius: "5px",
		letterSpacing: "1px",

		fontSize: "1.1rem",
		fontWeight: 600,
		cursor: "pointer",
		border: "none",
		outline: "none",

		color: "rgba(255, 255, 255, 1)",
		background: "rgb(0 85 152)",
		transition: "background 0.2s ease-in-out",

		"&:hover": {
			background: "rgb(1 62 110)",
		},

		"&:disabled, &[disabled]": {
			opacity: 0.5,
			background: "rgba(255, 255, 255, 0.2)",
			pointerEvents: "none",
			cursor: "not-allowed",
		},
	},

	footer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",

		fontSize: ".9rem",
		marginTop: "2rem",
		fontWeight: 600,

		color: "rgba(255, 255, 255, .9)",

		".link": {
			cursor: "pointer",
			fontSize: ".9rem",
			fontWeight: 800,
			marginLeft: "10px",
			padding: "4px 6px",
			color: "white",

			background: "rgba(255, 255, 255, .2)",
			borderRadius: "5px",

			"&:hover": {
				background: "rgba(255, 255, 255, .3)",
			},
		},
	},
}));

// export const Project_Content = styled(motion.div)(({ theme: {} }) => ({}));
// export const Project_Content = styled(motion.div)(({ theme: {} }) => ({}));
// export const Project_Content = styled(motion.div)(({ theme: {} }) => ({}));
// export const Project_Content = styled(motion.div)(({ theme: {} }) => ({}));
// export const Project_Content = styled(motion.div)(({ theme: {} }) => ({}))
