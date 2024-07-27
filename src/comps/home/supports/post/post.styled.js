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
					marginLeft: "7px",
					paddingTop: "4px",
					color: "#005eff",
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

			/**
			 * a like_button inside wrapper and that button is just in the center, which means when user
			 * click the center, it triggers popover to opne but when user clicks away from the center, it doesnt.
			 * in this case we have to make its height and width qoo% to make sure button keeps its parents full width and height.
			 * make sure to add the padding to the buttons after height and width already set up
			 * height and width is 100%
			 *
			 * button classname is like_button and button, select the button for common classname
			 */

			".like_wrapper, .comment_wrapper, .share_wrapper, .bookmark_wrapper": {
				fontSize: "1rem",
				fontWeight: "500",
				width: "7rem",

				border: "1px solid #ffffff80",
				borderRadius: "5px",
				textAlign: "center",
				lineHeight: "20px",
				cursor: "pointer",

				".button": {
					padding: "5px",
					height: "100%",
					width: "100%",
				},
			},

			/** likes_wrapper is a mother of like_button and Popoverjs. Popoverjs is a absolute position
			 * so that this mother wrapper must be relative. */
			".like_wrapper": {
				position: "relative",
			},

			/* bookmark_wrapper is just a small icon. no need to hold 7rem width in this case */
			".bookmark_wrapper": {
				width: "2.5rem",
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

export const Comment_Displaying_Section = styled.div(({ theme: {} }) => ({
	marginTop: "1rem",

	// background: "gray",

	height: "20rem",
	width: "100%",

	/* has 2 div inside and must be direction row, avatart and textArea */

	display: "flex",
	flexDirection: "row",

	".comment_input_section_with_user_avatar": {
		width: "100%",
		padding: "5px 0px",

		// background: "red",

		/* must be at the bottom */
		alignSelf: "flex-end",
		alignItems: "flex-start",

		display: "flex",

		".avatar_wrapper": {
			img: {
				width: "2.25rem",
				height: "2.25rem",
				borderRadius: "50%",
			},
		},

		".textarea_sendbutton_wrapper": {
			width: "100%",
			padding: "0px 5px 0px 8px",

			".textarea_wrapper": {
				width: "100%",
				height: "100%",
				height: "fit-content",

				display: "flex",
				flexDirection: "column",
				justifyContent: "flex-start",
				alignItems: "center",

				borderRadius: "10px",
				background: "#07161d",

				".textarea": {
					width: "100%",
					border: "none",
					overflow: "auto",
					outline: "none",
					WebkitBoxShadow: "none", // -webkit-box-shadow
					MozBoxShadow: "none", // -moz-box-shadow
					boxShadow: "none",
					resize: "none",
					padding: "7px 5px 7px 10px",

					fontSize: "1rem",
					borderRadius: "10px",
					background: "transparent",
					color: "white",

					maxHeight: '10rem',


					"&::placeholder": {
						color: "#ffffff50",
						paddingLeft: "5px",
					},
					// border: "1px solid #ffffff30",
				},

				".reply_with_images_smile_and_gifs_block": {
					display: "flex",
					justifyContent: "space-between",
					// background: 'red',

					width: "2.75rem",
					marginLeft: "10px",
				},

				".comment_send_button_with_sticker_gifs_wrapper": {
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					width: "100%",

					padding: "0px 5px",
					borderTop: "1px solid rgba(255, 255, 255, 0.1)",

					".comment_send_button_block": {
						margin: "5px 5px 5px 0px",

						span: {
							display: "inline-block",
							background: "#0d6efd",
							padding: "2px 5px",
							borderRadius: "5px",
							fontSize: ".8rem",
							fontWeight: "600",
							cursor: "pointer",
						},
					},
				},
			},
		},
	},
}));
