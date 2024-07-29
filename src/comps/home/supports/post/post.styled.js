/* eslint-disable */
import styled from "styled-components";
import { motion } from "framer-motion";

// export const Project_Content = styled.div(({ theme: {} }) => ({}));
// export const Project_Content = styled(motion.div)(({ theme: {} }) => ({}));

export const Post_Container = styled.div(({ theme: {} }) => ({
	width: "100%",

	/* has 3 rows */
	display: "flex",
	flexDirection: "column",

	background: "rgba(0, 0, 0, 0.1)",
	borderRadius: "5px",

	marginTop: "1.5rem",
	padding: "15px",

	".post_row_third": {},
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
				fontSize: "1.5rem",
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
		background: "rgba(255, 255, 255, .5)",

		fontSize: "1.1rem",
		fontWeight: "400",
		letterSpacing: ".1px",

		padding: "5px 10px",
		borderRadius: "3px",
	},
}));

/* REACTION COUNTS */
export const ReactionCounts_Container = styled.div(({ theme: {} }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
}));

/* this container is used inside .likes_counts_main_section */
export const Heart_Container = styled.div(({ theme: {}, $heart }) => ({
	/*  create animation for these elements.fyi transition animation doesnt work on display none.
		for now, use opacity 0 and then dipslay none use framer motion, //TODO
	 */
	display: $heart.length ? "flex" : "none",
	justifyContent: "center",
	alignItems: "center",

	marginRight: "15px",

	".heart_icon": {
		fontSize: "1rem",
	},

	".heart_number": {
		marginLeft: "5px",
		fontWeight: "700",
		cursor: "pointer",
	},

	position: "relative",

	/** this is the div that will hold the usernames and maybe user avatart
	 * who like the post and this will pop up when a user click the number next to likes.
	 *
	 * lets say 2 people smiled the post and in the media section, there will be a smile icon and number 2 next to it.
	 * when user clicks the number 2, then this div will be pop-up and will show those 2 users username and avatar maybe.
	 *
	 * in this case, this div position must be absolute, and its parents position must be relative. just mentioned it in the
	 * above of this comment.
	 *
	 * // TODO
	 * will do it later, after comment is done
	 */

	".heart_list": {
		height: "15rem",
		width: "10rem",
		background: "gray",

		borderRadius: "10px",

		position: "absolute",
		zIndex: "10",
		top: "2px",
		left: "30px",

		overflow: "auto", // or scroll
	},
}));

/* this container is used inside .likes_counts_main_section */
export const Smile_Container = styled.div(({ theme: {}, $smile }) => ({
	/*  create animation for these elements.fyi transition animation doesnt work on display none.
		for now, use opacity 0 and then dipslay none use framer motion, //TODO
	 */
	display: $smile.length ? "flex" : "none",
	justifyContent: "center",
	alignItems: "center",

	marginRight: "15px",

	".smile_icon": {
		fontSize: "1rem",
	},

	".smile_number": {
		marginLeft: "5px",
		fontWeight: "700",
	},
}));

/* this container is used inside .likes_counts_main_section */
export const Dislike_Container = styled.div(({ theme: {}, $dislike }) => ({
	/*  create animation for these elements.fyi transition animation doesnt work on display none.
		for now, use opacity 0 and then dipslay none use framer motion, //TODO
	 */
	display: $dislike.length ? "flex" : "none",
	justifyContent: "center",
	alignItems: "center",

	marginRight: "15px",

	".dislike": {
		fontSize: "1rem",
	},

	".dislike_number": {
		marginLeft: "5px",
		fontWeight: "700",
	},
}));

// export const Project_Content = styled.div(({ theme: {} }) => ({}));

// export const Project_Content = styled.div(({ theme: {} }) => ({}));
