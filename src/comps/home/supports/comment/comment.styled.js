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

	background: "rgba(0, 0, 0, .5)",
	height: "100%",
	width: "100%",

	display: $commentOpen ? "flex" : "none",
	justifyContent: "center",
	alignItems: "center",

	".comment_content_container": {
		height: "50rem",
		width: "40rem",

		background: "#1a2730",
		borderRadius: "20px",
	},

    ".comment_body": {

    }
}));

export const Comment_Header = styled.div(({ theme: {} }) => ({

    borderBottom: '1px solid white',

    ".headeer": {
        padding: '15px',
        fontSize: '1.5rem',
    }
}));



export const Comment_Body = styled.div(({ theme: {} }) => ({





}));






// export const Project_Content = styled.div(({ theme: {} }) => ({}));
// export const Project_Content = styled.div(({ theme: {} }) => ({}));
// export const Project_Content = styled.div(({ theme: {} }) => ({}));
// export const Project_Content = styled.div(({ theme: {} }) => ({}));
// export const Project_Content = styled.div(({ theme: {} }) => ({}));
// export const Project_Content = styled.div(({ theme: {} }) => ({}));
