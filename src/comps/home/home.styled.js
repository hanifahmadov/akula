/* eslint-disable */
import styled from "styled-components";
// import { motion } from "framer-motion";

// export const Project_Content = styled.div(({ theme: {} }) => ({}));
// export const Project_Content = styled(motion.div)(({ theme: {} }) => ({}));

// import spc from "./images/spc1.jpg";

export const Home_Container = styled.div(({ theme: {} }) => ({
	width: "100%",
	height: "100%",

	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
	alignItems: "center",

	// background: "red",
}));

export const Center_Section = styled.div(({ theme: {} }) => ({
	minWidth: "30rem",
	width: "100%",
	height: "100%",

	marginRight: "14px",

	// background: "#1a2730",

	borderRadius: "10px",
	// padding: "1rem 20px 1rem 20px",
}));

export const Right_Section = styled.div(({ theme: {} }) => ({
	minWidth: "18rem",
	maxWidth: "22rem",
	width: "100%",
	height: "100%",

	borderRadius: "10px",
	// padding: "1rem 20px 1rem 20px",

	overflow: "hidden",

	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "space-between",

	".account_section": {
		width: "100%",
		height: "25rem",

		background: "#1a2730",
		borderRadius: "10px",
		// overflow: "hidden",

		// backgroundImage: `url(${spc})`,
		// backgroundSize: "cover",
		// backgroundRepeat: "no-repeat",
	},

	".allusers_section": {
		width: "100%",
		height: "100%",

		marginTop: "1rem",

		background: "#1a2730",
		borderRadius: "10px",
		// padding: "1rem 20px 1rem 20px",
		overflow: "hidden",
	},
}));

export const Post_Section = styled.div(({ theme: {} }) => ({
	width: "100%",
	background: "#1a2730",

	display: "flex",
	justifyContent: "center",
	alignItems: "center",

	padding: "1rem 20px 1rem 20px",
	borderRadius: "10px",

	".top_section": {
		width: "100%",

		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",

		position: "relative",

		img: {
			height: "2.75rem",
			width: "2.75rem",
			borderRadius: "50%",
			position: "absolute",
			top: "3px",
		},

		".textArea": {
			width: "100%",
			padding: "12px",
			fontSize: '1.1rem',
			resize: "none",
			marginLeft: "3.5rem",
			borderRadius: "10px",
			background: "#07161d",
			color: "white",

			border: "none",
			overflow: "auto",
			outline: "none",
			WebkitBoxShadow: "none", // -webkit-box-shadow
			MozBoxShadow: "none", // -moz-box-shadow
			boxShadow: "none",

			"&::placeholder": {
				color: "#ffffff80",
				paddingLeft: "5px",
			},

			// overflow: "hidden",
			//
			// fontSize: "16px",
		},
	},
}));
