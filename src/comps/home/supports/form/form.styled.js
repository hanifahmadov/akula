/* eslint-disable */
import styled from "styled-components";
// import { motion } from "framer-motion";

export const Textarea_Container = styled.div(({ theme: {} }) => ({
	width: "100%",

	height: "fit-content",
	background: "white",
    color: 'black',
    borderRadius: "10px",

	".textarea": {
		width: "100%",
		height: "100%",
        maxHeight: '10rem',
		border: "none",
		overflow: "auto",
		outline: "none",
		WebkitBoxShadow: "none", // -webkit-box-shadow
		MozBoxShadow: "none", // -moz-box-shadow
		boxShadow: "none",
		resize: "none",
		padding: "12px 10px 10px 15px",

		fontSize: "1.1rem",
		borderRadius: "10px",
		background: "transparent",
		color: "black",

		"&::placeholder": {
			color: "#00000080",
			paddingLeft: "5px",
		},
		// border: "1px solid #ffffff30",
	},
}));
