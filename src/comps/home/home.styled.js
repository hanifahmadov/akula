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
	width: "100%",
	height: "100%",

	marginRight: "14px",

	background: "#1a2730",

	borderRadius: "10px",
	padding: "1rem 20px 1rem 20px",
}));

export const Right_Section = styled.div(({ theme: {} }) => ({
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
		height: "100%",

		background: "#1a2730",
		borderRadius: "10px",
		overflow: "hidden",

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
