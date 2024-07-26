/* eslint-disable */
import styled from "styled-components";
import { motion } from "framer-motion";

// export const Project_Content = styled.div(({ theme: {} }) => ({}));
// export const Project_Content = styled(motion.div)(({ theme: {} }) => ({}));

export const Post_Container = styled.div(({ theme: {} }) => ({
	width: "100%",

	display: "flex",
	flexDirection: "row",

	background: "#1a2730",

	borderRadius: "10px",
	overflow: "hidden",

	padding: "1rem 1rem 1rem 0rem",
	marginTop: "1rem",

	".postowner_avatar_section": {
		width: "5.5rem",
		height: "100%",

		// background: "blue",

		display: "flex",
		justifyContent: "center",

		img: {
			height: "3rem",
			width: "3rem",
			borderRadius: "50%",
		},
	},

	".post_content_section": {
		width: "100%",
		height: "100%",

		// background: "green",

		display: "flex",
		flexDirection: "column",

		".header_section": {
			".title_wrapper": {
				display: "flex",
				justifyContent: "flex-start",
				alignItems: "center",

				".title": {
					fontSize: "1.5rem",
					lineHeight: "1.5rem",
				},

				".faCircleCheck": {
					marginLeft: "10px",
				},
			},

			".timeline_wrapper": {
				".timeline": {
					fontSize: ".75rem",
					color: "#ffffff80",
				},

				".faUniversalAccess": {
					marginLeft: "5px",
					cursor: "not-allowed",
					fontSize: "12px",
					color: "#ffffff90",
				},
			},
		},

		".text_section": {
			marginTop: "10px",
		},

		".media_section": {
			marginTop: "10px",
			borderRadius: "10px",
			img: {
				height: "25rem",
				width: "25rem",
				borderRadius: "10px",
			},
		},

		".media_related_section": {
			marginTop: "1rem",
			width: "100%",
			display: "flex",
			justifyContent: "space-between",

			span: {
				fontSize: "1rem",
				fontWeight: "500",
				width: "7rem",

				border: "1px solid #ffffff80",
				borderRadius: "5px",
				padding: "5px 8px",
				textAlign: "center",
				lineHeight: "20px",
				cursor: "pointer",
			},

			".bookmark": {
				border: "none",
				fontSize: "1.1rem",
				width: "2.3rem",
				height: "2.3rem",

				border: "1px solid #ffffff80",
				borderRadius: "50%",
			},

			".likes": {
				padding: "0px",
				display: "inline-block !important",
				position: "relative",

				".sikko_like": {
					width: "100%",
					height: "100%",
					padding: "5px 8px",
				},
			},
		},
	},
}));

/* used in Post.js line 168 */
/** this main section holds 2 container */
export const MediaCounts_Section = styled.div(({ theme: {} }) => ({
	margin: "10px 0px 0px 0px",
	padding: "2px 0px",

	width: "100%",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",

	// background: "gray",

	".likesIcons_withTheirCounts_container": {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",

		/** all 3 likes icons with their counts under the text or image are inside this container  */
	},
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
	},

	".liked_users_lists": {
		height: "20rem",
		width: "10rem",
		background: "white",
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
