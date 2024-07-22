/* eslint-disable */
import styled from "styled-components";

// import { motion } from "framer-motion";
// export const Project_Content = styled.div(({ theme: {} }) => ({}));

import spc from "../shared/image/mountain.jpg";

export const Account_Container = styled.div(({ theme: {} }) => ({
	height: "100%",
	width: "100%",

	display: "flex",
	flexDirection: "column",
}));

export const Logo_Section = styled.div(({ theme: {} }) => ({
	height: "12rem",
	width: "100%",

	textAlign: "center",

	position: "relative",

	backgroundImage: `url(${spc})`,
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	// backgroundPosition: "center",

	img: {
		height: "7rem",
		width: "7rem",
		borderRadius: "50%",
		position: 'relative',
		top: '60px',
		border: '10px solid #00000050'
	},
}));

export const Content_Section = styled.div(({ theme: {} }) => ({
	width: "100%",

	height: "100%",
	paddingTop: "2.5rem",

	display: "flex",
	flexDirection: "column",
	justifyContent: "space-around",
	alignItems: "center",

	".username": {
		fontSize: "2.25rem",
	},

	".emailAddress": {
		fontSize: "1.2rem",
		color: "#ffffff60",
	},

	".subscribers": {
		marginTop: "1rem",
		width: "100%",
		height: "5rem",
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",

		border: "1px solid #ffffff50",
		borderLeft: "none",
		borderRight: "none",

		// background: "red",

		".numbers": {
			textAlign: "center",
			fontSize: "1.25rem",
			color: "#ffffff",
		},

		".following": {
			textAlign: "center",
			fontWeight: "600",
			fontSize: "1rem",
			color: "#ffffff70",
			letterSpacing: "1px",
		},

		".followers": {
			textAlign: "center",
			fontWeight: "600",
			fontSize: "1.1rem",
			color: "#ffffff70",
			letterSpacing: "1px",
		},

		".middle_line": {
			height: "3.5rem",
			border: "0.1px solid #ffffff50",
		},
	},

	".myaccount": {
		width: "100%",

        textAlign: 'center',

        margin: "20px 0px",

		".myaccount_button": {
			
			color: "#fff",
			fontSize: "1.25rem",
			fontWeight: "600",
			padding: "5px 17px",
			border: "1px solid #ffffff30",
			background: "#003787",
			borderRadius: "20px",

			transition: "all .2s ease-in-out",
			"&:hover": {
				background: "#052c65",
				borderColor: "#ffffff40",
			},
		},
	},
}));
