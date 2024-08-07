/* eslint-disable */
import styled from "styled-components";
import { motion } from "framer-motion";

/* REACTION COUNTS */
export const ReactionCounts_Container = styled.div(
	({
		theme: {},
		$padding,
		$margin,
		$width,
		$gap,
		$numberFontSize,
		$numberLineHeight,
		$numberFontWeight,
		$numberPadding,
		$numberMargin,
		$likesCount,
	}) => {
		return {
			display: $likesCount > 0 ? "flex" : "none",
			justifyContent: "flex-start",
			alignItems: "center",
			gap: $gap ? $gap : "20px",

			width: $width ? $width : "fit-content",

			margin: $margin ? $margin : "10px 0px 0px 0px",
			padding: $padding ? $padding : "5px",

			".number": {
				fontWeight: $numberFontWeight ? $numberFontWeight : "700",
				cursor: "pointer",

				background: "rgba(255, 255, 255, .85)",

				lineHeight: $numberLineHeight ? $numberLineHeight : "15px",
				textAlign: "center",
				borderRadius: "2px",
				fontSize: $numberFontSize ? $numberFontSize : ".9rem",
				padding: $numberPadding ? $numberPadding : "0px 5px",
			},

			// background: "red",
		};
	}
);

/* this container is used inside .likes_counts_main_section */
export const Heart_Container = styled.div(({ theme: {}, $heart, $iconNumberGap }) => ({
	/*  create animation for these elements.fyi transition animation doesnt work on display none.
		for now, use opacity 0 and then dipslay none use framer motion, //TODO
	 */
	display: $heart.length ? "flex" : "none",
	justifyContent: "center",
	alignItems: "center",

	gap: $iconNumberGap ? $iconNumberGap : "3px",

	/* number common class styled in the above in parent section */
	".heart_number": {},

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
	position: "relative",

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

export const Smile_Container = styled.div(({ theme: {}, $smile, $iconNumberGap }) => ({
	/*  create animation for these elements.fyi transition animation doesnt work on display none.
		for now, use opacity 0 and then dipslay none use framer motion, //TODO
	 */
	display: $smile.length ? "flex" : "none",
	justifyContent: "center",
	alignItems: "center",
	gap: $iconNumberGap ? $iconNumberGap : "3px",

	/* number common class styled in the above in parent section */
	".smile_number": {},
}));

export const Dislike_Container = styled.div(({ theme: {}, $dislike, $iconNumberGap }) => ({
	/*  create animation for these elements.fyi transition animation doesnt work on display none.
		for now, use opacity 0 and then dipslay none use framer motion, //TODO
	 */
	display: $dislike.length ? "flex" : "none",
	justifyContent: "center",
	alignItems: "center",
	gap: $iconNumberGap ? $iconNumberGap : "3px",

	/* number common class styled in the above in parent section */
	".dislike_number": {},
}));

export const Display_User_Avatar = styled.div(
	({
		theme: {
			device: { mobile },
		},
		$imgWidth,
		$imgHeight,
		$width,
		$height,
		$border,
	}) => {
		return {
			img: {
				width: $imgWidth ? $imgWidth : "2.25rem",
				height: $imgHeight ? $imgHeight : "2.25rem",
				borderRadius: "50%",
				border: $border ? $border : "2px solid white",

				...(mobile && {
					width: "2rem",
					height: "2rem",
				}),
			},

			position: "relative",

			".joinline": {
				height: "6px",
				width: "6px",
				background: "rgba(0, 0, 0, .3)",
				position: "absolute",
				left: "-22px",
				top: "12px",
				borderRadius: "50%",
			},
		};
	}
);
export const Content_Section = styled.div(
	({
		theme: {
			device: { mobile },
		},
		$background,
		$padding,
	}) => {
		return {
			width: "fit-content",
			minWidth: "16rem",
			wordBreak: "break-word",
			background: $background ? $background : "rgba(0, 0, 0, .05)",
			padding: $padding ? $padding : "5px 10px",
			borderRadius: "10px",

			// backgroundColor: 'red',

			...(mobile && {
				width: "100%",
				minWidth: "100%",
				padding: "3px 5px 5px 10px",
			}),

			".username": {
				width: "100%",
				display: "flex",
				fontWeight: "600",
				lineHeight: "12px",
				fontSize: ".85rem",

				...(mobile && {
					fontSize: "0.8rem",
					lineHeight: "12px",
					fontWeight: "700",
				}),
			},

			".content": {
				width: "100%",
				fontSize: ".9rem",

				...(mobile && {
					fontSize: "0.85rem",
					lineHeight: "15px",
				}),
			},
		};
	}
);

export const Timeline_Section = styled.div(({ theme: {}, $imgWidth, $imgHeight, $width, $height, $border }) => {
	return {
		display: "flex",
		justifyContent: "space-between",

		padding: "0px 10px",
	};
});

export const Top_Row = styled.div(({ theme: { device: { mobile }}, $gap }) => {
	return {
		display: "flex",
		gap: $gap ? $gap : "10px",

		...(mobile && {
			gap: '8px',
			marginRight: '35px'
		}),

		".button": {
			fontSize: ".75rem",
			fontWeight: "500",
			cursor: "pointer",
			position: "relative",
		},
	};
});

export const Bottom_Row = styled.div(({ theme: {}, $gap }) => {
	return {
		display: "flex",
		gap: $gap ? $gap : "10px",
	};
});

export const Referral_Container = styled.div(({ theme: {}, $gap }) => {
	return {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",

		marginLeft: "6px",
		gap: "5px",

		".replied_to": {
			paddingTop: ".9px",
			fontSize: "0.7rem",
			fontWeight: "400",
			fontStyle: "italic",
		},

		".referred": {
			background: "rgba(124, 177, 255, .25)",
			padding: ".5px 4px",
			borderRadius: "10px",
			fontWeight: "500",
			fontSize: "0.8rem",
		},
	};
});

export const ViewReplies = styled.div(({ theme: {}, $gap }) => {
	return {
		display: "flex",
		gap: $gap ? $gap : "3px",
		width: "fit-content",

		padding: "2px 5px",
		marginTop: "7px",
		fontSize: "0.85rem",
		fontWeight: "500",
		textShadow: "1px 1px 2px rgba(0, 0, 0, .2)",
		cursor: "pointer",

		position:"relative",

		"&::before": {
			content: "'➤'",
			display:'inline-block',
			color: 'black',
			position:'absolute',
			top:'2.75px',
			left: '-10px'

		}
	};
});
