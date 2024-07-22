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
	maxWidth: "50rem",
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
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",

	padding: "1rem 20px 1rem 20px",
	borderRadius: "10px",

	".top_section": {
		width: "100%",
		height: "100%",

		padding: "0px",

		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",

		position: "relative",

		".signedUser_avatar": {
			height: "2.75rem",
			width: "2.75rem",
			borderRadius: "50%",
			position: "absolute",
			top: "4px",
		},

		".textarea_wrapper": {
			width: "100%",
			height: "100%",
			height: "10rem",
			height: "fit-content",

			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "center",

			marginLeft: "3.5rem",
			borderRadius: "10px",
			background: "#07161d",


			".textarea": {
				width: "100%",
				height: "100%",
				border: "none",
				overflow: "auto",
				outline: "none",
				WebkitBoxShadow: "none", // -webkit-box-shadow
				MozBoxShadow: "none", // -moz-box-shadow
				boxShadow: "none",
				resize: "none",
				padding: "12px",

				fontSize: "1.1rem",
				borderRadius: "10px",
				background: "transparent",
				color: "white",

				"&::placeholder": {
					color: "#ffffff80",
					paddingLeft: "5px",
				},
				// border: "1px solid #ffffff30",
			},

			".image_preview": {
				margin: ".5rem",
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
					display: 'block',
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
					border: '1px solid white',
				},
			},
		},
	},

	".bottom_section": {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",

		width: "100%",
		marginLeft: "9rem",
	},
}));
