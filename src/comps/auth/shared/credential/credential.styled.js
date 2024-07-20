/* eslint-disable */
import styled from "styled-components";
import { motion } from "framer-motion";

export const Credential_Container = styled.div(({ theme: {} }) => ({
	width: "100%",

	input: {
		width: "100%",

		fontSize: "1rem",
		letterSpacing: '.25px',
		fontWeight: 500,

		padding: "12px",
		paddingLeft: "15px",
		margin: "10px 0px",

		border: "none",
		borderLeft: "4px solid rgb(0 85 152)",
		borderRight: "4px solid rgb(0 85 152)",
		borderRadius: "5px",

		boxShadow: "-12px -8px 40px 0px rgba(170,208,255,0.29) inset",
		background: "transparent",

		outline: "none",

		caretColor: "white",
		color: "rgba(255, 255, 255, 0.9)",

		// borderTopLeftRadius: "0px",
		// borderTopRightRadius: "0px",

		"&::placeholder": {
			color: "rgba(255, 255, 255, 0.3)",
			fontSize: "0.9rem",
			paddingLeft: "5px",
			letterSpacing: '.5px',
		},
	},
}));

// export const Project_Content = styled(motion.div)(({ theme: {} }) => ({}));
// export const Project_Content = styled(motion.div)(({ theme: {} }) => ({}));
