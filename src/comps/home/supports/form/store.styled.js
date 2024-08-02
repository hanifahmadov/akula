/* eslint-disable */
import styled from "styled-components";
// import { motion } from "framer-motion";

export const Textarea_Container = styled.div(
	({ theme: {}, $fontSize, $padding, $maxHeight, $borderRadius, $parentPadding }) => {
		return {
			display: "flex",
			flexDirection: "column",

			width: "100%",
			height: "fit-content",
			background: "white",

			overflow: "hidden",

			padding: $parentPadding ? $parentPadding : "10px 2px",
			borderRadius: $borderRadius ? $borderRadius : "10px",

			".textarea": {
				width: "100%",
				maxHeight: $maxHeight ? $maxHeight : "8rem",
				border: "none",
				overflow: "auto",
				outline: "none",
				WebkitBoxShadow: "none", // -webkit-box-shadow
				MozBoxShadow: "none", // -moz-box-shadow
				boxShadow: "none",
				resize: "none",
				padding: $padding ? $padding : "0px 15px",
				fontSize: $fontSize ? $fontSize : "1.1rem",
				borderRadius: $borderRadius ? $borderRadius : "10px",
				background: "transparent",
				color: "black",

				"&::placeholder": {
					color: "rgba(0, 0, 0, .25)",
					paddingLeft: "5px",
				},
				// border: "1px solid #ffffff30",
			},

			".addComment_icons": {
				".addComment_image_icon": {
					display: "inline-block",
					marginLeft: "15px",
					margin: "2px 15px",
				},
			},
		};
	}
);

export const Image_Preview_Container = styled.div(
	({ theme: {}, $imgHeight, $imgWidth, $closeButtonFontSize, $parentMargin }) => ({
		alignSelf: "flex-start",
		width: "fit-content",

		margin: $parentMargin ? $parentMargin : "1rem 0rem",
		border: "1.5px solid white",
		borderRadius: "10px",

		position: "relative",

		".selected_image": {
			height: $imgHeight ? $imgHeight : "15rem",
			width: $imgWidth ? $imgWidth : "15rem",
			borderRadius: "9px",
		},

		".faCircleXmark": {
			display: "block",
			lineHeight: "0px",
			textAlign: "center",
			overflow: "hidden",
			position: "absolute",
			top: "-7px",
			right: "-7px",
			fontSize: $closeButtonFontSize ? $closeButtonFontSize : "1.4rem",
			cursor: "pointer",
			background: "white",
			color: "red",
			borderRadius: "50%",
			border: "1px solid white",
		},
	})
);

export const Uploads_Container = styled.div(({ theme: {}, $labelHeight, $labelWidth, $gap }) => ({
	display: "flex",
	gap: $gap ? $gap : "10px",

	".select_image, .select_video, .select_poll ": {
		background: "rgba(0, 0, 0, 0.1)",
		height: $labelHeight ? $labelHeight : "28px",
		width: $labelWidth ? $labelWidth : "28px",

		borderRadius: "3px",

		label: {
			height: "100%",
			width: "100%",

			display: "flex",
			alignItems: "center",
			justifyContent: "center",

			fontSize: "13px",
			cursor: "pointer",
		},
	},

	".select_video": {
		"& > *": {
			pointerEvents: "none",
			color: "rgba(0, 0, 0, 0.2)",
		},
	},

	".select_poll": {
		"& > *": {
			pointerEvents: "none",
			color: "rgba(0, 0, 0, 0.2)",
		},
	},
}));

export const Form_Left_Column = styled.div(({ theme: {} }) => {
	return {};
});

export const Form_Right_Column = styled.div(({ theme: {}, $padding }) => {
	return {
		width: "100%",
		padding: $padding ? $padding : "0px 5px",

		".textarea_and_image_preview_wrapper": {},

		".media__and_submit_button_wrapper": {
			display: "flex",
			justifyContent: "space-between",

			width: "100%",

			marginTop: ".5rem",
			padding: "0px 5px",
		},
	};
});

export const User_Avatar_Container = styled.div(({ theme: {}, $width, $height, $border }) => {
	return {
		img: {
			width: $width ? $width : "3.5rem",
			height: $height ? $height : "3.5rem",
			borderRadius: "50%",
			border: $border ? $border : "3px solid rgba(0, 0, 0, 0.05)",
			alignSelf: "flex-start",
		},
	};
});

export const Replaying = styled.div(({ theme: {}, $width, $height, $border }) => {
	return {
		lineHeight: "10px",
		".replying_to": {
			fontSize: "9px",
			fontStyle:'italic',
			fontWeight:'400',
		},

		".username": {
			fontSize: "10px",
			background: "#cfe1fd",
			padding:'2px 4px',
			margin:'0px 3px',
			borderRadius:'5px',
			fontWeight:'600',
		},
	};
});

export const Button = styled.div(
	({
		theme: {},
		$fontSize,
		$color,
		$background,
		$fontWeight,
		$padding,
		$letterSpacing,
		$hoverBackground,
		$boredrRadius,
	}) => {
		return {
			color: $color ? $color : "#fff",
			background: $background ? $background : "#052c65",

			fontSize: $fontSize ? $fontSize : "1rem",
			fontWeight: $fontWeight ? $fontWeight : "600",
			textAlign: "center",

			padding: $padding ? $padding : "2px 5px",
			borderRadius: $boredrRadius ? $boredrRadius : "2px",
			letterSpacing: $letterSpacing ? $letterSpacing : ".25px",

			cursor: "pointer",
			transition: "all .1s ease-in-out",

			"&:hover": {
				background: $hoverBackground ? $hoverBackground : "#000",
			},
		};
	}
);

// export const Form_Left_Column = styled.div(({ theme: {} }) => {

// 	return {

// 	};
// });
