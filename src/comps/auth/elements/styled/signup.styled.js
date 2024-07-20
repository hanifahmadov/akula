/* eslint-disable */
import styled from "styled-components";
import mountain from "../../shared/image/mountain.jpg";

export const Signup_Container = styled.div(({ theme: {} }) => ({
	width: "100%",
	height: "100%",

	// background: "gray",

	display: "flex",
	justifyContent: "center",
	alignItems: "center",

	padding: "0rem 2rem 2rem 2rem",

	background: "transparent",

	".signup_section": {
		// this height is temps, change it soon
		maxHeight: "42rem",
		maxWidth: "30rem",
		width: "100%",
		height: "100%",

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

		header: {
			width: "100%",
			height: "100%",
		},
	},
}));

// export const Project_Content = styled(motion.div)(({ theme: {} }) => ({}));
// export const Project_Content = styled(motion.div)(({ theme: {} }) => ({}));
// export const Project_Content = styled(motion.div)(({ theme: {} }) => ({}));
// export const Project_Content = styled(motion.div)(({ theme: {} }) => ({}))
