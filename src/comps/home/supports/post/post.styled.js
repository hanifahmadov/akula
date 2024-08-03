/* eslint-disable */
import styled from "styled-components";
import { motion } from "framer-motion";

// export const Project_Content = styled.div(({ theme: {} }) => ({}));
// export const Project_Content = styled(motion.div)(({ theme: {} }) => ({}));

export const AddPost_Container = styled(motion.div)(({ theme: {}, $addPostPadding }) => {
	return {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",

		width: "100%",
		background: "rgba(0, 0, 0, .1)",

		marginTop: "5px",
		padding: $addPostPadding ? $addPostPadding : "4px 0px 2px 3px",
		borderRadius: "10px",
	};
});

export const Post_Container = styled.div(({ theme: {} }) => ({
	width: "100%",

	/* has 3 rows */
	display: "flex",
	flexDirection: "column",

	background: "rgba(0, 0, 0, 0.1)",
	borderRadius: "5px",

	marginTop: "1.5rem",
	padding: "15px",

	".reaction_counts_and_button_groups_row_third": {},

	".all_comments_row_four": {
		display: "flex",
		flexDirection: "column",
		gap: "10px",

		width: "100%",
		maxHeight: "38rem",
		overflow: "scroll",

		marginTop: "1rem",
		padding: "10px 3px",

		background: "white",
	},

	".add_comment_wrapper_row_five": {},
}));

export const Post_Header_Container = styled.div(({ theme: {} }) => ({
	display: "flex",
	flex: "row",
	/* 2 columns */

	/* has img avatar */
	".post_column_one": {
		img: {
			width: "3rem",
			height: "3rem",
			borderRadius: "50%",
		},
	},

	/**
	 * 	has username and timeline of post
	 *
	 * 	this also has 2 rows,
	 * 	tob - user avatar
	 * 	bottom - timeline and fontawe
	 */
	".post_column_two": {
		marginLeft: "8px",

		position: "relative",
		top: "-3px",

		".header_top_row": {
			".username": {
				fontSize: "1.35rem",
				fontWeight: "600",
				letterSpacing: ".25px",
			},
		},

		".header_bottom_row": {
			lineHeight: "10px",

			".timeline": {
				fontSize: ".8rem",
				fontWeight: "500",
			},

			".faEarthAmericas": {
				cursor: "not-allowed",
			},
		},
	},
}));

export const Post_Content_Container = styled.div(({ theme: {} }) => ({
	marginTop: "15px",

	".content": {
		background: "rgba(255, 255, 255, 1)",

		fontSize: "1.1rem",
		fontWeight: "400",
		letterSpacing: ".1px",

		padding: "5px 10px",
		marginBottom: "10px",
		borderRadius: "5px",
	},

	".post_content_image_wrapper": {
		width: "100%",
		height: "auto",
		maxHeight: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden",

		background: "black",

		img: {
			maxWidth: "100%",
			maxHeight: "100%",
			objectFit: "contain",
			borderRadius: "0px",
		},
	},
}));

export const Post_Reaction_Container = styled(motion.div)(({ theme: {}, $commentOpen }) => {
	return {
		width: "100%",

		".comments_section": {
			/* has 2 row inside */
			width: "100%",

			marginTop: "15px",
			padding: "0px 5px",

			transition: "all .2s ease-in-out",

			paddingTop: "15px",

			background: "rgba(255, 255, 255, .5)",
			borderRadius: "5px",

			".all_comments_row": {
				display: "flex",
				flexDirection: "column",
				gap: "12px",

				maxHeight: "35rem",
				overflow: "scroll",

				/* has 2 row  */
				".first_comment": {},

				".rest_of_comments": {},
			},

			".comment_input_row": {
				/* nothing for now */
			},
		},
	};
});

export const Button_Groups_Container = styled.div(({ theme: {} }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",

	marginTop: ".75rem",
	padding: "0px",

	".like_wrapper ": {
		position: "relative",
	},

	".button": {
		width: "6rem",

		color: "#fff",
		background: "#000",

		textAlign: "center",
		fontSize: ".9rem",
		fontWeight: "600",

		padding: "2px",
		borderRadius: "0px",
		letterSpacing: ".25px",

		cursor: "pointer",
		transition: "all .1s ease-in-out",
	},

	".bookmark_button": {
		width: "2.5rem",
	},

	".share_button": {
		background: "rgba(0, 0, 0, 0.6)",
		color: "rgba(255, 255,255, .5)",
		cursor: "not-allowed",
	},
}));

export const AddComment_Container = styled.div(({ theme: {} }) => {
	/** */
	return {
		display: "flex",
		flexDirection: "row",
		// justifyContent: 'flex-start',
		// alignItems: 'center',

		width: "100%",

		padding: "12px 0px 0px 0px",

		".addComment_avatar_column": {
			img: {
				height: "2.75rem",
				width: "2.75rem",
				borderRadius: "50%",
				border: "3px solid rgba(0, 0, 0, 0.1)",
				alignSelf: "flex-start",
			},
		},

		".addComment_post_column": {
			width: "100%",
			".addComment_post_column_top_row": {
				width: "100%",
				padding: "0px 5px 0px 10px",
			},

			".addComment_post_column_bottom_row": {
				width: "100%",
				marginTop: "5px",

				display: "flex",
				justifyContent: "space-between",

				padding: "0px 5px 0px 10px",

				".addComment_image_icon": {
					marginLeft: "15px",

					color: "rgba(0, 0, 0, .25)",
					cursor: "not-allowed",
				},

				".addCommentSendButton": {
					marginRight: "12px",

					button: {
						width: "2.5rem",
						lineHeight: "15px",

						color: "#fff",
						background: "#000",

						textAlign: "center",
						fontSize: ".8rem",
						fontWeight: "600",

						padding: "1px",
						borderRadius: "0px",

						cursor: "pointer",
						transition: "all .1s ease-in-out",
					},
				},
			},
		},
	};
});
