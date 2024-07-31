/* eslint-disable */
import styled from "styled-components";
// import { motion } from "framer-motion";

export const Textarea_Container = styled.div(({ theme: {}, $fontSize, $padding, $maxHeight, $borderRadius }) => ({
	width: "100%",
	height: "fit-content",
	background: "white",

	display: "flex",
	flexDirection: "column",

	overflow: "hidden",

	padding: "10px 2px",

	borderRadius: $borderRadius ? $borderRadius : "10px",

	".textarea": {
		width: "100%",
		maxHeight: $maxHeight ? $maxHeight : "8rem",
		border: "none",
		overflow: "auto",
		outline: "none",
		WebkitBoxShadow: "none", // -webkit-box-shadow
		MozBoxShadow: "none", // -moz-box-shadow
		boxShadow: "none",
		resize: "none",
		padding: $padding ? $padding : "0px 15px",
		fontSize: $fontSize ? $fontSize : "1.1rem",
		borderRadius: $borderRadius ? $borderRadius : "10px",
		background: "transparent",
		color: "black",

		"&::placeholder": {
			color: "rgba(0, 0, 0, .25)",
			paddingLeft: "5px",
		},
		// border: "1px solid #ffffff30",
	},

	".addComment_icons": {
		".addComment_image_icon": {
			display: "inline-block",
			marginLeft: "15px",
			margin: "2px 15px",
		},
	},
}));

export const Image_Preview_Container = styled.div(({ theme: {} }) => ({
	margin: "2rem .5rem .5rem .5rem",
	alignSelf: "flex-start",
	border: "1px solid #ffffff30",
	borderRadius: "10px",

	position: "relative",

	".selected_image": {
		height: "15rem",
		width: "15rem",
		borderRadius: "10px",
	},

	".faCircleXmark": {
		display: "block",
		lineHeight: "0px",
		textAlign: "center",
		overflow: "hidden",
		position: "absolute",
		top: "-7px",
		right: "-7px",
		fontSize: "1.4rem",
		cursor: "pointer",
		background: "white",
		color: "red",
		borderRadius: "50%",
		border: "1px solid white",
	},
}));

export const Media_Container = styled.div(({ theme: {} }) => ({
	display: "flex",
	justifyContent: "space-between",

	width: "120px",

	".select_image, .select_video, .select_poll ": {
		background: "rgba(0, 0, 0, 0.1)",
		height: "28px",
		width: "28px",

		borderRadius: "3px",

		label: {
			height: "100%",
			width: "100%",

			display: "flex",
			alignItems: "center",
			justifyContent: "center",

			fontSize: "13px",
			cursor: "pointer",
		},
	},

	".select_video": {
		"& > *": {
			pointerEvents: "none",
			color: "rgba(0, 0, 0, 0.2)",
		},
	},

	".select_poll": {
		"& > *": {
			pointerEvents: "none",
			color: "rgba(0, 0, 0, 0.2)",
		},
	},
}));
