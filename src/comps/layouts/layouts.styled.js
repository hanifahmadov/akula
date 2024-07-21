/* eslint-disable */
import styled from "styled-components";
import { motion } from "framer-motion";

// APP
export const AppLayout_Container = styled.div(({ theme: {} }) => ({
	width: "100%",
	height: "100%",
}));

export const AppLayout_Content = styled.div(({ theme: {} }) => ({
	width: "100%",
	height: "100%",
}));

// PERSISTENT
export const PersistentLayout_Container = styled.div(({ theme: {} }) => ({
	width: "100%",
	height: "100%",
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

// REGISTER
export const RegisterLayout_Container = styled.div(({ theme: {} }) => ({
	width: "100%",
	height: "100%",

	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}));

export const HomeLayout_Container = styled.div(({ theme: {} }) => ({
	width: "100%",
	height: "100%",

	background: "#07151d",

	display: "flex",
	justifyContent: "center",
	alignItems: "center",

	".column": {
		width: "100%",
		height: "100%",

		margin: "0px 3px",
	},

	".right": {
		maxWidth: "23rem",
		width: "100%",
	},
}));

export const Navbar_Container = styled.div(({ theme: {} }) => ({
	maxWidth: "20rem",
	width: "100%",

	padding: "14px 5px 14px 14px",
	color: "#ffffff",

	/* LEFT CONTENT WRAPPER */
	".left_content_wrapper": {
		background: "#1a2730",
		width: "100%",
		height: "100%",

		padding: "1rem 20px 1rem 20px",
		borderRadius: "10px",

		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",

		/* this grouping is just for the code, nothing special */
		/* the logout button must be at the bottom, justifyContent: "space-between" */
		".grouping_name_links": {
			width: "100%",
		},

		/* LOGO AND NAME */
		".logo_wrapper": {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",

			".name": {
				fontSize: "3rem",
				fontWeight: "700",
			},
		},
	},
}));

export const Links_Section = styled.div(({ theme: {} }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",

	width: "100%",
	marginTop: "1.5rem",
	a: {
		textDecoration: "none",
		color: "#fff",
		fontSize: "1.5rem",
		fontWeight: "600",

		margin: "10px 0px",
		padding: "3px 17px",
		border: "1px solid #ffffff10",
		borderRadius: "20px",

		background: "#ffffff10",
		transition: "all .2s ease-in-out",

		".icon": {
			fontSize: "1.25rem",
		},

		span: {
			marginLeft: "10px",
		},

		"&:hover": {
			background: "#ffffff20",
			borderColor: "#ffffff20",
		},
	},

	button: {
		width: "100%",
		textDecoration: "none",
		color: "#fff",
		fontSize: "1.5rem",
		fontWeight: "600",

		margin: "20px 0px",
		padding: "3px 17px",
		border: "1px solid #ffffff30",
		background: "#003787",
		borderRadius: "20px",

		transition: "all .2s ease-in-out",
		"&:hover": {
			background: "#052c65",
			borderColor: "#ffffff40",
		},
	},
}));

export const Logout_Section = styled.div(({ theme: {} }) => ({
	color: "#fff",
	fontSize: "1.5rem",
	fontWeight: "600",
	textAlign: "center",

	padding: "3px 17px",
	border: "1px solid #ffffff30",
	background: "#003787",
	borderRadius: "20px",

	width: "100%",
	cursor: "pointer",

	transition: "all .2s ease-in-out",

	".icon_logout": {
		fontSize: "20px",
		position: "relative",
		right: "-10px",
	},

	"&:hover": {
		background: "#052c65",
		borderColor: "#ffffff40",
	},
}));

export const Content_Container = styled.div(({ theme: {} }) => ({
	width: "100%",
	padding: "14px 14px 14px 0px",
	color: "#ffffff",

	".content_internal_wrapper": {
		width: "100%",
		height: "100%",

		// background: "#1a273020",

		// background: "blue",

		width: "100%",
		height: "100%",

		borderRadius: "10px",
		overflow: "hidden",
	},
}));

/* eslint-disable */
// import styled from "styled-components";
// import { motion } from "framer-motion";
// export const Project_Content = styled.div(({ theme: {} }) => ({}));
