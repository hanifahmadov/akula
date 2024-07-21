/* eslint-disable */
import styled from "styled-components";
import { motion } from "framer-motion";

export const Main_Container = styled.div(({ theme: {} }) => ({
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
		maxWidth: "21rem",
		width: "100%",
	},
}));

export const Left_Container = styled.div(({ theme: {} }) => ({
	maxWidth: "19rem",
	width: "100%",

	padding: "1rem 10px",

	color: "#ffffff",

	".left_content_wrapper": {
		background: "#1a2730",
		width: "100%",
		height: "100%",

		padding: "1rem 10px 2rem 10px",
		borderRadius: "10px",

		/* LOGO AND NAME */
		".logo_wrapper": {
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",

			// borderBottom: '1px solid #fff',

			img: {
				height: "4rem",
				width: "4rem",
				background: "white",
				borderRadius: "5px",
				padding: "2px",
			},

			".name": {
				fontSize: "3rem",
				fontWeight: "700",
			},
		},

		/* LINKS */
		".left_navlinks_wrapper": {
			width: "100%",
			marginTop: "2rem",

			paddingLeft: "2rem",

			p: {
				background: "#ffffff10",
				backdropFilter: "blur(10px)",
				border: "1px solid  transparent",
				display: "inline-block",

				padding: "3px 15px",
				borderRadius: "20px",

				margin: "10px 0px",

				transition: "all .2s ease-in-out",
				cursor: "pointer !important",

				"&:hover": {
					background: "#ffffff20",
					borderColor: "#ffffff50",
				},

				".icon": {
					fontSize: "1.3rem",
				},

				a: {
					textDecoration: "none",
					color: "white",
					fontSize: "1.5rem",
					marginLeft: "15px",
				},
			},
		},
	},
}));
