/* eslint-disable */
import styled from "styled-components";

// import { motion } from "framer-motion";
// export const Project_Content = styled.div(({ theme: {} }) => ({}));

import spc from "../shared/image/mountain.jpg";

export const Account_Container = styled.div(({ theme: {} }) => ({
	height: "100%",
	width: "200px",

	display: "flex",
	flexDirection: "column",

	borderRadius: "3px",
	overflow: "hidden",

	// background: 'black'
}));

export const Logo_Section = styled.div(({ theme: {} }) => ({
	height: "7rem",
	width: "100%",

	textAlign: "center",

	backgroundImage: `url(${spc})`,
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",

	img: {
		height: "6.5rem",
		width: "6.5rem",
		borderRadius: "50%",
		position: "relative",
		top: "45px",
		border: "7px solid rgba(0, 0, 0, .25)",
	},
}));

export const Content_Section = styled.div(({ theme: {} }) => ({
	width: "100%",

	height: "100%",
	paddingTop: "2.25rem",

	display: "flex",
	flexDirection: "column",
	justifyContent: "space-around",
	alignItems: "center",

	background: "rgba(0, 0, 0, .05)",

	".username": {
		fontSize: "2.25rem",
		fontWeight: "500",
	},

	".emailAddress": {
		fontSize: "1rem",
		color: "#00000090",
		lineHeight: "10px",
	},

	".subscribers": {
		marginTop: "1rem",
		width: "100%",
		height: "4rem",
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",

		border: "0.1px solid #000",
		borderLeft: "none",
		borderRight: "none",

		// background: "red",

		".numbers": {
			textAlign: "center",
			fontSize: "1rem",
			color: "#000",
		},

		".following": {
			textAlign: "center",
			fontWeight: "600",
			fontSize: "1rem",
			color: "#000",
			letterSpacing: ".25px",
		},

		".followers": {
			textAlign: "center",
			fontWeight: "600",
			fontSize: "1rem",
			color: "#000",
			letterSpacing: ".25px",
		},

		".middle_line": {
			height: "3.5rem",
			border: "0.05px solid #000",
		},
	},

	".settings_block": {
		width: "146px",

		textAlign: "center",
		margin: "20px 0px",

		".settings_button": {
			width: '100%',
			
			color: "#fff",
			// background: "#052c65",
			background: "#000",
			textAlign: "center",
			fontSize: "1.1rem",
			fontWeight: "600",

			padding: "2px",
			borderRadius: "2px",
			letterSpacing: ".25px",

			cursor: "pointer",
			transition: "all .1s ease-in-out",

			"&:hover": {
				// background: "#000",
			},
		},
	},
}));
