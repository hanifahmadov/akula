/* eslint-disable */
// import { motion } from "framer-motion";
import styled from "styled-components";
// export const Project_Content = styled(motion.div)(({ theme: {} }) => ({}));

/** remember
 * container -> section -> wrapper -> block
 * Comment is going to be a modal and it needs to be on the top of everything and to be a child of #root or body
 * */

export const Comment_Container = styled.div(({ theme: { backdrop }, $commentOpen }) => ({
	/** */
	position: "absolute",
	zIndex: "10",
	top: "0",
	left: "0",

	background: "rgba(0, 0, 0, .75)",
	height: "100%",
	width: "100%",

	display: $commentOpen ? "flex" : "none",
	justifyContent: "center",
	alignItems: "center",

	".comment_content_container": {
		width: "37rem",
		height: "50rem",

		background: "#1a2730",
		borderRadius: "20px",


	},

	".comment_body": {},
}));

export const Comment_Header = styled.div(({ theme: {} }) => ({
	borderBottom: "1px solid white",

	".headeer": {
		padding: "15px",
		fontSize: "1.5rem",
	},
}));

export const Comment_Body = styled.div(({ theme: {} }) => ({
	width: "100%",


	overflow:'scroll',

	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "flex-start",

	background: "#1a2730",

	borderRadius: "10px",

	padding: ".5rem 1rem",

	marginTop: "1rem",




	".row_first": {
		display: "flex",
		flexDirection: "row",



		".postowner_avatar_section": {
			width: "4rem",
			height: "100%",

			display: "flex",
			justifyContent: "center",

			img: {
				height: "3rem",
				width: "3rem",
				borderRadius: "50%",
			},
		},

		".comment_post_header_section": {
			".title_wrapper": {
				display: "flex",
				justifyContent: "flex-start",
				alignItems: "center",

				".title": {
					fontSize: "1.5rem",
					lineHeight: "1.5rem",
				},

				".faCircleCheck": {
					marginLeft: "7px",
					paddingTop: "4px",
					color: "#005eff",
				},
			},

			".timeline_wrapper": {
				textAlign: 'left',

				".timeline": {
					fontSize: ".75rem",
					color: "#ffffff80",
					textAlign: 'left'
				},

				".faUniversalAccess": {
					marginLeft: "5px",
					cursor: "not-allowed",
					fontSize: "12px",
					color: "#ffffff90",
				},
			},
		},
	},

	".row_second": {
		display: "flex",
		flexDirection: "column",

		// paddingLeft: "4rem",

		marginTop: "1rem",

		width: "100%",
		height:'100%',

		".text_section": {
			display: "flex",
			alignItems: "flex-start",

			width: "100%",
			marginTop: "10px",
			paddingLeft: "5px",
			fontSize: "1.25rem",
		},

		".media_section": {
			marginTop: "10px",
			borderRadius: "10px",

			width: "100%",

			display: "flex",
			alignItems: "flex-start",

			img: {
				width: "100%",
				height: '30rem',
				borderRadius: "10px",
			},
		},
	},
}));

// export const Project_Content = styled.div(({ theme: {} }) => ({}));
// export const Project_Content = styled.div(({ theme: {} }) => ({}));
// export const Project_Content = styled.div(({ theme: {} }) => ({}));
// export const Project_Content = styled.div(({ theme: {} }) => ({}));
// export const Project_Content = styled.div(({ theme: {} }) => ({}));
// export const Project_Content = styled.div(({ theme: {} }) => ({}));
